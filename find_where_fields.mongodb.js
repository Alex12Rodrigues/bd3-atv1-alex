/*NOME DO BANCO DE DADOS*/
const database = "BD3-NoSQL-AtlasMongoDB"

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3-nosql-atv1"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use (database);

/*SELECIONA TODOS REGISTROS NA COLEÇÃO DE DADOS: */
db[collection].find(
    
    {"CPF": "123.456.789-00"},
    {"_id": 0, "cod_aluno": 0}


);