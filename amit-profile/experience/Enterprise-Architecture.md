# Enterprise Integration Patterns

This document details the core integration patterns and architectural frameworks I employ to connect front-end cloud platforms (Salesforce) with legacy enterprise backends (SAP ERP, transactional databases).

## 1. Asynchronous Event-Driven Messaging (Pub/Sub)
* **Problem:** Direct synchronous REST calls between Salesforce and SAP cause tight coupling and can lead to performance degradation if one system experiences high latency or downtime.
* **Pattern:** We publish **Salesforce Platform Events** on record changes. An ESB (MuleSoft or Apache Kafka) subscribes to these events and pushes them to an ingestion queue.
* **Benefit:** Absolute decoupling. If SAP goes down for maintenance, Salesforce continues to queue events locally. Once SAP is restored, the queue is processed sequentially with zero data loss.

## 2. Hub-and-Spoke Integration
* **Problem:** Point-to-point connections between systems scale exponentially in complexity (N(N-1)/2 connections).
* **Pattern:** All systems communicate via a centralized middleware hub (MuleSoft ESB). 
* **Benefit:** Simplifies integration maps, consolidates monitoring, and standardizes data transformations.

## 3. Request-Reply Pattern
* **Problem:** Sometimes synchronous verification is required (e.g., checking real-time stock levels during checkout).
* **Pattern:** Salesforce Lightning Web Components call an Apex method that executes a REST request to a MuleSoft endpoint, which queries SAP in real-time.
* **Benefit:** Immediate feedback to the user, with timeouts set to a maximum of 5 seconds to prevent transaction locks.
