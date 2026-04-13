# 📚 Study Tracker API

API RESTful para gerenciamento de estudos, permitindo que usuários organizem cursos, registrem sessões de estudo e acompanhem automaticamente seu progresso.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- TypeScript
- MySQL
- Zod (validação de dados)
- JWT (autenticação)
- Jest + Supertest (testes)
- Swagger (documentação)

---

## 📦 Funcionalidades

- 👤 Cadastro e autenticação de usuários (JWT)
- 🔐 Proteção de rotas com middleware
- 📚 CRUD de cursos
- 🔗 Cursos vinculados ao usuário autenticado
- ⏱️ Registro de sessões de estudo
- 📊 Cálculo automático de progresso dos cursos
- ✅ Validação de dados com Zod
- ⚠️ Tratamento global de erros
- 🧪 Testes automatizados
- 📄 Documentação com Swagger

---

## 🧠 Regra de negócio (diferencial)

O progresso dos cursos é calculado automaticamente com base no tempo de estudo:

- Cada sessão registrada soma minutos ao curso
- O progresso é atualizado automaticamente
- Regra: **1000 minutos = 100% de progresso**

---

## 🏗️ Arquitetura do projeto

O projeto segue uma estrutura em camadas, separando responsabilidades:

```
src/
├── controllers/ # Recebe requisições
├── services/ # Regras de negócio
├── middlewares/ # Autenticação e validação
├── schemas/ # Validação com Zod
├── database/ # Conexão com MySQL
├── routes/ # Definição das rotas
├── docs/ # Swagger
```

---

## ▶️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone <https://github.com/danielfelix45/study-tracker-api>
```

---

### 2. Instalar dependências

```bash
npm install
```

---

### 3. Configurar varáveis de ambiente

Crie um arquivo .env:

```env
PORT=3000
JWT_SECRET=sua_chave_secreta
```

---

### 4. Configurar banco de dados

Crie um banco MYSQL:

```
study_tracker
```

E configure a conexão em:

```
src/database/connection.ts
```

---

### 5. Rodar o projeto

```bash
npm run dev
```

---

## 🔐 Autenticação

A API utiliza JWT para autenticação.

### Login:

```http
POST /auth/login
```

### Uso do token:

```
Authorization: Bearer SEU_TOKEN
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

### 🎯 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de praticar desenvolvimento backend com foco em:

- Arquitetura em camadas
- Autenticação e segurança
- Validação de dados
- Regras de negócio reais
- Integração com banco de dados relacional

---

### 🚀 Possíveis melhorias futuras

- 📊 Estatísticas de estudo (tempo total, sessões por dia)
- 📈 Dashboard frontend
- 🔍 Filtros e busca de cursos
- 🐳 Dockerização da aplicação

---

### 👨‍💻 Autor

Desenvolvido por Félix
