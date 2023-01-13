# 📄 Documentação da API

O objetivo do projeto é construir um **CRUD** de uma **WEB API**, para o
gerenciamento de uma loja.

Sendo possível:
- cadastrar produto,
- listar todos produtos ou produto específico,
- atualizar produto,
- deletar produto;

Adicional: 

⚠️ **Observação:**

O endereço fornecido no desafio para consultar cidades do Rio de Janeiro não estava acessível.
Dessa forma, foi utilizado o endereço: http://www.geonames.org/childrenJSON?geonameId=3469034.
A API do endereço acima fornece informações sobre os **Estados** brasileiros. 


- Há uma rota onde é possível consultar o nome de um estado brasileiro por intermédio da API externa:
  - Caso **exista**: O estado é **salvo** no banco de dados,
  - Caso o estado **já tenha sido salvo** anteriormente: **Não será salvo** novamente e é exibida uma mensagem ao usuário,
  - Caso o nome do estado não esteja corretamente escrito ou o estado **não exista**: Uma **mensagem** é exibida ao usuário
  
---
##Iniciando o Projeto

Comandos:
- docker compose up
- npm run dev


⚒️ **URL BASE:** http://localhost:3000/

---
# Sumário

- Usuário
  - [Cadastrar produto](#📤-post-user);
  - [Listar produtos](#📥-get-user);
  - [Alterar dados do produto](#📦-patch-user);
  - [Deletar um produto](#💽-delete-user);
---
# 👤 Produto

### 🌐 Endpoint: urlbase/product

Rotas responsáveis pelos produtos.

## Requisições:

### 📤 POST /product

Rotas responsável pelo cadastro dos produtos.

🔐 Nível de permissão da rota: **Público**

**Padrão de corpo (requisição):**

```json
{
    "name": "Boneco 1" ,
    "category": "brinquedos",
    "status": "ACTIVE",
    "quantity": 100
}
```

**Retorno esperado 201 (Created):**

```json
{
    "id": "27bd1b36-aa05-484d-b49a-ec1fd1aaba21",
    "name": "Boneco 1",
    "category": "brinquedos",
    "status": "ACTIVE",
    "quantity": 100,
    "created_at": "2023-01-13T15:33:21.403Z",
    "updated_at": "2023-01-13T15:33:21.403Z",
    "deleted_at": null
}
```
---
### 📥 GET /product?id=

Rota para listar produtos.
- /product : lista todos produtos;
- /product?id=xxxxxxxx : lista o produto cujo id foi enviado no query param;

🔐 Nível de permissão da rota: **Pública**

**Padrão de requisição:**

Esse verbo do protocolo não necessita do envio de um body (corpo).

**Retorno esperado 200 (OK):**

```json
[
    {
        "id": "b31e5d39-2fb5-4900-be87-086afacb26e9",
        "name": "Boneco 1",
        "category": "brinquedos",
        "status": "INACTIVE",
        "quantity": 100,
        "created_at": "2023-01-13T15:31:53.364Z",
        "updated_at": "2023-01-13T15:32:16.347Z",
        "deleted_at": "2023-01-13T15:32:16.345Z"
    },
    {
        "id": "27bd1b36-aa05-484d-b49a-ec1fd1aaba21",
        "name": "Boneco 2",
        "category": "brinquedos",
        "status": "ACTIVE",
        "quantity": 100,
        "created_at": "2023-01-13T15:33:21.403Z",
        "updated_at": "2023-01-13T15:33:21.403Z",
        "deleted_at": null
    }
]
```
---

### 📦 PATCH /prduct/:id

Rota responsável por atualizar os dados de um produto.

🔐 Nível de permissão da rota: **Pública**

**Padrão de corpo (requisição):**

```json
{
    "name": "Bonecos 1 Atualizado" 
}
```

**Retorno esperado 200 (OK):**

```json
{
    "id": "27bd1b36-aa05-484d-b49a-ec1fd1aaba21",
    "name": "Boneco 1 Atualizado",
    "category": "brinquedos",
    "status": "ACTIVE",
    "quantity": 100,
    "created_at": "2023-01-13T15:33:21.403Z",
    "updated_at": "2023-01-13T16:12:12.746Z",
    "deleted_at": null
}
```

⚠️ **Observações:** Todos os parâmetros são opcionais nessa rota, apenas os atributos gerados pela API não são passíveis de edição.

---
### 💽 DELETE /product

Rota de inativação dos dados de um produto.

🔐Nível de permissão da rota: **Pública**

**Padrão de requisição:**

Requisição do verbo **delete** do protocolo **HTTP,** portanto não é necessário um corpo (body) de requisição.

**Retorno esperado 204 (No body content)**

⚠️Observação: O produto é apenas desativado, podendo ser reativado posteriormente.

Não há retorno de body, no entanto é assim que o produto fica no banco de dados:
```json
{
    "id": "b31e5d39-2fb5-4900-be87-086afacb26e9",
    "name": "Boneco 1",
    "category": "brinquedos",
    "status": "INACTIVE",
    "quantity": 100,
    "created_at": "2023-01-13T15:31:53.364Z",
    "updated_at": "2023-01-13T15:32:16.347Z",
    "deleted_at": "2023-01-13T15:32:16.345Z"
}
```

---

# 👤 Estado

### 🌐 Endpoint: urlbase/state

Rotas responsáveis pelos estados.

## Requisições:

### 📤 POST /state

Rotas responsável pela consulta e cadastro dos estados brasileiros.
- Caso o estado exista: o nome e id é salvo no banco de dados;

**Padrão de corpo (requisição):**

```json
{
	"state": "Rio de Janeiro"
}
```

**Retorno esperado 201 (Created):**

```json
{
	"id": 3451189,
	"name": "Rio de Janeiro"
}
```
- Caso não exista ou esteja escrito errado:
  
**Retorno esperado 400 (Bad Request):**
```json
{
    "erro": "O estado não existe, tente reescrever"
}
```
- Caso já tenha sido salvo no banco:
  
**Retorno esperado 400 (Bad Request):**
```json
{
    "error": "O estado já foi salvo no banco, tente outro"
}
```
------
