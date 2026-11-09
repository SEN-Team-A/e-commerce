# Software Configuration Management Plan (SCMP)
**Project:** E-Commerce Platform  **Team:** SEN-Team-A  **Version:** 0.1 (draft)  **Course:** SEN 401

> Fields marked **[FILL]** must be completed by the team before submission (names, dates, cadence).

## 1. Introduction
### 1.1 Purpose
This plan defines how configuration items of the E-Commerce Platform are identified, controlled, accounted for and audited throughout the project life cycle.
### 1.2 Scope
Covers source code, tests, documentation, CI/CD definitions and configuration files in the `SEN-Team-A/e-commerce` repository and tickets in the Jira project `ECOM`. Excludes third-party hosting infrastructure.
### 1.3 Definitions
- **CI** — Configuration Item. **CCB** — Change Control Board. **CR** — Change Request. **Baseline** — reviewed, stable snapshot tagged in Git.

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
