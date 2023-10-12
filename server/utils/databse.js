import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('loginDB', 'root', 'Manish9632', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;