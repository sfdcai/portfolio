# Enterprise Security Architecture
## Zero-Trust Identity, Authentication & Data Protection

Security is the primary consideration when designing enterprise platforms. This document outlines the zero-trust security patterns I implement.

## 1. Zero-Trust Identity & Access Management (IAM)
* **Single Sign-On (SSO):** Enforce identity provider (IdP) integration (Okta, Azure AD) for all Salesforce environments, backed by Multi-Factor Authentication (MFA).
* **Role-Based Access Control (RBAC):** Restrict user privileges using permission set groups, avoiding broad profile assignments.

## 2. Secure Integration Patterns
* **Mutual TLS (mTLS):** Handshakes between Salesforce, middleware, and SAP require mutual client certificate validation.
* **OAuth 2.0 JWT Bearer Flow:** Integration interfaces authenticate securely via signed JSON Web Tokens (JWT), removing password risks.

## 3. Data Protection & Obfuscation
* **Encryption at Rest:** Enforce Salesforce Shield Platform Encryption for sensitive PII fields.
* **Data Masking:** Sandboxes are masked post-refresh to obfuscate customer data before developer access.
* **Edge Protection (WAF):** Network traffic routes through Web Application Firewalls (WAF) to filter SQL injections and common vulnerability vectors.
