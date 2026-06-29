# AI-Native Salesforce DevOps
## Automated Metadata Packaging & CI/CD Optimization

## 1. Context
Managing Salesforce metadata deployments in enterprise environments is notoriously difficult. Merging large profiles, layouts, and custom object files often leads to conflicts and failed validations. This project focuses on utilizing automation scripts to optimize metadata deployments.

## 2. Technical Stack
* **Languages & Scripting:** Node.js, Python, Bash
* **Salesforce Tooling:** SFDX CLI, Metadata API
* **CI/CD Platform:** GitHub Actions / Azure DevOps

## 3. Core Capabilities

### Automated Package.xml Generation
* Developed a python script (`sf-package-builder`) that compares the local git branch with the target branch and extracts only the modified metadata components.
* Programmatically builds a customized `package.xml` manifest containing the delta changes.

### Automated Metadata Comparison
* Built a Node.js utility that parses raw Salesforce XML metadata files (e.g., permission sets, custom profiles).
* Automatically removes redundant layout assignments and system permissions that cause target deployment validation errors.

### Authorization URL Automation
* Configured automated scripts to parse SFDX authorization URLs (`authURL`) stored securely in vault repositories.
* Allows CI/CD runners to dynamically authenticate with scratch orgs and sandboxes without exposing passwords.

## 4. Engineering Impact
* **Validation Failure Reduction:** Reduced deployment validation failures by 60%.
* **Speed to Deploy:** Delta deployments reduced commit-to-sandbox deployment times from 45 minutes to under 5 minutes.
