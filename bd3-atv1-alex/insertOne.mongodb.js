/*NOME DO BANCO DE DADOS*/
const database = "BD3-NoSQL-AtlasMongoDB"

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3-nosql-atv1"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use (database);

/*INSERE UM REGISTRO NA COLEÇÃO DE DADOS: */
db[collection].insertOne(
    {
        "codigo":"1",
        "titulo": "Teste"
    }
)