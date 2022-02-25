const Sequelize = require("sequelize")

//conexão com o banco de dados
const sequelize = new Sequelize('mvcnode','root','031717440',{
    host: "localhost",  // local do banco
    dialect: "mysql"    // tipo do banco de dados
}) 

sequelize.authenticate().then(()=>{// verificando se a conexão foi feita.
    console.log("***********conectado com sucesso ao banco MySQL***************")
    console.log("http://localhost:3000")
}).catch((erro)=>{ //caso ocorrer algum erro
    console.log("*********falha ao se conectar ao banco****************: "+erro)
})  

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
