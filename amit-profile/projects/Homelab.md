# Homelab: Private Hypervisor Sandbox
## Local R&D Infrastructure

## 1. Context
To test enterprise integrations, deploy microservices, and experiment with AI models in a secure sandbox, I built a highly available homelab cluster.

## 2. Technical Stack
* **Hypervisor:** Proxmox VE
* **Hardware:** Dell Precision 5520 & custom Intel i7 nodes (rebuilt & optimized)
* **Containers & OS:** Linux Containers (LXC), Ubuntu Server, Alpine Linux
* **Storage:** Local ZFS storage pools, Synology NAS NFS backups

## 3. Core Capabilities

### Microservices Orchestration
* Hosts containerized development databases (PostgreSQL, SQLite), git runners, and test servers.
* Deployed a local **Ollama** server hosting Llama3 and Mistral models to test offline AI pipelines.

### Resource Allocation & Tuning
* Configured RAM ballooning, ZFS arc size allocations, and CPU core pinning to ensure heavy services (like databases) do not impact host stability.

### Backup Recovery
* Enforced daily automated snapshot backups to an NFS NAS share, allowing single-click rollback of test servers.

## 4. Engineering Impact
* **Cost Savings:** Replaced expensive cloud test environments with local resources, saving hundreds of dollars in operational costs.
* **Zero Downtime:** Automated snapshots allow testing destructive migrations with zero fear of permanent data loss.
