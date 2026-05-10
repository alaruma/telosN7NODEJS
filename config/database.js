// config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Substitua pela sua string de conexão do Atlas
        await mongoose.connect('mongodb+srv://WelcomeUser:AbbR423d4b18@bancodefilmes.im5ovtm.mongodb.net/?appName=BancodeFilmes');
        console.log('MongoDB conectado com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

