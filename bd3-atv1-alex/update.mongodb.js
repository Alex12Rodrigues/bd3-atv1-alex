/*NOME DO BANCO DE DADOS*/
const database = "BD3-NoSQL-AtlasMongoDB"

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3-nosql-atv1"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/* ALTERA OS DADOS DE UM ÚNICO DOCUMENTO DA COLLECTION */
db[collection].updateOne(
    { cod_aluno: "10" },

    { $set: { nome: "Beatriz Mendes Ribeiro", CPF: "666.999.696-69", RG: "66.555.333-9" } }
);