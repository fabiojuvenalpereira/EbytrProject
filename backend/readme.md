# EbytrProject
###  Muito bem, você está agora do diretório de backend do projeto EbytrProject.

##

### Aqui é onde está localizada toda a parte de backend do projeto. Você vai encontrar um projeto baseado em arquitetura MSC, organizado por pastas, onde as principais pastas representam camadas de uma arquitetura, visando organização, melhor compreensão e facilitar a manutenção de código.

##

#### Sem mais delongas...
##### Para consequir executar em seu computador a aplicação basta seguir alguns requisitos:

##
## Como instalar

Pre-requisitos para rodar o projeto: 
- mongoDB
- NPM

Copie o ssh do projeto `git@github.com:fabiojuvenalpereira/EbytrProject.git`

* Abra um terminal no seu computador e utilize os comandos a baixo na ordem que são apresentados:

  * `git clone git@github.com:fabiojuvenalpereira/EbytrProject.git`
  * `cd EbytrProject`
  * `npm install`
  * `npm start`

  A aplicação está configurada para rodar na porta local 3000.


## Backend
Desenho simplificado de como os dados são armazenados no banco de dados.
![exemplo de armazenamento de dados](https://thumbs2.imgbox.com/34/65/NYJLq8at_t.png)

Requisições básicas da API:
  * `/` `POST` Cria uma nova tarefa e adiciona no banco
  * `/` `GET` Busca toda tarefa que esta no banco
  * `/` `PUT`  Edita dados de uma tarefa já cadastrada no banco
  * `/:id` `DELETE` Deleta uma tarefa cadastrada no banco

