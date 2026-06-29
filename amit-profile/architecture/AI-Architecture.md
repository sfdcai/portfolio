# AI Agent Architecture
## Multi-Agent Systems & Tool Orchestration

This blueprint outlines the recommended architecture for deploying multi-agent AI systems in enterprise environments.

## 1. Orchestrator-Router Topology
To prevent non-deterministic loops, we implement a centralized routing structure:
* **The Router Agent:** Evaluates user intent, builds an execution plan, and calls specialized sub-agents.
* **Sub-Agents:** Equipped with narrow, strictly validated toolsets (e.g., Salesforce database access, billing query tools).

## 2. Memory & State Serialization
* **Session Cache (Short-term):** Active conversation log stored in Redis.
* **Semantic Vector DB (Long-term):** Supabase pgvector stores embedded documentation chunks (`text-embedding-3-small`).
* **State Checkpointing:** Mid-workflow states are serialized to a PostgreSQL database, allowing agents to recover gracefully from timeouts or errors.

## 3. Tool Calling Boundaries
* All tool specifications must be defined using strict JSON Schema guidelines.
* Direct SQL executions or metadata updates are forbidden. Agents must call intermediate APIs that validate input parameters.
