# Case Study: Luxury Automotive Experience Cloud Portal
## Secure Regulatory Redress Platform with Passwordless Login

## 1. Context
A major global luxury automotive manufacturer required a highly secure Salesforce Experience Cloud portal to administer its regulatory financial redress program. The platform needed to collect claims data from millions of public customers under intense legal and compliance scrutiny.

## 2. Challenges
* **Identity Verification (IDV) Constraints:** The platform could not use traditional username/password credentials, as claimants needed quick, secure, one-time access to check their redress eligibility.
* **Absolute Compliance:** Data privacy, audit logging, and encryption had to comply with strict regulatory frameworks.
* **Premium User Experience:** The portal needed to align perfectly with the automotive manufacturer's luxury brand guidelines.

## 3. Architectural Design

```
  ┌───────────────────────────────────────────────────────────┐
  │                 User Input Credentials                    │
  │    (Agreement Number + Postcode + Surname Match)           │
  └─────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │         Custom Identity Verification APEX Engine          │
  │  (Validates against encrypted Customer Records DB)       │
  └─────────────────────────────┬─────────────────────────────┘
                                │
                   ┌────────────┴────────────┐
                   ▼                         ▼
            [Match Found]             [No Match/Block]
                   │                         │
                   ▼                         ▼
  ┌─────────────────────────────────┐  ┌──────────────────────┐
  │ Generate Secure Session Token   │  │ Exceeded Limits      │
  │ & Authorize Experience Portal   │  │ Lock IP & Log Audit  │
  └─────────────────────────────────┘  └──────────────────────┘
```

### Passwordless Login Architecture
* Engineered a custom Apex controller that validates incoming login attempts by matching three encrypted customer attributes: **Postcode, Surname, and Agreement Number**.
* Upon confirmation, the platform generates a secure session token to authorize access to the Experience Portal, preventing unauthorized entry.
* Implemented rate-limiting and brute-force prevention policies on the authentication endpoints.

### User Interface & Brand Styling
* Styled using LWC, Vanilla CSS, and custom branding assets.
* Built responsive, accessible layouts conforming to WCAG AA guidelines.

### Data Security & Privacy
* Enforced encryption at rest for claimant personal data.
* Implemented detailed audit trails logging all access attempts, claims updates, and payouts.

## 4. Engineering Impact
* **High Adoption Rate:** Enabled millions of users to submit claims quickly without the friction of registering password credentials.
* **Zero Breaches:** Successfully passed multiple enterprise security audits and penetration tests.
