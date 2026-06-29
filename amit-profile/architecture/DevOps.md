# Release Governance & Branching Models
## CI/CD Pipelines & Version Control Best Practices

Resilient delivery requires strong version control discipline and automated verification gates.

## 1. Git-Based Branching Model
* **Trunk-Based Delivery:** Developers branch off `develop` to build features.
* **Pull Request Reviews:** Merging to integration branches requires approval from lead architects and a successful CI build.

## 2. Automated Pipeline Gates
* **Linter Checks:** Run PMD / ESLint to catch security flaws or bad coding practices before compiling.
* **Validation Deploys:** Validate metadata packages against target orgs before release days.
* **Unit Testing:** Apex test execution must run all tests with a minimum threshold of 85% test coverage.

## 3. Environment Strategy
* **Scratch Orgs:** Used by developers to test individual user stories.
* **Sandbox Verification:** Staging and UAT sandboxes are refreshed regularly to match production metadata states.
