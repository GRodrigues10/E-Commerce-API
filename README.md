# 🛒 E-Commerce API

Uma API de e-commerce simples para gerenciar produtos. Ideal para integração com aplicações front-end, testes e prototipagem de lojas online.

[![API Status](https://img.shields.io/badge/status-active-brightgreen)]()
[![Deploy](https://img.shields.io/badge/deploy-Render-blue)]()

--- 
## ⚙️ Tecnologias Utilizadas

- Node.js

- JavaScript

- Insomnia

- Express.js

- MongoDB

- Mongoose

- Deploy: Render
---

## 🌐 Base URL
https://e-commerce-api-58n9.onrender.com/products

## 📝 Endpoints Principais

### GET /products
Retorna todos os produtos disponíveis na loja.

**Exemplo de requisição:**
```bash
Link: https://e-commerce-api-58n9.onrender.com/products


[
  {
    "_id": "68dd32618f80aca56f5ac8bb",
    "name": "Xbox Series X 2TB",
    "category": [
      "Eletrônicos",
      "Alta"
    ],
    "description": "O console mais poderoso da Microsoft, com gráficos em até 4K/120fps, SSD ultrarrápido e retrocompatibilidade, além de 2TB de armazenamento.",
    "rate": 4.5,
    "price": 5699,
    "image": "https://static.wixstatic.com/media/95aede_46893f90c315489893125ca722b0da05~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/95aede_46893f90c315489893125ca722b0da05~mv2.png",
    "__v": 0,
    "stock": 120
  }
]


```
### GET /products/:id

Retorna os detalhes de um produto específico.

**Exemplo de requisição:**
```bash
Link: https://e-commerce-api-58n9.onrender.com/products/1
[
  {
    "_id": "68dd32618f80aca56f5ac8bb",
    "name": "Xbox Series X 2TB",
    "category": [
      "Eletrônicos",
      "Alta"
    ],
    "description": "O console mais poderoso da Microsoft, com gráficos em até 4K/120fps, SSD ultrarrápido e retrocompatibilidade, além de 2TB de armazenamento.",
    "rate": 4.5,
    "price": 5699,
    "image": "https://static.wixstatic.com/media/95aede_46893f90c315489893125ca722b0da05~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/95aede_46893f90c315489893125ca722b0da05~mv2.png",
    "__v": 0,
    "stock": 120
  }
]
```


