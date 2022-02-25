const db = require('../db/bancoMysql')

const Admin = db.sequelize.define('tabela_admin',{
    nome: {
        type: db.Sequelize.STRING,
        required: true
    },
    email: {
        type: db.Sequelize.STRING,
        required: true
    },

    senha: {
        type: db.Sequelize.STRING,
        required: true
    }

})

//Admin.sync({force: true})//depois de criar, comentar ou apagar
module.exports = Admin