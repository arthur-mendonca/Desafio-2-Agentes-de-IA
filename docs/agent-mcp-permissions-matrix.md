# Agent MCP and Permission Matrix

This document records the effective tool exposure and permission boundaries configured for the Kiro CLI v3 agents.

| Agent | Role | Built-in tools | MCP server | Observed MCP tools | Filesystem write scope | Shell scope | MCP permission |
|---|---|---|---|---:|---|---|---|
| `po` | Product Owner and task specification | `read`, `write`, `shell` | None | 0 | `tasks/**` only; writes elsewhere denied | `git *` and `gh *` require approval; other commands denied | No MCP access |
| `dev` | Node.js and React implementation | `read`, `write`, `shell` | `shadcn` via `npx.cmd shadcn@latest mcp` | 7 | Application, tests, and `tasks/doing/**`; other writes denied | `git *`, `npm *`, `npx *`, and `docker *` require approval; other commands denied | `shadcn/*` allowed |
| `bia` | DevOps and AWS Cloud | `read`, `write`, `shell` | Official AWS MCP endpoint for `us-east-1` through `mcp-proxy-for-aws` | 8 | Workflows, infrastructure files, scripts, docs, and `tasks/doing/**`; other writes denied | Git, GitHub, Docker, Node, uvx, and curl commands require approval; other commands denied | `aws-mcp/*` requires approval |

## Isolation guarantees

- `allowedTools` is empty for all three agents, so legacy broad allowlists do not bypass v3 permissions.
- The PO cannot write application or infrastructure files.
- The developer cannot access AWS MCP tools or modify agent configuration.
- BIA cannot access the shadcn MCP server or modify application source code.
- MCP servers are declared inline per agent and `useLegacyMcpJson` is disabled.
- Destructive or external-impact shell and AWS operations remain approval-gated.

## Verification evidence

The mappings were checked in Kiro CLI v3 with `/tools` and `/mcp list`. Permission behavior was also tested with an allowed PO write under `tasks/` and denied writes or arbitrary shell commands outside the PO scope. Tool counts are observations from the installed MCP versions and may change after package updates.
