const mongoose = require('mongoose')

const modelo = new mongoose.Schema({
    nome:String,
    rm:String,
    turma:String,
    idade:String
})

module.exports = mongoose.model('alunos',modelo)