# Salesforce Core Design Guidelines
## Apex Patterns, LWC Performance & OmniStudio Governance

To build maintainable Salesforce solutions, development teams must adhere to standard design guidelines.

## 1. Apex Trigger Frameworks
* **One Trigger Per Object:** Restrict Apex triggers to a single dispatching framework (e.g., Trigger Handler pattern).
* **Decoupled Logic:** Apex triggers must delegate execution to utility handler classes. No business logic should be written directly in the trigger file.
* **Bulkification:** Apex methods must handle collections (Lists, Maps) to prevent SOQL limit exceptions during data updates.

## 2. LWC Performance Rules
* Minimize server trips using wire service caching (`@AuraEnabled(cacheable=true)`).
* Avoid heavy nested rendering; break components into modular, reusable UI blocks.

## 3. OmniStudio Procedures
* Consolidate database queries into single Integration Procedures rather than executing multiple DataRaptor extracts.
* Enforce strict cache timeouts on OmniStudio procedures to reduce server load.
