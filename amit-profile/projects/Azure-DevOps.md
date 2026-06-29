# Azure DevOps Deployment Pipelines
## Continuous Integration & Automated Delivery

## 1. Context
Enterprise Salesforce teams require robust pipelines to automate code validation and deployments across multi-tiered sandbox environments. This project outlines the standard templates I use for **Azure DevOps**.

## 2. Technical Stack
* **Platform:** Azure DevOps Pipelines
* **Runner Environments:** Ubuntu VM agents
* **Tooling:** Salesforce CLI (SFDX), node-junit reports

## 3. Core Capabilities

### Validation Gates
* Triggers automated pipelines on Pull Requests.
* Executes metadata syntax checks, PMD security scans, and runs all Apex test classes.
* If test coverage falls below 85% or any tests fail, the PR merge is blocked.

### Delta Deployments
* Integrates `sf-git-delta` to identify changed components.
* Deploys only the diff components to the sandbox, cutting build times significantly.

### Release Automation
* Automatically promotes approved metadata changes to staging and production sandboxes upon merging to release branches.

## 4. Engineering Impact
* **Deployment Automation:** Eliminated manual change-set compilation, reducing manual deployment errors by 90%.
