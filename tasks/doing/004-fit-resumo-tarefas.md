# 004 · fit · Resumo de tarefas na página principal

## User Story

Como usuário da aplicação, quero ver um resumo rápido no topo da lista de tarefas que
mostre quantas tarefas existem no total, quantas são importantes e quantas são regulares,
para ter uma visão geral sem precisar percorrer a lista.

## Objetivo

Criar o componente `TaskSummary.jsx` com contagens e barras horizontais de progresso feitas
exclusivamente com CSS, renderizá-lo na página principal acima da lista de tarefas, e
adicionar o CSS necessário em `index.css`. Sem dependências novas e sem rotas ou páginas
adicionais.

---

## Contexto técnico

| Arquivo | Situação atual |
|---|---|
| `client/src/App.jsx` | Componente interno `HomePage` renderiza `<AddTask>` e depois `<Tasks>` |
| `client/src/components/Tasks.jsx` | Recebe o array `tasks` completo via prop |
| `client/src/index.css` | CSS global; estilo do resumo deve ser adicionado aqui |

O array `tasks` já está disponível no escopo de `HomePage` em `App.jsx`. Cada item do array
possui ao menos os campos `uuid`, `titulo` e `importante` (boolean).

---

## Critérios de aceite

1. Existe o arquivo `client/src/components/TaskSummary.jsx`.
2. O componente aceita a prop `tasks` (array).
3. O componente exibe três valores: **total**, **importantes** e **regulares**.
4. Cada valor é acompanhado de uma barra horizontal proporcional construída apenas com CSS
   (sem SVG, sem `<canvas>`, sem biblioteca de gráficos).
5. `TaskSummary` é renderizado em `HomePage` (dentro de `App.jsx`), **acima** do componente
   `<Tasks>` e abaixo de `<AddTask>`.
6. Quando `tasks` está vazio, o componente não é renderizado (ou exibe zeros sem barras).
7. Somente o CSS necessário para o resumo é adicionado em `index.css`; nenhum arquivo CSS
   novo é criado.
8. `npm run build` dentro de `client/` conclui sem erros ou warnings relevantes.

---

## Definition of Done

- [x] `TaskSummary.jsx` criado em `client/src/components/`.
- [x] Exibe total, importantes e regulares calculados a partir da prop `tasks`.
- [x] Barras horizontais proporcionais feitas somente com CSS.
- [x] Componente inserido em `App.jsx` acima de `<Tasks>` (ou do bloco `tasks.length > 0`).
- [x] Componente não aparece quando não há tarefas.
- [x] Nenhuma dependência nova instalada (`package.json` inalterado).
- [x] Nenhum componente de rota ou página criados além dos indicados.
- [x] CSS adicionado apenas em `client/src/index.css`.
- [x] `npm run build` passa sem erros dentro de `client/`.

---

## Restrições

- **Não** instalar bibliotecas de gráficos (chart.js, recharts, etc.).
- **Não** usar SVG ou `<canvas>` para as barras.
- **Não** criar novas rotas ou páginas.
- Alterar somente: `App.jsx`, `index.css` e o novo `TaskSummary.jsx`.

## Dica de implementação das barras

```jsx
// Exemplo de barra proporcional com CSS inline
const pct = total > 0 ? Math.round((count / total) * 100) : 0;

<div className="summary-bar-track">
  <div className="summary-bar-fill" style={{ width: `${pct}%` }} />
</div>
```

O CSS em `index.css` define a altura, cor e border-radius de `.summary-bar-track` e
`.summary-bar-fill`.

## Comandos de verificação

```bash
# Dentro de client/
npm run build
```

---

## Informações de branch e worktree

| Item | Valor |
|---|---|
| **Branch** | `feat/004-resumo-tarefas` |
| **Worktree** | `.worktrees/004-resumo-tarefas` |
| **Agente** | `dev` |

### Instruções para o agente dev

1. Verifique a branch atual com `git branch --show-current`; ela deve ser
   `feat/004-resumo-tarefas`.
2. Mova **somente este arquivo** para `tasks/doing/` antes de começar:
   ```bash
   git mv tasks/004-fit-resumo-tarefas.md tasks/doing/
   ```
3. Implemente as alterações nos arquivos indicados e crie `TaskSummary.jsx`.
4. Valide com `npm run build` dentro de `client/`.
5. Faça commit e push a partir deste worktree.
