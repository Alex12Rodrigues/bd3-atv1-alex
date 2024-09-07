/*NOME DO BANCO DE DADOS*/
const database = "BD3-NoSQL-AtlasMongoDB"

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3-nosql-atv1"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use (database);

/*SELECIONA TODOS REGISTROS NA COLEÇÃO DE DADOS: */
db[collection].find(
    
    {"data_nascimento":/2002/i},
    {"_id": 0, "cod_aluno": 0}


);