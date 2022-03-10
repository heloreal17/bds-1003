module.exports = (app)=>{
    //importando as configurações 
    var conexao = require('../config/database')
    //importar o modelo do documento
    var profs = require('../models/profs')

    //abrir o formulário professor.ejs
    //com a requisição /professor
    app.get('/professor', (req,res)=>{
        //conectar o banco de dados
        conexao()
        //executar a pesquisa de documentos na coleção professores
        profs.find()
        //Se a pesquisa gerar resultado, mostrar a página e enviar os dados no formato json
        .then((profs)=>{
            res.render('professor.ejs',{dados:profs})
        })
        //se não for possível fazer a pesquisa, mostrar o erro no console
        .catch((err)=>{
            console.log(err)
        })
    })

    //criar a rota para a gravação dos dados do formulário professor.ejs 
    app.post('/professor', (req,res)=>{
        //recerber as informações digitadas
        var infos = req.body
        //conectar o banco de dados
        conexao()
        //definir como as informações serão gravadas
        var documento = new profs({
            nome:infos.nome,
            disciplina:infos.disciplina,
            turma:infos.turma,
            email:infos.email
        }).save()
        .then((result)=>{
            res.redirect('/professor')
        })
        .catch((err)=>{
            console.log(err)
        })
    })

}