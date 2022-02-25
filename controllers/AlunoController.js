const Aluno = require('../models/Aluno')

module.exports = class AlunoController{

    static formularioAluno(req, res){
        res.render('alunos/formulario')
    }
    static listarAluno(req, res){
            Aluno.findAll().then((alunos)=>{
            res.render('alunos/listaAluno', {alunos})
        })
        
    }

    static cadastrarAluno(req, res){
                var erros = []
                if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
                    erros.push({texto: "Nome inválido"})
                }
                if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
                    erros.push({texto: "E-mail inválido"})
                }
                if(erros.length > 0){
                    res.render("alunos/formulario", {erros: erros})
                }else{
                    const aluno = {
                        nome: req.body.nome,
                        email: req.body.email,
                        endereco: req.body.endereco,
                        cidade: req.body.cidade,
                        estado: req.body.estado,
                        cep: req.body.cep
                      }
                            Aluno.create(aluno)
                            res.redirect('/alunos')
                                                     
                        
                }


                                                   
    }
    static updateAluno(req, res){
        const id = req.params.id
        const aluno = Aluno.findOne({where:{id: id}})
        res.render('alunos/editarAluno',{aluno} )//renderizando uma view!!!!
    }
    static updateAlunoPost(req, res){
        const id = req.body.id
        const aluno = {
            nome: req.body.nome,
            email: req.body.email,
            endereco: req.body.endereco,
            cidade: req.body.cidade,
            estado: req.body.estado,
            cep: req.body.cep
        }
        Aluno.update(aluno, {where: {id: id}})
        res.redirect('/alunos')

    }



    static deletarAluno(req, res){
        const { id } = req.params
        Aluno.destroy({where: { id }})
        res.redirect('/alunos')
    }
}