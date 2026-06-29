# Proxmox VE Cluster Engineering
## Hypervisor Configurations & Hardening

## 1. Context
A robust R&D lab requires a stable virtualized foundation. This project details the engineering configurations applied to my **Proxmox VE** hypervisor node.

## 2. Technical Stack
* **Hypervisor:** Proxmox Virtual Environment
* **Filesystems:** ZFS (RAID 0/1)
* **Monitoring:** Netdata, systemd-journald

## 3. Core Capabilities

### Hardware Refurbishment & Tuning
* Recovered and tuned server hardware (e.g., Dell Precision workstation node).
* Resolved kernel boot errors, configured thermal management profiles, and ran memory stability diagnostics.

### ZFS Storage Configuration
* Set up a ZFS mirrored storage pool using enterprise SSDs.
* **ARC Limit Tuning:** Limited ZFS Adaptive Replacement Cache (ARC) memory footprint to prevent ZFS from consuming all host RAM during intensive disk writes.

### LXC Container Optimization
* Deployed unprivileged Linux Containers (LXC) for lightweight services.
* Configured local resource quotas and mount points.

## 4. Engineering Impact
* **High Density:** Efficient resource allocation allowed running 15+ containers and VMs on a single i7 hardware node with under 40% memory pressure.
