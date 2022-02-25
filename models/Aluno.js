const db = require('../db/bancoMysql')

const Aluno = db.sequelize.define('tabela_aluno',{
    nome: {
        type: db.Sequelize.STRING,
        required: true
    },
    email: {
        type: db.Sequelize.STRING,
        required: true
    },
    endereco: {
        type: db.Sequelize.STRING,
        required: true
    },
    cidade: {
        type: db.Sequelize.STRING,
        required: true
    },
    estado: {
        type: db.Sequelize.STRING,
        required: true
    },
    cep: {
        type: db.Sequelize.STRING,
        required: true
    }
})

//Aluno.sync({force: true})//depois de criar, comentar ou apagar
module.exports = Aluno