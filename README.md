JOVI GRUPO FOCO — Sprint 4
Aplicação web desenvolvida para a evolução do JOVI Challenge / Câmera Contextual. A landing page apresenta a proposta e a área logada traz uma biblioteca de capturas (Estudos, Social e Expressão) com busca, filtros, favoritos e exclusão de itens salvos no navegador.

Tecnologias
React  e JavaScript

React Router DOM

Tailwind CSS 

Vite

LocalStorage

API estática em JSON (public/api/contents.json) via fetch

Git e GitHub

Como rodar o projeto
Clone o repositório e instale as dependências:

Bash
git clone https://github.com/gabkenzoo/sprint-4-web.git
cd sprint-4-web
npm install
Inicie em modo de desenvolvimento:

Bash
npm run dev
Para testar o build de produção:

Bash
npm run build
npm run preview
API e Dados
Os dados vêm de public/api/contents.json através do fetch na função getContents(). As alterações do usuário (favoritar, apagar ou criar) ficam salvas no localStorage.

Login para teste
E-mail: aluno@jovi.com

Senha: jovi123

A rota /dashboard é protegida pelo ProtectedRoute. A autenticação é apenas demonstrativa para fins acadêmicos.

Uso de IA
Usamos IA (Claude) como suporte para tirar dúvidas de código, organizar pastas e ajustar CSS e pegamos algumas partes de codigos do claude. A ideia do projeto, arquitetura e testes foram feitos inteiramente pela equipe.

Repositório
GitHub: https://github.com/gabkenzoo/sprint-4-web.git

Integrantes
Consulte o arquivo INTEGRANTES.TXT.