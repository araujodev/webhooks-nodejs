# Projeto Webhook em NodeJS

O projeto em questão para fins de estudo tem por objetivo
a construção de uma API de pagamentos que 
deve notificar um determinado cliente (também construído em NodeJS).

Esta notificação deve ocorrer quando um novo pagamento for adicionado
ao projeto utilizando o endpoint:
```
POST /payments HTTP/1.1
Host: localhost:9000
Content-Type: application/json

{
    "title": "Cobranca simples volume 1",
    "value": 59.90
}
```

O cliente que representa um outro sistema deve receber
o recurso criado e armazenar no banco de dados 
da aplicação cliente (representada pela base `webhookjs-client`).

As informações serão repassadas no formato abaixo 
para o cliente a ser notificado:

```
{
    "msg": "new payment created",
    "data": {
        "status": false,
        "_id": "5f07524eea6d6524e892a629",
        "title": "Cobranca simples volume 1",
        "value": 59.9,
        "createdAt": "2020-07-09T17:22:22.970Z",
        "__v": 0
    }
}
```

## Diretórios e Arquivos

- Para rodar a aplicação da API: `node index.js`.
- A aplicação cliente está dentro de client-notification.
- Para rodar a aplicação cliente: `cd client-notification` e `node index.js`.
- Configurações de banco de dados da API estão em database.
- Demais arquivos como controllers e rotas estão alocados dentro de app.


## Conclusão
Este repositorio está sendo mantido para estudos caso tenha alguma duvida favor entrar em contato pelo leandro.souara.web@gmail.com