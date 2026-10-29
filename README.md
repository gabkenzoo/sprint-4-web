# JOVI Lens — Sprint 4

Aplicação web que evolui a proposta JOVI Challenge / JOVI Câmera Contextual. A landing page apresenta a solução e a área logada demonstra uma biblioteca de capturas dividida em Estudos, Social e Expressão. O usuário pode pesquisar, filtrar, favoritar, excluir e adicionar registros. Os dados da biblioteca ficam salvos no navegador.

## Tecnologias utilizadas
- React 19 e JavaScript (componentes, props, estado e hooks)
- React Router DOM (rotas públicas e rota protegida)
- Tailwind CSS 4 (estilização responsiva)
- Vite (ambiente de desenvolvimento e build)
- LocalStorage (persistência local e sessão demonstrativa)
- API própria em JSON (`public/api/contents.json`), consumida com `fetch`
- Git, GitHub e Vercel (versionamento e publicação)

## Pré-requisitos
- Node.js 20.19+ ou 22.12+ e npm.
- Git (opcional para clonar o repositório).

## Instalação
Clone o repositório:
```bash
git clone COLE_AQUI_O_LINK_DO_GITHUB
cd jovi-lens-sprint4
npm install
```

## Executar em desenvolvimento
```bash
npm run dev
```
Abra a URL indicada no terminal, normalmente `http://localhost:5173`.

## Validar a versão de produção
```bash
npm run build
npm run preview
```
O comando `npm run lint` executa a análise estática do código.

O arquivo `vercel.json` garante que as rotas (`/login`, `/dashboard`) funcionem ao recarregar a página na Vercel.

## API e back-end
Os dados iniciais vêm de uma API própria: o arquivo `public/api/contents.json`, que é buscado com `fetch` na função `getContents()` (`src/services/contentApi.js`). Não existe servidor back-end separado. Depois de carregados, os dados ficam salvos no `localStorage` do navegador, então as alterações (favoritar, excluir, adicionar) continuam ao recarregar a página.

## Acesso para teste
A tela de login é uma autenticação demonstrativa no front-end:
- E-mail: `aluno@jovi.com`
- Senha: `jovi123`

A rota `/dashboard` é protegida por um componente `ProtectedRoute`. Essa autenticação serve apenas para avaliação acadêmica e não deve ser usada em produção, pois não há servidor de autenticação.

## React: requisitos demonstrados
- **Componentização:** `Header`, `ContentCard`, `StatCard`, `ProtectedRoute`, `Landing`, `Login` e `Dashboard`.
- **Props:** os componentes recebem conteúdo, rótulos e funções de interação via props.
- **Rotas públicas:** `/` (landing page) e `/login`.
- **Rota protegida:** `/dashboard`, que redireciona para login quando não há sessão.
- **Hooks nativos:** `useState`, `useEffect` e `useMemo`.
- **Hooks customizados:** `useLocalStorage` (salvar no navegador), `useAuth` (login e logout) e `useContents` (busca, filtros, favoritar, excluir e adicionar). Assim a lógica fica separada das telas.
- **API:** `getContents()` busca os conteúdos iniciais com `fetch`.
- **Responsividade:** layouts adaptáveis para celular, tablet e desktop com classes responsivas do Tailwind CSS.

## Uso de Inteligência Artificial
Usamos uma ferramenta de IA (Claude) como apoio durante o projeto: para tirar dúvidas sobre React Router e hooks, sugerir a organização das pastas, ajudar com classes do Tailwind para a responsividade, revisar o código e melhorar este README. A ideia, o tema (JOVI Câmera Contextual), as telas e as decisões do projeto são da equipe, que também testou e revisou o código final.

## Deploy na Vercel
1. Envie o projeto para um repositório GitHub.
2. Acesse https://vercel.com/ e importe esse repositório.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Conclua o deploy e teste `/`, `/login` e `/dashboard`.
5. Preencha os links reais abaixo após publicar.

- **Repositório Git:** `COLE_AQUI_O_LINK_DO_GITHUB`
- **Deploy Vercel:** `COLE_AQUI_O_LINK_DA_VERCEL`

## Integrantes
Confira `INTEGRANTES.TXT`.
