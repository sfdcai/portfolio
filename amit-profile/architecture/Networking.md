# Network Segmentation & Firewalls
## Isolated Lab Topology

This document details the configuration rules for creating isolated lab networks to host testing environments.

## 1. VLAN Segmentation
* Broadcast isolated VLANs to group devices by trust tier:
  * **VLAN 10 (Management):** Host hypervisor access.
  * **VLAN 30 (Lab/R&D):** Build runners and database servers.
  * **VLAN 40 (IoT):** Smart devices, isolated from internal resources.

## 2. Firewall Rules
* Enforce a Default-Deny rule block.
* **Isolated Routing:** Block VLAN 30 (Lab) and VLAN 40 (IoT) from initiating connections to VLAN 10 (Management).
* **NAT Gateways:** Configure port forwarding strictly through reverse proxies, limiting exposed ports to SSL (443).

## 3. DNS Controls
* Redirect all port 53 (DNS) queries to AdGuard Home to filter trackers and prevent DNS bypasses.
