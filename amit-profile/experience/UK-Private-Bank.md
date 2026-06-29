# Case Study: Onboarding Recovery & CI/CD Setup
## Industry: Major UK Retail & Private Banking Group

## 1. Situation
The onboarding project was in a critical "red" status due to unclear requirements, shifting scopes, and architectural blockers. The client required a secure interface to onboard customers using Salesforce Experience Cloud, OmniStudio, and a custom data model, but the project was stalled, threatening the delivery schedule.

## 2. Challenges
* **Challenging Stakeholder Dynamics:** Enterprise architects and business teams were out of sync regarding scope.
* **Evolving Requirements:** Standard Salesforce configurations were insufficient for the complex regulatory requirements of private banking.
* **No Automated Release Pipeline:** Deployment errors and environment drifts were slowing down delivery.

## 3. Actions Taken
* **Architectural Realignment:** Led requirement workshops to clarify scopes and secure design approvals from Santander's Enterprise Architects.
* **OmniStudio Design:** Designed and developed secure OmniScripts and Integration Procedures, aligning them with the bank's strict security guidelines.
* **Automated CI/CD Pipeline:** Designed and implemented a git-based branching strategy and CI/CD pipelines using **GitHub Actions**. This allowed automated testing, code linting, and delta deployments on every commit.
* **Data Model Standardization:** Refined sharing rules, sharing sets, and custom permissions to ensure complete data isolation in compliance with banking regulations.

## 4. Outcomes
* **Red to Green Stabilization:** Moved the project from red status to a stable, predictable delivery cycle.
* **Appreciated for DevOps Enablement:** Earned strong praise from client leadership for establishing the automated release pipeline, which reduced deployment times by 75% and minimized manual deploy risks.
