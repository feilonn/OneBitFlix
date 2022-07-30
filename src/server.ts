import express from "express";
import { sequelize } from "./database";

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    //Query generica para testar conexão com o DB
    sequelize.authenticate().then(() => {
        console.log('Conectado ao banco de dados');
    })
    console.log(`Rodando na porta ${PORT}`);
})