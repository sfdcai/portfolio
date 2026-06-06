import os

raw_path = '/root/portfolio/raw/raw.txt'
output_dir = '/root/portfolio'

with open(raw_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

file_paths = [
    'content/profile/about.md',
    'content/profile/home.md',
    'content/projects/employee-engagement.md',
    'content/projects/ai-product-platform.md',
    'content/projects/homelab.md',
    'content/projects/salesforce-integration.md',
    'content/labs/homelab-network.md',
    'content/labs/monitoring.md',
    'content/architecture/salesforce-sap.md',
    'content/architecture/ai-agents.md',
    'content/blog/salesforce-devops.md',
    'content/blog/ai-agents.md',
    'content/profile/skills.md'
]

# Map each file's starting line index
file_starts = {}
for i, line in enumerate(lines):
    for path in file_paths:
        if path in line:
            file_starts[path] = i

sorted_starts = sorted(file_starts.items(), key=lambda x: x[1])

for idx, (path, start_line) in enumerate(sorted_starts):
    end_line = sorted_starts[idx+1][1] if idx + 1 < len(sorted_starts) else len(lines)
    file_lines = lines[start_line+1:end_line]
    
    # Strip any wrapping ```md and ``` at the start/end
    content = "".join(file_lines)
    content_lines = content.splitlines()
    
    if content_lines:
        if content_lines[0].strip() == '```md':
            content_lines = content_lines[1:]
        if content_lines and content_lines[-1].strip() == '```':
            content_lines = content_lines[:-1]
            
    # Clean up trailing metadata/headers that belong to subsequent sections
    while content_lines and (
        content_lines[-1].strip().startswith('#') or 
        content_lines[-1].strip().startswith('🚀') or
        content_lines[-1].strip().startswith('🧪') or
        content_lines[-1].strip().startswith('🧠') or
        content_lines[-1].strip().startswith('🎯') or
        content_lines[-1].strip().startswith('📝') or
        'BLOG (SEO ENGINE)' in content_lines[-1] or
        'GLOBAL PROFILE DATA' in content_lines[-1] or
        'PROJECTS' in content_lines[-1] or
        'LABS' in content_lines[-1] or
        'ARCHITECTURE' in content_lines[-1]
    ):
        content_lines.pop()
        
    # Let's fix specific formatting issues inside content_lines
    fixed_lines = []
    in_mermaid = False
    for line in content_lines:
        stripped = line.strip()
        
        # Salesforce ↔ SAP Integration specific fix for missing closing backticks and missing list markers
        if path == 'content/architecture/salesforce-sap.md':
            if stripped == '```mermaid':
                in_mermaid = True
            elif in_mermaid and stripped == 'Key Principles':
                fixed_lines.append('```')  # Close the mermaid block
                fixed_lines.append('')
                fixed_lines.append('## Key Principles')
                in_mermaid = False
                continue
            elif not in_mermaid and stripped in ['Decoupled architecture', 'Event-driven communication', 'Error handling & retries', 'Data consistency']:
                fixed_lines.append(f'- {line}')
                continue
                
        # AI Agent Architecture specific fix
        if path == 'content/architecture/ai-agents.md':
            if stripped == '```mermaid':
                in_mermaid = True
            elif in_mermaid and stripped == 'Focus Areas':
                fixed_lines.append('```')  # Close the mermaid block
                fixed_lines.append('')
                fixed_lines.append('## Focus Areas')
                in_mermaid = False
                continue
            elif not in_mermaid and stripped in ['Tool use', 'Memory systems', 'Prompt orchestration', 'Agent collaboration']:
                fixed_lines.append(f'- {line}')
                continue
                
        fixed_lines.append(line)
        
    final_content = "\n".join(fixed_lines).strip() + "\n"
    
    full_path = os.path.join(output_dir, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w', encoding='utf-8') as out_f:
        out_f.write(final_content)
    print(f"Wrote {path} ({len(final_content)} bytes)")
