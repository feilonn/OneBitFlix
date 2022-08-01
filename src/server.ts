import { adminJs, adminJsRouter } from './adminjs/index';
import express from "express";
import { sequelize } from "./database";

const app = express();

//app.use('caminho', rotas)
app.use(adminJs.options.rootPath, adminJsRouter)

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    //Query generica para testar conexão com o DB
    sequelize.authenticate().then(() => {
        console.log('Conectado ao banco de dados');
    })
    console.log(`Rodando na porta ${PORT}`);
})