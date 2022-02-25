const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs')

module.exports = class AdminController{

    static inicialAdmin(req, res){
        res.render('administrador/inicialAdmin')
    }
    static registroAdmin(req, res){
        res.render('administrador/registro')
    }
    static registroAdminPost(req, res){
        var erros = []
        if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
            erros.push({texto: "Nome inválido"})
        }
        if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
            erros.push({texto: "E-mail inválido"})
        }
        if(!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null || req.body.senha < 4){
            erros.push({texto: "Senha inválida ou senha com menos de 4 algarismos"})
        }
        if(req.body.senha != req.body.senha2){
            erros.push({texto: "Senhas diferentes. Tente novamente"})
        }
        if(erros.length > 0){
            res.render("administrador/registro", {erros: erros})
        }else{
            const admin = {
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha
               }
               /**
                *      HASH DE SENHA
                    senhas sem tratamento,
                    senhas criptografadas: pode ter reversão.
                            criptografia =====> descriptografia
                                Assimétrico: duas chaves, uma para criptografia e outra para descripografia
                                Simétrico: uma chave para criptografia e descriptografia.
                            hash: são algoritmos que não possibilitam o retorno da senha original
                */
  

               bcrypt.genSalt(13, (salt)=>{// o 10 representa 2 elevado a 10 = 1024. Vai gerar uma criptografia diferente.
                    bcrypt.hash(admin.senha, salt, (hash)=>{
                    /**
                        salt:o número de vezes que a senha será misturada
                        em um núcleo de 2 GHz, você pode esperar:
                        rounds=8 : ~40 hashes/sec
                        rounds=9 : ~20 hashes/sec
                        rounds=10: ~10 hashes/sec
                        rounds=11: ~5  hashes/sec
                        rounds=12: 2-3 hashes/sec
                        rounds=13: ~1 sec/hash
                        rounds=14: ~1.5 sec/hash
                        rounds=15: ~3 sec/hash
                        rounds=25: ~1 hour/hash
                        rounds=31: 2-3 days/hash
                     */
                        admin.senha = hash
                        Admin.create(admin)
                    })
                })
               res.redirect('/administrador/lista')
                                
                
        }

    }
    static listarAdmin(req, res){
            Admin.findAll().then((admin)=>{
            res.render('administrador/listaAdmin', {admin})
        })
        
    }
    static deletarAdmin(req, res){
        const { id } = req.params
        Admin.destroy({where: { id }})
        res.redirect('/administrador/lista')
    }

                                               
}

