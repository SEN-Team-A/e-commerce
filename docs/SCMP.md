# Software Configuration Management Plan (SCMP)

**Project:** E-Commerce Platform **Team:** SEN-Team-A **Version:** 0.6 (draft) **Course:** SEN 401

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

| Category               | Items                                                                                       | Location                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Source code            | Frontend, backend and API code                                                              | `src/`                                                                                  |
| Tests                  | Automated test suites                                                                       | `tests/`                                                                                |
| Documentation          | This SCMP, the README, the change request template                                          | `docs/`, `README.md`                                                                    |
| Build and delivery     | CI pipeline definition, dependency list                                                     | `.github/workflows/`, `package.json`                                                    |
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

| Version | Date       | Description                                                        | Author            | Ticket |
| ------- | ---------- | ------------------------------------------------------------------ | ----------------- | ------ |
| 0.1     | 2026-11-09 | Initial skeleton and repository setup                              | SEN-Team-A        | none   |
| 0.2     | 2026-11-16 | Section 1 (Introduction) written                                   | Kolawole Agbolade | ECOM-5 |
| 0.3     | 2026-11-16 | Section 2 (SCM Management) written                                 | Raymond Okolo     | ECOM-6 |
| 0.4     | 2026-11-19 | Sections 3.1 and 3.2 written; version history for ECOM-6 corrected | David Okenla      | ECOM-7 |
| 0.5     | 2026-11-21 | Sections 3.3 to 3.5 written                                        | Abdulbasit Muftau | ECOM-8 |
| 0.6     | 2026-11-23 | Sections 4 to 5 written                                            | Basil Daudu       | ECOM-9 |

## 2. SCM Management

This section explains how Software Configuration Management (SCM) will be managed within SEN-Team-A during the development and maintenance of the e-commerce website. It identifies the responsibilities of team members, explains how changes are approved, and outlines the policies that guide configuration management activities.

### 2.1. Roles and Responsibilities

SEN-Team-A consists of five members who are responsible for managing, developing, reviewing, and maintaining the project's configuration items. These include the source code, project documents, test files, and other resources required for the e-commerce website.

The team has appointed a Configuration Manager (CM), a Vice Configuration Manager, and a Change Control Board (CCB). All five members also participate in development activities, while one member is assigned to quality assurance and auditing.

The responsibilities are assigned as follows:

| Role                                         | Assigned Member(s)                                                             | Responsibilities                                                                                                                                                                                                                                                                                                |
| -------------------------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration Manager (CM)                   | Kolawole Agbolade                                                              | Manages the GitHub repository and ensures that the team follows the SCMP. Checks that each change has an approved Jira ticket, a reviewed pull request, and passing CI checks before performing the final merge into `main`. Oversees configuration baselines and prepares weekly configuration status reports. |
| Vice Configuration Manager                   | Raymond Okolo                                                                  | Assists the CM in monitoring configuration activities, checking change records, and maintaining repository organisation. Takes over the CM's responsibilities when the CM is unavailable.                                                                                                                       |
| Change Control Board (CCB)                   | Kolawole Agbolade, Raymond Okolo, Abdulbasit Muftau, Basil Daudu, David Okenla | Reviews submitted change requests during the weekly CCB meeting. Evaluates the purpose and possible impact of each proposed change before deciding whether to approve, reject, or defer it. Ensures that only approved changes proceed to implementation.                                                       |
| Developers                                   | Kolawole Agbolade, Raymond Okolo, Abdulbasit Muftau, Basil Daudu, David Okenla | Implement approved changes on separate feature branches. Follow the agreed branch naming convention, keep their changes working, update relevant documentation, and resolve merge conflicts before requesting a review.                                                                                         |
| Quality Assurance (QA) / Independent Auditor | David Okenla                                                                   | Reviews completed changes to check that they meet the approved requirements and project standards. Verifies relevant test results, checks compliance with the SCMP, and reports issues that must be corrected before a change is merged.                                                                        |

#### Change Control Board (CCB) Operations

The Change Control Board is responsible for deciding which proposed changes can be implemented in the project.

The CCB consists of all five members of SEN-Team-A and meets **every Tuesday at 4:00 PM**.

All proposed changes must first be submitted as Change Request tickets in the team's Jira project, ECOM.

The change control process follows these steps:

1. A team member creates a Change Request ticket in Jira and describes the proposed change.
2. The ticket moves from **Submitted** to **CCB Review** for evaluation.
3. The CCB reviews the change and decides whether to approve, reject, or defer it.
4. Approved requests move to **Approved**, allowing the assigned developer to begin implementation.
5. The developer moves the ticket to **In Progress** while working on the change and to **In Review** when the pull request is ready for review.
6. After the required reviews, checks, and final merge are completed, the ticket moves to **Done**.
7. Rejected requests are moved to **Rejected** and are not implemented.

The CCB's decisions are documented in meeting notes stored in `docs/ccb-minutes/` within the GitHub repository. These records provide evidence of which changes were considered and the decisions made.

The approved Jira ticket key serves as the official authorisation for a change. No team member is permitted to begin implementing a change before the CCB approves its ticket.

### 2.2. Applicable Policies and Standards

To maintain consistency, accountability, and proper control of project changes, SEN-Team-A follows the policies below.

**1. Change Request Policy**

Every proposed change to a controlled project file must have a Jira ticket of type **Change Request** in the ECOM project.

A change can only be implemented after the Change Control Board has approved its ticket. The Jira ticket key is used to identify and track the authorised change throughout development.

**2. Branch Protection Policy**

The `main` branch is protected, and team members are not allowed to push changes directly to it.

All changes must be submitted through GitHub pull requests. Before a pull request can be merged, it must receive at least one approving review and pass the required CI check named `build-and-test`.

The Configuration Manager is responsible for performing the final merge after these conditions have been satisfied.

**3. Branch Naming Policy**

Each approved change must be developed on a separate feature branch created from the latest version of `main`.

Branches must follow this naming format:

`feature/<github-username>/<ECOM-n>-<short-slug>`

For example:

`feature/rio-cl/ECOM-6-scmp-management`

The branch name identifies the developer, the related Jira ticket, and the purpose of the change.

**4. Pull Request and Review Policy**

After completing an approved change, the developer must push the feature branch to GitHub and open a pull request using the team's pull request template.

The pull request must identify the related Jira ticket and describe the changes made.

At least one approving review is required before merging. Developers must address issues identified during review and resolve merge conflicts before the final merge.

**5. Continuous Integration Policy**

The project uses GitHub Actions to run the `build-and-test` CI check.

The check must pass before a pull request is merged into `main`. If it fails, the developer must correct the problem and obtain a passing result before the change can proceed.

**6. Definition of Done Policy**

A change is considered complete only when all the following conditions have been satisfied:

- The Change Request has been approved by the CCB.
- The pull request has been reviewed and approved.
- The required `build-and-test` CI check has passed.
- `CHANGELOG.md` has been updated to record the change.

The Configuration Manager confirms that these requirements have been met before performing the final merge.

**7. Configuration Documentation Policy**

The SCMP is maintained in Markdown format in `docs/SCMP.md` within the GitHub repository.

Changes to the SCMP must follow the same Jira approval, feature branch, pull request, and review process used for other controlled project files.

When the SCMP is updated, its version number and document history must also be updated so that the team can identify the changes made between versions.

**8. Configuration Records Policy**

Jira is used to track Change Requests and their approval status, while GitHub maintains the history of commits, branches, pull requests, reviews, and merged changes.

The team also maintains `CHANGELOG.md` to record completed changes and stores CCB meeting notes in `docs/ccb-minutes/`.

These records allow team members to trace changes from their original requests to their final implementation.

## 3. SCM Activities

### 3.1 Configuration identification

This section explains which items are placed under configuration control, how they are named and numbered, and how approved versions are fixed as baselines. The list of items is in Section 1.3. The roles are in Section 2.1.

#### 3.1.1 Selecting configuration items

An item becomes a configuration item (CI) when it meets all three criteria:

1. It is stored in the repository `SEN-Team-A/e-commerce`.
2. A change to it would alter how the platform behaves, how it is built and tested, or the evidence of how the team works.
3. The team must be able to say who changed it and why, and to restore an earlier version of it.

Files that can be rebuilt from other CIs, such as build output, are not CIs.

An item is added to or removed from the list in Section 1.3 only through an approved Change Request (CR). The CR names the item in its Affected CI field. The pull request (PR) that carries out the change updates the table in Section 1.3. Because that edit changes the SCMP, the PR also raises the SCMP version (see 3.1.3). When an item is removed, its file is deleted in the PR and its history stays in Git.

#### 3.1.2 Naming conventions

| Item              | Rule                                                                                                                                      | Example                                                        |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Files and folders | New files and folders use lowercase letters and hyphens. Standard names keep their usual form.                                            | `docs/ccb-minutes/`, `README.md`, `CHANGELOG.md`, `CODEOWNERS` |
| CCB minutes       | `docs/ccb-minutes/YYYY-MM-DD-ccb-<n>.md`. The date is the meeting date and `<n>` is the number of the meeting.                            | `docs/ccb-minutes/2026-11-17-ccb-1.md`                         |
| Status reports    | `docs/status-reports/YYYY-MM-DD-status-report.md`                                                                                         | `docs/status-reports/2026-11-17-status-report.md`              |
| Audit records     | `docs/audits/YYYY-MM-DD-audit-<functional or physical>.md`                                                                                | `docs/audits/2026-11-17-audit-functional.md`                   |
| Jira keys         | `ECOM-<n>`. Jira assigns `<n>` in order when a ticket is created.                                                                         | `ECOM-7`                                                       |
| Branches          | `feature/<github-username>/<ECOM-n>-<short-slug>`. The slug uses lowercase letters and hyphens.                                           | `feature/raymond-okolo/ECOM-6-scmp-management`                 |
| Commit messages   | The Jira key, a colon, then a short summary.                                                                                              | `ECOM-6: write SCMP section 2`                                 |
| PR titles         | The same format as commit messages.                                                                                                       | `ECOM-6: write SCMP section 2`                                 |
| Tags              | `v0.1-baseline` (the first baseline only), `scmp-v<major>.<minor>` (SCMP baselines) and `v<major>.<minor>` (product releases). See 3.1.4. | `v0.1-baseline`, `scmp-v1.0`, `v0.2`                           |

The examples for records show the file name format. The Jira key in the branch name, the commit messages and the PR title is what links all three to the approved ticket.

#### 3.1.3 Version numbering

| Number           | Where it appears                                                                      | Rule                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SCMP version     | The `**Version:**` field in the header of `docs/SCMP.md` and the table in Section 1.7 | Every merged PR that changes `docs/SCMP.md` raises the minor number by one (for example 0.3 to 0.4) and adds one row to Section 1.7 with the version, the date the PR is merged, a description, the author and the ticket. The header and the last row must show the same version. The version becomes 1.0 at final submission, when the `scmp-v1.0` baseline is approved. |
| Software version | Git tag `v<major>.<minor>`                                                            | The minor number increases for each release that adds or fixes features. The major number increases for a change that breaks existing behaviour, and for the first full production-ready release (`v1.0`). The minor number goes back to 0 when the major number increases. Every software tag is `0.x` until the first production-ready release.                          |

Other documents have no version number of their own. Their history is the Git history, and every change to them is recorded as a line in `CHANGELOG.md`.

#### 3.1.4 Baselines

A baseline is a reviewed and approved version of one or more CIs, fixed as an annotated Git tag (see Section 1.4). After a baseline is created it does not change. Later work is made as new commits after the tag, and the difference from a baseline can be shown with `git diff <tag> main`.

| Baseline         | Contents                                                                    | When it is created                                                                       | Tag                | Approved by                                        | Created by                                                                 |
| ---------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------- | -------------------------------------------------------------------------- |
| Initial baseline | The repository skeleton: SCMP draft, CI workflow, `CODEOWNERS`, PR template | Created on 2026-11-10 during repository setup, before this plan's change process started | `v0.1-baseline`    | Not applicable (created during repository setup)   | Configuration Manager (Kolawole Agbolade)                                  |
| SCMP baseline    | All six SCMP sections complete, with no **[FILL]** left                     | After the CCB approves it and before final submission                                    | `scmp-v1.0`        | CCB, through a Change Request at a Tuesday meeting | Configuration Manager; Vice Configuration Manager if the CM is unavailable |
| Product release  | The platform code, tests and documents at a release                         | At each release of the e-commerce site                                                   | `v<major>.<minor>` | CCB, through a Change Request at a Tuesday meeting | Configuration Manager; Vice Configuration Manager if the CM is unavailable |

To create a baseline:

1. The CCB approves the baseline Change Request at its Tuesday meeting (ticket status **Approved**).
2. The CM checks out the latest `main` and confirms that `build-and-test` has passed on the commit to be tagged.
3. The CM creates an annotated tag whose message says what the baseline contains, for example `git tag -a scmp-v1.0 -m "SCMP complete, approved by CCB"`.
4. The CM pushes only that tag with `git push origin scmp-v1.0`.
5. The CM checks that the tag shows on GitHub and writes the tag name in a comment on the Change Request.

The evidence is the approved ticket, the tag on GitHub and the CCB minutes.

A baselined item changes only through an approved Change Request (Section 2.2, Change Request Policy). A tag is never moved, deleted or re-created. A wrong tag is corrected with a new tag approved through a new Change Request, which keeps the history intact (Section 6).

### 3.2 Configuration control

This section explains how a change to a CI is requested, approved, made and recorded. The roles are in Section 2.1 and the policies are in Section 2.2. This section turns them into steps and names the evidence each step leaves behind.

#### 3.2.1 Change requests

Every change starts as a Jira ticket of type **Change Request** in the ECOM space. Any of the five team members may raise one. A ticket must have these fields:

| Field         | What it holds                                                                      |
| ------------- | ---------------------------------------------------------------------------------- |
| Affected CI   | The CI to be changed, with its path, taken from Section 1.3                        |
| Justification | Why the change is needed                                                           |
| Impact        | What else the change touches, and the effort and risk in one or two lines          |
| Disposition   | The CCB decision: Approved, Rejected or Deferred. It is set after the CCB decides. |

Affected CI, Justification and Impact must be filled in before the ticket moves to **CCB Review**. The Configuration Manager (CM) checks this.

A ticket moves through these statuses:

| Status      | Meaning                                                                             | Moved by                                      |
| ----------- | ----------------------------------------------------------------------------------- | --------------------------------------------- |
| Submitted   | The ticket is raised and waits for the CM's check                                   | The ticket's author creates it in this status |
| CCB Review  | The fields are complete and the CCB has not yet decided, or the CCB has deferred it | CM                                            |
| Approved    | The CCB approved it and an assignee is named                                        | CM                                            |
| In Progress | The assignee has started work                                                       | Assignee                                      |
| In Review   | The PR is open and waiting for review                                               | Assignee                                      |
| Done        | The PR is merged and the Definition of Done is met                                  | CM                                            |
| Rejected    | The CCB rejected it. It is not implemented.                                         | CM                                            |

#### 3.2.2 Change process

| Step         | Who                                 | What happens                                                                                                                                                                                              | Evidence                                |
| ------------ | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 1. Raise     | Any team member                     | Creates a Change Request and fills in Affected CI, Justification and Impact. Status: **Submitted**.                                                                                                       | Jira ticket                             |
| 2. Check     | CM                                  | Checks that the three fields are filled in. If they are, moves the ticket to **CCB Review**. If not, writes a comment naming the missing field and leaves the ticket in **Submitted**.                    | Ticket status and comment               |
| 3. Decide    | CCB                                 | Decides on every ticket that is in **CCB Review** when the Tuesday 4:00 PM meeting starts. A quorum is 3 of 5 members including the CM or the Vice CM, and decisions are by majority vote (see 3.2.3).    | CCB minutes in `docs/ccb-minutes/`      |
| 4. Record    | CM                                  | After the meeting, sets Disposition. For an approved ticket, names the assignee and moves it to **Approved**. For a rejected ticket, moves it to **Rejected**. A deferred ticket stays in **CCB Review**. | Ticket status, Disposition and assignee |
| 5. Branch    | Assignee                            | Moves the ticket to **In Progress** and creates the branch from the latest `main` (see 3.2.4).                                                                                                            | Branch linked to the ticket             |
| 6. Implement | Assignee                            | Makes the change in commits that start with the Jira key. Updates the affected documents and adds one line to `CHANGELOG.md`.                                                                             | Commits, `CHANGELOG.md`                 |
| 7. Open PR   | Assignee                            | Pushes the branch and opens a PR with the PR template. Moves the ticket to **In Review**.                                                                                                                 | PR                                      |
| 8. Review    | A team member other than the author | Gives at least one approving review.                                                                                                                                                                      | PR review                               |
| 9. CI        | GitHub Actions                      | Runs `build-and-test` (Node 20). It must pass.                                                                                                                                                            | CI run on the PR                        |
| 10. Merge    | CM                                  | Confirms the four Definition of Done conditions (Section 2.2, policy 6) and merges the PR into `main`.                                                                                                    | Merged PR                               |
| 11. Close    | CM                                  | Moves the ticket to **Done**.                                                                                                                                                                             | Ticket status                           |

#### 3.2.3 CCB evaluation

For each ticket the CCB considers:

- **Affected CIs:** which CIs from Section 1.3 change, and whether any of them is part of a baseline.
- **Impact:** what else the change affects (other CIs, tests, documents, the build).
- **Effort:** how much work the change needs, as written in the Impact field.
- **Risk:** what could break and how the change can be undone, as written in the Impact field.

The CCB can make three decisions:

| Decision | Result                                                                     |
| -------- | -------------------------------------------------------------------------- |
| Approve  | The ticket moves to **Approved** and an assignee is named. Work may start. |
| Reject   | The ticket moves to **Rejected**. No work is done (see 3.2.6).             |
| Defer    | The ticket stays in **CCB Review** until a later meeting (see 3.2.6).      |

The minutes record the meeting date, the members present, and for each ticket its key, the decision and the reason.

#### 3.2.4 Implementation and review

**Branch.** The assignee creates the branch from the latest `main`:

```
git checkout main
git pull
git checkout -b feature/<github-username>/<ECOM-n>-<short-slug>
```

**Pull request.** The PR title starts with the Jira key. The PR uses the pull request template: Ticket, What changed, Configuration items affected and Checklist.

**Review.** The PR needs at least one approving review from a team member other than its author, because GitHub does not let an author approve their own PR. Any other member may review. The QA / independent auditor (David Okenla) is one possible reviewer but is not required. When the CM is the author, another member approves before the CM merges.

**CI.** `build-and-test` must pass. If it fails, the assignee pushes a fix to the same branch until it passes.

**Merge.** The CM performs the final merge into `main` after confirming the approved ticket, the approved review, the passing CI check and the `CHANGELOG.md` line. Direct pushes to `main` are blocked.

**Merge conflicts.** The ruleset does not require a branch to be up to date with `main`. If a PR conflicts with `main`, the author resolves the conflict before review continues. The author merges the latest `main` into the feature branch with `git merge main`, resolves the conflict, and pushes. The author uses merge and not rebase so that no history is rewritten (Section 6). When two PRs both edit `CHANGELOG.md`, the author keeps both lines. If another conflict cannot be resolved by keeping both changes, the author reports it to the CM in a comment on the PR before review continues. After the conflict is resolved, `build-and-test` must pass again.

#### 3.2.5 Emergency changes

An emergency is one of these:

- `main` is broken (build or tests fail for everyone).
- A security flaw.
- A failure of payments or checkout in the deployed site.

For an emergency, any team member creates a Change Request straight away, with "EMERGENCY" at the start of the title. The CM approves it with a comment on the ticket and moves it to **Approved**. If the CM is unavailable, the Vice Configuration Manager does this instead. The comment names the assignee. Approval in a group chat is not valid.

The emergency approval replaces only the wait for the Tuesday CCB meeting. The change still goes through a branch, a PR, at least one approving review and a passing `build-and-test`, and `CHANGELOG.md` is still updated.

The CCB reviews the emergency change at the next Tuesday meeting and records its decision in the minutes. If the CCB rejects it, the change is undone with a revert PR under a follow-up ticket, and never with a force-push. The evidence is the ticket, the approval comment, the PR and the minutes.

#### 3.2.6 Rejected and deferred requests

**Rejected.** The ticket moves to **Rejected** and Disposition is set to Rejected. The reason is written in the minutes and in a Jira comment. No branch is created. A rejected ticket is not reopened. If the team still wants the change, a member raises a new ticket linked to the old one in Jira, with a new justification.

**Deferred.** Disposition is set to Deferred and the ticket stays in **CCB Review**. The reason, and what the CCB needs before it can decide, are written in the minutes and in a Jira comment. No work may start. The ticket is on the agenda of the next Tuesday meeting. A ticket can be deferred at most twice. At the third meeting the CCB must approve or reject it.

Both kinds of ticket are kept for the life of the project (Section 6).

#### 3.2.7 Deviations

A deviation is any case where the repository or Jira records differ from this plan. Examples are a merge with no approved ticket, a direct push to `main`, a wrong branch name, a missing `CHANGELOG.md` line, or an SCMP change without a version update. The ECOM-6 pull request was merged without the version and document history update required by Section 2.2. It was corrected under ECOM-7.

1. **Report.** Any team member who sees a deviation reports it to the CM, in a Jira comment on the ticket involved or at the CCB meeting.
2. **Record.** The QA / independent auditor (David Okenla) records it in the audit checklist in `docs/audits/` as "Drifted", with evidence such as the ticket, PR or commit (see Section 3.4).
3. **Correct.** The CM assigns the correction to a team member. A correction that changes a controlled file starts only after the CCB approves its Change Request, and is completed within seven days of that approval. A correction that changes no controlled file is recorded in the CCB minutes.
4. **Confirm.** The auditor records the correction in the audit checklist, with a reference to the correcting PR or the minutes.

### 3.3 Configuration status accounting

Configuration status accounting records the current state of configuration items (CIs) and change requests, then reports that state to the team. The CM prepares the weekly report described in Section 2.1. The Vice Configuration Manager prepares it when the CM is unavailable.

#### 3.3.1 What is recorded

The report records:

- The count and Jira keys of tickets in each Jira status.
- Change requests the CCB approved, rejected or deferred during the reporting period.
- Pull requests opened and merged during the period.
- The build pass rate for `build-and-test`.
- The latest baseline tag and the number of commits on `main` since that tag.
- Open deviations and the corrections assigned or completed for them, following Section 3.2.7.
- The `CHANGELOG.md` lines added during the period.

The Jira Development panel is connected to the repository SEN-Team-A/e-commerce and shows each ticket's branch, commits, PRs and build status. The CM uses it together with the Jira board and GitHub Actions.

#### 3.3.2 Status reports

The CM prepares one report each week, covering the previous seven days. The report is finished before the Tuesday 4:00 PM CCB meeting and presented at that meeting. When the CM is unavailable, the Vice Configuration Manager prepares and presents it.

Each report is stored as `docs/status-reports/YYYY-MM-DD-status-report.md` (see Section 3.1). It is added to the repository through the normal change process.

The build pass rate is calculated as:

`passing build-and-test runs ÷ total build-and-test runs in the period × 100`

A ticket is **Done** only when its PR has been merged into `main`.

#### 3.3.3 Traceability

For every change, the Jira ticket key connects the records: the key appears in the branch name, PR title, commit message prefix and `CHANGELOG.md` line. The CM uses the Jira ticket and the PR link in its comment to follow the change from approval through implementation and merge.

#### 3.3.4 Metrics

The weekly report includes the build pass rate for `build-and-test`, calculated using all runs in the reporting period. It also reports the number of commits on `main` since the latest baseline tag. These figures show recent build results and how far `main` has advanced beyond the current baseline.

### 3.4 Audits and reviews

Audits check whether the project follows this plan and whether the recorded configuration matches the approved changes and repository state. The QA / independent auditor, David Okenla, conducts the audits. If David authored the change being audited, the Vice Configuration Manager audits that item instead.

#### 3.4.1 Functional configuration audit

The functional configuration audit checks that the software and documents match the approved change requests. It verifies that `main` builds and all tests pass, and that the approved scope of each ticket marked **Done** matches the changes merged into `main`.

#### 3.4.2 Physical configuration audit

The physical configuration audit checks that the project records match the repository and its settings. It checks that:

- Branch names follow Section 3.1.
- Each PR title and commit has an approved Jira ticket key.
- Every merged PR has a line in `CHANGELOG.md`.
- The SCMP version header and document history match the merged SCMP pull requests.
- `CODEOWNERS` and the `main` branch ruleset are unchanged.
- Baseline tags exist and point to the commits recorded for them.
- CCB minutes exist for every CCB decision.

#### 3.4.3 Who audits and when

David Okenla conducts a physical audit every two weeks, on every second Tuesday. A functional and physical audit is also completed before each baseline, including `scmp-v1.0`, and before each product release. When David authored an item being audited, the Vice Configuration Manager audits that item.

#### 3.4.4 Audit records and results

The auditor records each audit in one checklist file under `docs/audits/`, using the naming rules in Section 3.1. Each checklist has these columns:

| Control | What the SCMP requires | Evidence found | Result (Followed or Drifted) | Action ticket |
| ------- | ---------------------- | -------------- | ---------------------------- | ------------- |

Every result includes evidence, such as a Jira ticket key, PR number, commit, tag or screenshot. A **Drifted** result follows the deviation process in Section 3.2.7. The CCB reviews each audit result at its next Tuesday meeting, and the review is recorded in the CCB minutes.

#### 3.4.5 Reviews

Pull request reviews follow Section 3.2.4, including the requirement for at least one approving review. Baseline approval follows Section 3.1. This section records those review requirements by reference and does not replace them.

### 3.5 Surveillance

Surveillance is the routine monitoring of individual controls between formal audits. The Configuration Manager (CM), Vice Configuration Manager and QA / independent auditor monitor the controls assigned to their roles.

| Control                                                                                                                   | Evidence                                      | Owner                      | Cadence                                       | Failure signal                                                                |
| ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | -------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------- |
| Authorised changes: every merged PR links to an approved ticket                                                           | Jira ticket status history and GitHub PR list | Configuration Manager      | Weekly                                        | A PR is merged with no approved ticket                                        |
| Builds: `build-and-test` runs on every PR                                                                                 | GitHub Actions runs                           | Configuration Manager      | Every PR; build pass rate reviewed weekly     | A run is failed or missing, or a PR is merged with a red check                |
| Branch protection: the `main` ruleset is unchanged                                                                        | GitHub ruleset settings page                  | Configuration Manager      | Weekly                                        | A rule is switched off or a bypass is added                                   |
| Baseline integrity: each tag exists, is annotated and points to the approved commit                                       | GitHub Tags page and `git show`               | Configuration Manager      | At each baseline                              | A tag is missing, moved or lightweight                                        |
| Records: a minutes file exists for every CCB meeting and decision                                                         | `docs/ccb-minutes/`                           | Vice Configuration Manager | Weekly                                        | A decision has no minutes file                                                |
| Process adherence: branch names, PR titles, PR template, `CHANGELOG.md` lines and version/history updates follow the plan | GitHub PR list                                | QA / independent auditor   | Every second Tuesday, with the physical audit | Any required item is missing, such as the version update missed in ECOM-6     |
| Jira and GitHub agree: a ticket is **Done** only if its PR is merged                                                      | Jira board and GitHub PR list                 | Configuration Manager      | Weekly                                        | A **Done** ticket has an unmerged PR, or a merged PR's ticket is not **Done** |

When a failure signal appears, any team member reports it to the CM, and the QA / independent auditor records it as **Drifted** with evidence in the audit checklist. The CM assigns the correction, and the CCB records the matter in its minutes, following Section 3.2.7.

Surveillance is routine monitoring of individual controls. An audit is a formal check of the project against the whole plan, with results recorded in an audit checklist.

## 4. Tools, Techniques and Environment

This section lists the tools, practices and environment the team uses to carry out this plan, and says who controls them. It describes only what the team actually uses.

### 4.1 Tools

| Tool                                                 | Purpose                                                                                                                                                                                | Where it is used                                                      | Administered by                                                 |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------- |
| Git                                                  | Version control. Every change, branch and tag is recorded in the history.                                                                                                              | On each member's laptop and in the repository `SEN-Team-A/e-commerce` | Configuration Manager (repository settings); all members use it |
| GitHub                                               | Hosts the repository, the branch ruleset on `main`, CODEOWNERS, the pull request template, pull requests and reviews.                                                                  | https://github.com/SEN-Team-A/e-commerce                              | Configuration Manager                                           |
| GitHub Actions                                       | Runs the `build-and-test` check on every pull request and on every push to `main`.                                                                                                     | `.github/workflows/ci.yml`                                            | Configuration Manager                                           |
| Jira                                                 | Holds the Change Requests, the CCB workflow and the board.                                                                                                                             | Jira space `ECOM`                                                     | Configuration Manager                                           |
| GitHub for Atlassian (GitHub for Jira)               | Links branches, commits, pull requests and build results to Jira tickets by ticket key. It is shown on the Development tab of the space and in the Development section of each ticket. | Jira space `ECOM`, repository `SEN-Team-A/e-commerce`                 | Configuration Manager                                           |
| Node.js and its built-in test runner (`node --test`) | Runs the project and its automated tests.                                                                                                                                              | Members' laptops and GitHub Actions                                   | All members                                                     |
| Code editor                                          | Editing source files and the Markdown documents. Each member chooses their own.                                                                                                        | Members' laptops                                                      | Each member                                                     |

### 4.2 Techniques and Practices

The practices below are defined in the sections named in the last column. This section only lists them.

| Practice                           | What it means in this project                                                                                                              | Defined in |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| Feature branch per ticket          | Every approved change is made on its own branch, named with the Jira ticket key.                                                           | 3.1, 3.2.4 |
| Pull request review                | Every change reaches `main` through a pull request with at least one approving review. The Configuration Manager performs the final merge. | 2.2, 3.2.4 |
| Continuous integration             | The `build-and-test` check must pass before a pull request is merged.                                                                      | 2.2        |
| Annotated tags for baselines       | Baselines are recorded as annotated Git tags.                                                                                              | 3.1        |
| Merge, not rebase                  | Merge conflicts are resolved by merging `main` into the feature branch, so no history is rewritten.                                        | 3.2.4      |
| CCB review of every change request | The CCB decides each Change Request at its Tuesday 4:00 PM meeting.                                                                        | 2.1, 3.2   |
| Status reports                     | The weekly status report is compiled from Jira, GitHub and GitHub Actions.                                                                 | 3.3        |
| Audits and surveillance            | Checklist audits and routine monitoring of the controls.                                                                                   | 3.4, 3.5   |

### 4.3 Development Environment

Each team member works on their own laptop. The environment needs:

- Git.
- Node.js 20 or newer. GitHub Actions runs the project on Node.js 20, so Node.js 20 is the minimum version.
- npm, which is installed with Node.js.
- A code editor of the member's choice.

A member gets the project by cloning `SEN-Team-A/e-commerce`. `README.md` is the starting point for the project. Running `npm test` runs `node --test`, which finds the test files named `*.test.js` (the tests are in `tests/`).

The same command runs in GitHub Actions, so a change that passes on a member's laptop is checked again on every pull request.

At the time of writing, the platform has no deployed (production) environment. When one is introduced, it is added to this section through a Change Request.

### 4.4 Control of the Tools

- The CI workflow, CODEOWNERS and the pull request template are configuration items (see Section 1.3). Changes to them follow the normal Change Request process in Section 3.2.
- Repository settings that are not stored in files, such as the ruleset on `main`, are changed only by the Configuration Manager and only after the CCB has approved a Change Request for the change. The Configuration Manager records the change in the CCB minutes.
- Changes to the Jira workflow or fields are approved by the CCB and recorded in the CCB minutes.
- Only the Configuration Manager administers the settings of the GitHub repository and the Jira space. The weekly check that the `main` ruleset is unchanged is in Section 3.5.

## 5. Supplier / Subcontractor Control

A supplier item is anything the platform or the team's process depends on that the team does not write or run itself. This section records those items, how they are approved, and how they are kept under control. Hosting and third-party services remain outside the team's configuration control (see Section 1.2), but the versions and settings the platform depends on are recorded here.

### 5.1 What Counts as a Supplier Item

- Third-party packages from the npm registry.
- Third-party actions used in the CI workflow.
- Online tools the team depends on: GitHub and Jira (Atlassian).
- External services of the platform, such as a payment provider or a hosting provider, if one is introduced.

### 5.2 Supplier Register

| Supplier item                              | Used for                                    | Version or control                                                                        | Approved by                                 | Where recorded                             |
| ------------------------------------------ | ------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------ |
| Node.js                                    | Runtime and test runner                     | Version 20 in GitHub Actions; 20 or newer on members' laptops                             | Repository setup (baseline `v0.1-baseline`) | `.github/workflows/ci.yml`, Section 4.3    |
| `actions/checkout`                         | Gets the repository code in the CI workflow | Pinned to the major version tag `v4`                                                      | Repository setup (baseline `v0.1-baseline`) | `.github/workflows/ci.yml`                 |
| `actions/setup-node`                       | Installs Node.js in the CI workflow         | Pinned to the major version tag `v4`, with Node.js 20                                     | Repository setup (baseline `v0.1-baseline`) | `.github/workflows/ci.yml`                 |
| npm packages used by the platform          | Runtime dependencies                        | None at the time of writing. Each one added later has an exact version in `package.json`. | CCB, through a Change Request               | `package.json`, `CHANGELOG.md`, this table |
| GitHub                                     | Repository hosting, pull requests, CI       | Online service, no version to pin                                                         | Configuration Manager                       | Section 4.1                                |
| Jira (Atlassian) with GitHub for Atlassian | Change Requests, board, link to GitHub      | Online service, no version to pin                                                         | Configuration Manager                       | Section 4.1                                |

No payment provider or hosting provider is used at the time of writing. If one is introduced, it is added to this table through a Change Request.

### 5.3 Adding or Updating a Dependency

A dependency is added, updated or removed only through an approved Change Request.

1. The author raises a Change Request. Affected CI is `package.json` (and `package-lock.json` once it exists). Justification says why the package is needed and why no existing item does the job. Impact states the licence, the effort and the security findings (see Section 5.4).
2. The CCB decides the Change Request at its next Tuesday meeting (see Section 3.2.3).
3. After the ticket is **Approved**, the author creates the branch named in Section 3.1 and installs the package with an exact version, for example `npm install --save-exact <package>@<version>`. Version ranges such as `^` and `~` are not allowed.
4. The pull request shows the change to `package.json`. Its description lists the package, the version, the licence and the result of `npm audit`.
5. The pull request is reviewed and `build-and-test` must pass (see Section 3.2.4).
6. The `CHANGELOG.md` line names the package and its version.
7. The author updates the register in Section 5.2 in the same pull request, together with the SCMP version and document history required by Section 2.2.

Removing a dependency follows the same steps.

### 5.4 Licence and Security Review

- **Licence.** Packages under the MIT, BSD (2-clause or 3-clause), ISC or Apache-2.0 licences can be approved in the normal way. A package under any other licence, or with no licence, needs explicit approval from the CCB, recorded in the minutes.
- **Maintenance.** The author checks that the package is maintained and notes the date of its latest release in the Impact field.
- **Security.** The author runs `npm audit` before opening the pull request and pastes the result into the pull request description. A high or critical finding blocks the merge until the CCB has decided what to do and recorded the decision in the minutes.
- **Source.** Packages are installed from the public npm registry only.
- A known security flaw in a dependency that is already in use is an emergency under Section 3.2.5.

### 5.5 External Services and Secrets

- No keys, passwords or tokens are stored in the repository, in a commit, in a Jira ticket or in a pull request. Keys used on a member's laptop are kept in local environment files that are listed in `.gitignore`. Keys needed by GitHub Actions are stored as GitHub Actions secrets.
- If a secret is committed by mistake, it is treated as an emergency under Section 3.2.5. The key is revoked and replaced first, because Git history is never rewritten (see Section 3.2.4). The file is then corrected through a Change Request.
- The platform does not use a live payment provider. If a payment provider is chosen, only its test (sandbox) mode is used for this course, and adding it requires a Change Request and a new row in Section 5.2.

### 5.6 Supplier Risks

- If GitHub, Jira or the npm registry is unavailable or changes its terms, every team member's clone holds the complete Git history and the baseline tags, so the code and its history can be recovered from any clone. CCB decisions are also recorded in minutes in the repository (`docs/ccb-minutes/`), so they do not depend on Jira alone.
- A package that is withdrawn or found unsafe is replaced through a Change Request under Section 5.3.
- How long records are kept is set out in Section 6.

## 6. Records Collection and Retention

Baseline tags, CCB minutes, status reports, audit checklists and Jira tickets are retained for the life of the project and the course assessment period. The Git history and tags are the authoritative record; nothing is deleted or force-pushed.
