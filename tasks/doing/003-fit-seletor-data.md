# 003 · fit · Seletor de data nativo no formulário

## User Story

Como usuário da aplicação, quero clicar em um seletor de calendário para escolher a data
de uma tarefa, em vez de digitá-la manualmente, para evitar erros de formato e tornar o
preenchimento mais rápido.

## Objetivo

Substituir o campo `type="text"` de data em `AddTask.jsx` por `type="date"` e exibir o
valor salvo no formato brasileiro `DD/MM/AAAA` em `Task.jsx`, sem instalar dependências e
sem criar novos componentes ou rotas.

---

## Contexto técnico

| Arquivo | Situação atual |
|---|---|
| `client/src/components/AddTask.jsx` | Campo `<input type="text" placeholder="Quando?">` enviando `dia_atividade` como string livre |
| `client/src/components/Task.jsx` | Exibe `task.dia_atividade` diretamente, sem formatação |
| `client/src/index.css` | CSS global; estilização do input de data deve ser adicionada aqui |

O back-end recebe e devolve `dia_atividade` como string. O front-end é responsável por toda
a formatação de exibição.

---

## Critérios de aceite

1. O campo de data em `AddTask.jsx` é `<input type="date">` (seletor nativo do browser).
2. A data é **opcional**: submeter o formulário sem preencher a data é válido.
3. O valor enviado a `onAdd` continua no campo `dia_atividade`.
4. Quando nenhuma data é selecionada, `dia_atividade` é enviado como string vazia `""` ou
   omitido — não mais como `new Date().toLocaleDateString('pt-BR')`.
5. Em `Task.jsx`, se `dia_atividade` estiver no formato `YYYY-MM-DD`, é exibido como
   `DD/MM/AAAA` sem erro de fuso horário (usar split, não `new Date(string)`).
6. Se `dia_atividade` estiver vazio ou ausente, continua exibindo `"Sem data definida"`.
7. Somente o CSS necessário para estilizar o `input[type="date"]` é adicionado em
   `index.css`; nenhum arquivo CSS novo é criado.
8. `npm run build` dentro de `client/` conclui sem erros ou warnings relevantes.

---

## Definition of Done

- [ ] `AddTask.jsx` usa `<input type="date">` no lugar do campo textual.
- [ ] Envio sem data funciona (campo opcional mantido).
- [ ] `Task.jsx` formata `YYYY-MM-DD` → `DD/MM/AAAA` usando split (sem `new Date(string)`).
- [ ] Tarefas sem data exibem `"Sem data definida"`.
- [ ] Nenhuma dependência nova instalada (`package.json` inalterado).
- [ ] Nenhum componente, rota ou página criados além dos alterados.
- [ ] CSS adicionado apenas em `client/src/index.css`.
- [ ] `npm run build` passa sem erros dentro de `client/`.

---

## Restrições

- **Não** usar `new Date(dateString)` para formatar `YYYY-MM-DD` — causa erro de fuso
  horário. Usar `split('-')` e remontar na ordem `DD/MM/AAAA`.
- **Não** instalar bibliotecas de date-picker ou de formatação de data.
- **Não** criar componentes de calendário customizados.
- **Não** criar novas rotas ou páginas.
- Alterar somente: `AddTask.jsx`, `Task.jsx` e `index.css`.

## Comandos de verificação

```bash
# Dentro de client/
npm run build
```

---

## Informações de branch e worktree

| Item | Valor |
|---|---|
| **Branch** | `feat/003-seletor-data` |
| **Worktree** | `.worktrees/003-seletor-data` |
| **Agente** | `dev` |

### Instruções para o agente dev

1. Verifique a branch atual com `git branch --show-current`; ela deve ser
   `feat/003-seletor-data`.
2. Mova **somente este arquivo** para `tasks/doing/` antes de começar:
   ```bash
   git mv tasks/003-fit-seletor-data.md tasks/doing/
   ```
3. Implemente as alterações nos três arquivos indicados.
4. Valide com `npm run build` dentro de `client/`.
5. Faça commit e push a partir deste worktree.
