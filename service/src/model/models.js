import Sequelize from 'sequelize'

let sequelize = new Sequelize("sistemas_distribuidos", "sd", "postgres123",{
    host: "database",
    port: "5432",
    dialect: "postgres",
    operatorsAliases: false
})

export let User =  sequelize.define("user", {
    name: Sequelize.STRING
})

User.sync()