/*NOME DO BANCO DE DADOS*/
const database = "BD3-NoSQL-AtlasMongoDB"

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3-nosql-atv1"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use (database);
/* ALTERA OS DADOS DE UM ÚNICO DOCUMENTO DA COLLECTION */
db[collection].updateOne(
    {CPF: "123.456.789-00"},

    {$set: {email: "joao.silva2@email.com"}}

);


