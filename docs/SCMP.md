# Software Configuration Management Plan (SCMP)
**Project:** E-Commerce Platform  **Team:** SEN-Team-A  **Version:** 0.2 (draft)  **Course:** SEN 401

> Fields marked **[FILL]** must be completed by the team before submission (names, dates, cadence).

## 1. Introduction
### 1.1 Purpose
This Software Configuration Management Plan (SCMP) sets out how SEN-Team-A manages change to the E-Commerce Platform, from the first commit to final submission. It defines how configuration items are identified, how changes to them are requested, approved and implemented, how progress is reported, and how the team checks that its practice matches this plan.

The plan has two audiences. Team members use it as a working instruction manual for everyday changes. The course lecturer uses it as the standard against which the team's repository and Jira records are audited.

### 1.2 Scope
**The system.** The E-Commerce Platform is an online store modelled on large marketplaces such as Amazon. Customers can browse and search for products, create accounts, add items to a cart, place orders, make payments and track deliveries. Administrators manage products, customers, orders, inventory and sales.

**What this plan covers.** Every configuration item stored in the GitHub repository `SEN-Team-A/e-commerce`, and every change request tracked in the Jira space `ECOM`, for the whole development and maintenance of the platform.

**What this plan does not cover.** Hosting infrastructure and services run by third parties (for example payment providers) are outside the team's configuration control. The versions and settings the platform depends on are still recorded, under Section 5 (Supplier / Subcontractor Control).

### 1.3 Configuration items
The following categories of items are under configuration control.

| Category | Items | Location |
|---|---|---|
| Source code | Frontend, backend and API code | `src/` |
| Tests | Automated test suites | `tests/` |
| Documentation | This SCMP, the README, the change request template | `docs/`, `README.md` |
| Build and delivery | CI pipeline definition, dependency list | `.github/workflows/`, `package.json` |
| Governance and records | CODEOWNERS, pull request template, CHANGELOG, CCB minutes, status reports, audit checklists | `.github/`, `CHANGELOG.md`, `docs/ccb-minutes/`, `docs/status-reports/`, `docs/audits/` |

Requirements and design documents (SRD and SDD) will be added to this list under `docs/` when they are produced. An item joins or leaves the list only through an approved change request. Section 3.1 explains how items are named, versioned and baselined.

### 1.4 Definitions
- **SCM (Software Configuration Management):** identifying, organising, tracking and controlling changes to software throughout its life cycle.
- **SCMP:** this document, which defines the procedures and responsibilities for SCM on this project.
- **CI (Configuration Item):** any component or document that is placed under configuration control.
- **Baseline:** a reviewed and approved version of one or more CIs, tagged in Git, that serves as the reference for later changes.
- **CR (Change Request):** a formal proposal to change a baselined CI, recorded in Jira as a Change Request with a ticket key such as `ECOM-7`.
- **CCB (Change Control Board):** the group that approves or rejects change requests.
- **CM (Configuration Manager):** the person responsible for overseeing the SCM activities and for compliance with this plan.
- **Branch:** an isolated line of work in Git. Each approved change is made on its own branch.
- **Pull request (PR):** a request on GitHub to merge a branch into `main`, reviewed before it is accepted.
- **Tag:** a named, permanent marker on a Git commit, used to record a baseline.

### 1.5 References
- SEN 401 Software Configuration Management and Maintenance, lecture slides, Weeks 1 to 10, Pan-Atlantic University.
- IEEE Std 828-2012, Standard for Configuration Management in Systems and Software Engineering.
- Project repository: https://github.com/SEN-Team-A/e-commerce

### 1.6 Document overview
Section 2 names the roles and the rules that govern change. Section 3 describes the four SCM activities: identification, control, status accounting, and audits and reviews, together with surveillance. Section 4 lists the tools and environment. Section 5 explains how external components are controlled. Section 6 sets out which records are kept, where and for how long.

### 1.7 Document history
| Version | Date | Description | Author | Ticket |
|---|---|---|---|---|
| 0.1 | 2026-11-09 | Initial skeleton and repository setup | SEN-Team-A | none |
| 0.2 | 2026-11-16 | Section 1 (Introduction) written | Kolawole Agbolade | ECOM-5 |

## 2. SCM Management
### 2.1 Roles and responsibilities
| Role | Person | Responsibility |
|---|---|---|
| Configuration Manager | [FILL] | Leads identification, status accounting and audits; owns repo settings |
| CCB (chair + members) | [FILL] | Approves or rejects change requests |
| Developers | [FILL] | Propose CIs, implement approved changes |
| QA / independent auditor | [FILL] | Performs audits |
### 2.2 Applicable policies and standards
- No direct pushes to `main`; all changes via pull request.
- Jira ticket key is the authorisation for any change.
- Branch naming: `feature/<username>/<ECOM-n>-<slug>`.
- Definition of Done: CR approved, PR reviewed by CODEOWNER, CI green, CHANGELOG updated.

## 3. SCM Activities
### 3.1 Configuration identification
CIs: source code (`src/`), tests (`tests/`), documentation (`docs/`, SCMP), CI/CD pipeline (`.github/workflows/`), dependency list (`package.json`). Naming follows the repo layout in the README. Baselines are Git annotated tags: `v0.1-baseline`, then `v<major>.<minor>` per release.
### 3.2 Configuration control
Flow: Jira CR (types: Change Request) → CCB review → Approved → branch → PR → CODEOWNERS review + CI → merge. CCB meets **[FILL: e.g. every Monday 4pm, 30 min]** and records minutes in `docs/ccb-minutes/`. Emergency changes: CCB chair may approve in writing, retrospective review at next meeting.
### 3.3 Configuration status accounting
Status reports are compiled **[FILL: weekly]** from the Jira Development panel (linked branch, PR, build). A ticket is Closed only when its PR is merged. Build pass rate = passing runs ÷ total runs. Reports are stored in `docs/status-reports/`.
### 3.4 Audits and reviews
Functional audit (does it work; `main` builds and tests pass) and physical audit (does the record match reality; branch names, CODEOWNERS, tags vs deployed version) **[FILL: each sprint / before each release]**. Results are filed in `docs/audits/` as Followed/Drifted with evidence.
### 3.5 Surveillance
| Control | Evidence | Owner | Cadence | Failure signal |
|---|---|---|---|---|
| Authorised changes | Approved ticket linked to each merge | Configuration Manager | Weekly | Merge with no approved CR |
| Builds | GitHub Actions logs | Configuration Manager | Every PR | Failed or missing CI run |
| Baseline integrity | Release tag vs deployed version | Configuration Manager | Each release | Mismatch |
| Process adherence | Spot-check of branches/PRs | CCB | Each sprint | Direct pushes, bypassed approvals |

## 4. Tools, Techniques and Environment
Git and GitHub (repository, branch protection, CODEOWNERS, Actions CI), Jira (change requests, GitHub for Jira integration), Node.js runtime **[FILL: confirm stack]**.

## 5. Supplier / Subcontractor Control
Third-party libraries are added only via an approved CR, pinned to exact versions in `package.json`, and reviewed for licence and security before merge. **[FILL: payment gateway / external services, if any]**

## 6. Records Collection and Retention
Baseline tags, CCB minutes, status reports, audit checklists and Jira tickets are retained for the life of the project and the course assessment period. The Git history and tags are the authoritative record; nothing is deleted or force-pushed.
