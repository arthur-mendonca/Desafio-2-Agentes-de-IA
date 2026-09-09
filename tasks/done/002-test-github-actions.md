# 002 · Configurar GitHub Actions para Testes Automatizados

## User Story

**Como** desenvolvedor do projeto BIA,  
**quero** que os testes automatizados sejam executados automaticamente a cada pull request direcionado à branch `main`,  
**para que** possamos garantir que nenhuma regressão seja introduzida antes de um merge.

---

## Objetivo

Criar o arquivo `.github/workflows/tests.yml` com um workflow do GitHub Actions que execute a suíte de testes do projeto em todo pull request aberto contra a branch `main`, sem realizar nenhum tipo de deploy ou utilizar secrets.

---

## Acceptance Criteria

- [x] O arquivo `.github/workflows/tests.yml` existe no repositório.
- [x] O gatilho do workflow é exclusivamente `pull_request` com filtro de branch `main`.
- [x] O runner utilizado é `ubuntu-latest`.
- [x] O step de checkout usa `actions/checkout@v4`.
- [x] O step de setup do Node.js usa `actions/setup-node@v4` com:
  - `node-version: '20'`
  - `cache: 'npm'`
- [x] O step `npm ci` é executado para instalar dependências de forma reproduzível.
- [x] O step `npm test` é executado para rodar os testes.
- [x] O workflow **não** contém nenhum step de deploy.
- [x] O workflow **não** utiliza nenhum secret (`secrets.*`).
- [ ] O workflow é funcional: passa em um pull request de teste contra `main`.

---

## Definition of Done (DoD)

- [x] Arquivo `.github/workflows/tests.yml` criado e com sintaxe YAML válida.
- [ ] Workflow executado com sucesso no GitHub Actions (status verde) em ao menos um PR real ou de teste.
- [x] Nenhum step de deploy presente no arquivo.
- [x] Nenhuma referência a `secrets.*` no arquivo.
- [ ] Código revisado e aprovado via pull request.
- [ ] Card movido para `tasks/done/` após merge.

---

## Especificação Técnica

### Estrutura esperada do arquivo `.github/workflows/tests.yml`

```yaml
name: Tests

on:
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout do código
        uses: actions/checkout@v4

      - name: Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Instalar dependências
        run: npm ci

      - name: Executar testes
        run: npm test
```

### Restrições obrigatórias
- **Sem deploy:** nenhum step deve interagir com AWS, ECS, ECR ou qualquer ambiente remoto.
- **Sem secrets:** nenhuma variável do tipo `secrets.*` deve ser referenciada.
- **Branch filter:** o gatilho deve filtrar apenas PRs para `main`; não disparar em push direto.

---

## Instruções para o Agente BIA/DevOps

> **Esta tarefa é delegada ao agente BIA/DevOps para implementação.**

### Passo 1 — Verificar branch atual
```bash
git branch --show-current
```
Certifique-se de estar em uma branch de feature dedicada (ex.: `feature/002-github-actions-tests`). Caso esteja em `main`, crie e mude para a branch antes de prosseguir.

### Passo 2 — Mover o card para "doing"
```bash
mv tasks/002-test-github-actions.md tasks/doing/002-test-github-actions.md
```

### Passo 3 — Criar a estrutura de diretórios (se necessário)
```bash
mkdir -p .github/workflows
```

### Passo 4 — Criar o arquivo do workflow
Crie o arquivo `.github/workflows/tests.yml` exatamente conforme a especificação técnica acima.

### Passo 5 — Validar sintaxe YAML
Antes de commitar, valide a sintaxe do arquivo (ex.: com `yamllint` ou pela extensão do VS Code).

### Passo 6 — Commitar e abrir PR
```bash
git add .github/workflows/tests.yml tasks/doing/002-test-github-actions.md
git commit -m "test: add GitHub Actions workflow for automated tests on PRs to main"
git push -u origin feature/002-github-actions-tests
```
Abra um pull request para `main` e confirme que o workflow é disparado e passa com sucesso.

### Passo 7 — Mover o card para "done" após merge
```bash
mv tasks/doing/002-test-github-actions.md tasks/done/002-test-github-actions.md
```

---

## Checklist Final

| Item | Status |
|------|--------|
| `.github/workflows/tests.yml` criado | ✅ |
| Gatilho `pull_request` → `main` | ✅ |
| Runner `ubuntu-latest` | ✅ |
| `actions/checkout@v4` | ✅ |
| `actions/setup-node@v4` com Node 20 + cache npm | ✅ |
| `npm ci` executado | ✅ |
| `npm test` executado | ✅ |
| Sem steps de deploy | ✅ |
| Sem uso de secrets | ✅ |
| Workflow verde no GitHub Actions | ⬜ |
| Card movido para `tasks/done/` | ⬜ |
