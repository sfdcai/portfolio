# OpenWrt Network Gateway Configuration
## Custom Routing & Traffic Isolation

## 1. Context
A home lab sandbox requires strict network isolation to prevent test servers, IoT devices, or guest devices from accessing primary administration interfaces. This project outlines the custom **OpenWrt** routing configuration.

## 2. Technical Stack
* **OS:** OpenWrt Custom Build
* **Hardware:** Linksys/TP-Link Router AP
* **Services:** dnsmasq, AdGuard Home DNS, iptables

## 3. Core Capabilities

### Network Segmentation
* Configured virtual interfaces to broadcast separate networks:
  * Admin LAN (VLAN 10), Trusted Wifi (VLAN 20), Lab Subnet (VLAN 30), Guest Wifi (VLAN 50).

### Firewall Policies
* Configured iptables rules to prevent cross-VLAN communication:
  * Devices in the Lab Subnet (VLAN 30) can access the internet to download dependencies but cannot ping or SSH into the Management LAN (VLAN 10).

### Local DNS Override
* Custom DNS routing rules point all VLAN clients to AdGuard Home. Overrides router advertisements to prevent clients from bypassing local DNS filters.

## 4. Engineering Impact
* **Absolute Network Isolation:** Test environments are completely locked down from corporate devices and home network folders.
