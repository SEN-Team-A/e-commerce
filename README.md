# E-Commerce Platform (SEN 401 SCM Project)

An Amazon-style online store, used by **SEN-Team-A** to demonstrate Software Configuration Management (SCM): identification, control, status accounting and audit.

Team Members
1. Kolawole Agbolade
2. Abdulbasit Muftau
3. Basil Daudu
4. Raymond Okolo
5. David Okenla

## Repository layout
| Path | Purpose |
|---|---|
| `src/` | Application source code |
| `tests/` | Automated tests (run by CI on every PR) |
| `docs/SCMP.md` | Software Configuration Management Plan |
| `docs/ccb-minutes/` | Change Control Board meeting minutes |
| `docs/status-reports/` | Configuration status accounting reports |
| `docs/audits/` | Functional and physical audit checklists |
| `.github/` | CODEOWNERS, PR template, CI workflow |
| `CHANGELOG.md` | Record of released/merged changes |

## Workflow (summary — full rules in `docs/SCMP.md`)
1. Every change starts as a **Change Request** in Jira (project key `ECOM`).
2. The CCB approves or rejects it. The ticket key is the authorisation.
3. Work on a branch named `feature/<username>/<ECOM-n>-<slug>`.
4. Open a PR referencing the ticket; it needs CODEOWNERS approval and a passing CI run.
5. Merge to `main`. Direct pushes to `main` are blocked.

## Run locally
```bash
npm test
```
