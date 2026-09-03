# 001 · [FIT] Aba "Versão" na navegação

## User Story

**Como** usuário da aplicação BIA,  
**quero** acessar uma aba chamada "Versão" no menu de navegação,  
**para** visualizar as informações retornadas pelo endpoint `/api/versao` sem precisar acessar a URL diretamente.

---

## Objetivo da Tela

Exibir, de forma estruturada e com o mesmo estilo visual das telas existentes (ex.: Tarefas), os dados retornados pelo endpoint `GET /api/versao`.  
O endpoint retorna uma string de texto simples no formato `Bia <versão>` (ex.: `Bia 4.3.0`).

---

## Acceptance Criteria

- [x] A navegação deve conter um novo item chamado **"Versão"** com rota `/versao`.
- [x] O item "Versão" deve seguir o mesmo padrão visual dos demais itens de navegação.
- [x] A tela `/versao` deve fazer uma chamada `GET` ao endpoint `/api/versao` ao ser montada.
- [x] A resposta do endpoint deve ser exibida na tela de forma legível (ex.: dentro de um card ou container com título e valor).
- [x] Enquanto a requisição estiver em andamento, um indicador de carregamento deve ser exibido.
- [x] Em caso de erro na chamada, uma mensagem de erro amigável deve ser exibida ao usuário.
- [x] O estilo visual da nova tela deve ser coerente com o restante da aplicação (cores, tipografia, espaçamento, dark/light mode).
- [x] A nova rota deve ser registrada no `App.jsx` seguindo o mesmo padrão das rotas existentes (`/` e `/about`).

---

## Definition of Done (DoD)

- [x] Componente `Versao.jsx` criado em `client/src/components/`.
- [x] Rota `/versao` registrada no `App.jsx`.
- [x] Link para `/versao` adicionado ao `Header.jsx` (ou componente de navegação equivalente).
- [x] A chamada à API usa a variável `VITE_API_URL` como base URL, seguindo o padrão já usado no projeto.
- [x] Nenhum estilo inline inconsistente; classes CSS reutilizadas ou adicionadas em `index.css` de forma coerente.
- [x] A aplicação compila sem erros (`npm run build` ou `vite build`).

---

## Contexto Técnico

| Item | Detalhe |
|---|---|
| Endpoint | `GET /api/versao` |
| Resposta | Texto simples, ex.: `Bia 4.3.0` |
| Base URL da API | `import.meta.env.VITE_API_URL \|\| "http://localhost:8080"` |
| Roteamento | React Router DOM (`BrowserRouter`) |
| Componentes de referência | `Tasks.jsx`, `About.jsx`, `VersionInfo.jsx` |
| Arquivo de estilos | `client/src/index.css` |

---

## Instruções para o Agente Dev

> **@dev** — Esta tarefa está pronta para implementação.

**Antes de começar:**

1. Verifique em qual branch você está: `git branch --show-current`.  
   - Crie uma nova branch a partir de `main` se ainda não houver uma dedicada: `git checkout -b feat/001-versao-tab`.
2. Mova este card para a pasta `tasks/doing/`:  
   `mv tasks/001-fit-versao-tab.md tasks/doing/001-fit-versao-tab.md`

**Passos de implementação sugeridos:**

1. Crie `client/src/components/Versao.jsx` com:
   - `useEffect` para chamar `GET /api/versao` ao montar o componente.
   - Estados para `versao`, `loading` e `error`.
   - Renderização condicional: spinner/skeleton → conteúdo → mensagem de erro.
2. Registre a rota `/versao` no `App.jsx` (seguir o padrão de `<Route path="/about" element={<About />} />`).
3. Adicione o link "Versão" no `Header.jsx` usando `<Link>` do React Router (seguir o padrão visual existente).
4. Adicione os estilos necessários em `index.css` se não houver classes reutilizáveis.
5. Verifique se a aplicação compila e que a navegação e a exibição dos dados funcionam corretamente.

Ao finalizar, mova o card para `tasks/done/` e notifique que a task foi concluída.
