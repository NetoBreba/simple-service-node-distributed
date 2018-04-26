import Sequelize from 'sequelize'

let sequelize = new Sequelize("sistemas_distribuidos", "sd", "postgres123",{
    host: "database",
    port: "5432",
    dialect: "postgres",
    operatorsAliases: false
})

// let sequelize = new Sequelize('sistemas_distribuidos', null, null, {
//     host: 'localhost',
//     dialect: 'sqlite',
//     storage: './data.sqlite'
// });

export let User =  sequelize.define("user", {
    name: Sequelize.STRING
})

User.sync()