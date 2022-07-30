import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'onebitflix_development',
    username: 'postgres',
    password: 'senha123',
    define: {
        //Converte o que está no banco em snake_case para o ts em camelCase
        underscored: true
    }
});