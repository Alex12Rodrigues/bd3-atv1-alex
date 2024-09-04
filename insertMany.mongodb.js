/*NOME DO BANCO DE DADOS*/
const database = "BD3-NoSQL-AtlasMongoDB"

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3-nosql-atv1"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/*INSERE UM REGISTRO NA COLEÇÃO DE DADOS: */
db[collection].insertMany(
    [
        {
            "cod_aluno": "1",
            "nome": "João Silva",
            "CPF": "123.456.789-00",
            "RG": "12.345.678-9",
            "telefone_aluno": "(11) 98765-4321",
            "telefone_responsavel": "(11) 91234-5678",
            "email": "joao.silva@email.com",
            "data_nascimento": "2000-01-01"
        },
        {
            "cod_aluno": "2",
            "nome": "Maria Oliveira",
            "CPF": "987.654.321-00",
            "RG": "98.765.432-1",
            "telefone_aluno": "(21) 98765-4321",
            "telefone_responsavel": "(21) 91234-5678",
            "email": "maria.oliveira@email.com",
            "data_nascimento": "2002-05-15"
        },
        {
            "cod_aluno": "3",
            "nome": "Pedro Santos",
            "CPF": "111.222.333-44",
            "RG": "22.333.444-5",
            "telefone_aluno": "(31) 98765-4321",
            "telefone_responsavel": "(31) 91234-5678",
            "email": "pedro.santos@email.com",
            "data_nascimento": "1999-11-23"
        },
        {
            "cod_aluno": "4",
            "nome": "Ana Costa",
            "CPF": "555.666.777-88",
            "RG": "55.666.777-9",
            "telefone_aluno": "(41) 98765-4321",
            "telefone_responsavel": "(41) 91234-5678",
            "email": "ana.costa@email.com",
            "data_nascimento": "2001-08-30"
        },
        {
            "cod_aluno": "5",
            "nome": "Lucas Pereira",
            "CPF": "888.999.000-11",
            "RG": "88.999.000-2",
            "telefone_aluno": "(51) 98765-4321",
            "telefone_responsavel": "(51) 91234-5678",
            "email": "lucas.pereira@email.com",
            "data_nascimento": "2003-03-12"
        },
        {
            "cod_aluno": "6",
            "nome": "Juliana Lima",
            "CPF": "222.333.444-55",
            "RG": "22.333.444-6",
            "telefone_aluno": "(61) 98765-4321",
            "telefone_responsavel": "(61) 91234-5678",
            "email": "juliana.lima@email.com",
            "data_nascimento": "2000-10-05"
        },
        {
            "cod_aluno": "7",
            "nome": "Felipe Souza",
            "CPF": "444.555.666-77",
            "RG": "44.555.666-8",
            "telefone_aluno": "(71) 98765-4321",
            "telefone_responsavel": "(71) 91234-5678",
            "email": "felipe.souza@email.com",
            "data_nascimento": "1998-12-18"
        },
        {
            "cod_aluno": "8",
            "nome": "Carla Almeida",
            "CPF": "333.444.555-66",
            "RG": "33.444.555-7",
            "telefone_aluno": "(81) 98765-4321",
            "telefone_responsavel": "(81) 91234-5678",
            "email": "carla.almeida@email.com",
            "data_nascimento": "2001-06-25"
        },
        {
            "cod_aluno": "9",
            "nome": "Rafael Rodrigues",
            "CPF": "777.888.999-00",
            "RG": "77.888.999-1",
            "telefone_aluno": "(91) 98765-4321",
            "telefone_responsavel": "(91) 91234-5678",
            "email": "rafael.rodrigues@email.com",
            "data_nascimento": "1999-09-14"
        },
        {
            "cod_aluno": "10",
            "nome": "Beatriz Mendes",
            "CPF": "666.777.888-99",
            "RG": "66.777.888-0",
            "telefone_aluno": "(31) 98765-4321",
            "telefone_responsavel": "(31) 91234-5678",
            "email": "beatriz.mendes@email.com",
            "data_nascimento": "2002-02-07"
        }
    ]
)