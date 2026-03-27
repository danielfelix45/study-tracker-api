# 📚 Study Tracker API

API RESTful para gerenciamento de estudos, permitindo que usuários organizem cursos, acompanhem progresso e registrem sessões de estudo.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- TypeScript
- MySQL
- Zod (validação)
- Jest + Supertest (testes)
- Swagger (documentação)

---

## 📦 Funcionalidades atuais

- ✅ CRUD de cursos
- ✅ Validação de dados com Zod
- ✅ Middleware de validação
- ✅ Tratamento global de erros
- ✅ Testes automatizados
- ✅ Documentação com Swagger

---

## 🏗️ Arquitetura do projeto

O projeto segue uma estrutura organizada em camadas:

```
src/
├── controllers/
├── services/
├── middlewares/
├── schemas/
├── database/
├── routes/
├── docs/
```

---

## ▶️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar banco de dados

Crie um banco MySQL chamado:

```
study_tracker
```

E configure o arquivo:

```
src/database/connection.ts
```

---

### 4. Rodar o projeto

```bash
npm run dev
```

---

## 📄 Documentação da API

Acesse no navegador:

```
http://localhost:3000/docs
```

---

## 🧪 Rodar testes

```bash
npx jest
```

---

## 🔮 Próximas implementações

- 👤 Entidade de usuários
- 🔐 Autenticação com JWT
- 🔗 Relacionamento entre usuários e cursos
- ⏱️ Sessões de estudo
- 📊 Controle de progresso

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de praticar e demonstrar boas práticas de desenvolvimento backend, seguindo padrões utilizados no mercado.

---

## 👨‍💻 Autor

Desenvolvido por Félix
