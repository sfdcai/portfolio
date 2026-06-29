# Monitoring & Observability Stack
## Centralized Telemetry Dashboards

## 1. Context
Observing multiple servers, virtualization nodes, network firewalls, and IoT controllers requires a centralized logging and telemetry system. This project details the integration of **Prometheus & Grafana** with environmental metrics.

## 2. Technical Stack
* **Telemetry DB:** Prometheus
* **Dashboard Engine:** Grafana
* **Environmental Hub:** Home Assistant
* **Alert System:** AlertManager

## 3. Core Capabilities

### Unified Dashboards
* Configured Grafana dashboards to query metrics from the Prometheus database.
* Renders real-time graphs tracking CPU, RAM, network bandwidth, and ZFS pool health across all physical hardware.

### Environmental Integration
* Integrated Home Assistant sensor feeds (rack cabinet temperatures, smart plug power draw in Watts) directly into Grafana.
* Allows correlation of physical rack temperatures with CPU workloads.

### Alert Routing
* Configured AlertManager to route warning notifications to Telegram channels when a host goes offline, disk space exceeds 85%, or temperature thresholds are breached.

## 4. Engineering Impact
* **Centralized Observability:** Eliminates the need to log into individual servers to diagnose performance degradations.
