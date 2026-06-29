# AI Security & Governance Frameworks
## Cost Caps, Safety Bounds & Evaluation Gates

Autonomous systems require guardrails to ensure safety, cost control, and performance.

## 1. Security & Leak Defense
* **Canary Tokens:** Inject unique tokens into the system prompt. If detected in the response output, block the transaction immediately.
* **Anti-Extraction Rules:** Configure models to reject requests attempting to retrieve system prompts.

## 2. Cost Management
* Set token usage limits per API session.
* Use lightweight routing models (Claude Haiku) to evaluate input requests, calling heavy models (Claude Sonnet) only when complex reasoning is required.

## 3. Evaluation Gates (Evals)
* Maintain automated test suites running factual checks, bound evaluations, and safety checks on model outputs before promoting new prompts to production.
