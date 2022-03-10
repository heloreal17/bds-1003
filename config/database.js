const mongoose = require('mongoose')
const conexao = ()=>{
    //conexão com o MongoAtlas
    mongoose.connect('mongodb+srv://useradmin:heloreal17@cluster0.1k2zm.mongodb.net/fiap?retryWrites=true&w=majority')
    //conexão local
    //mongoose.connect('mongodb://localhost/fiap')
} 
module.exports = conexao
