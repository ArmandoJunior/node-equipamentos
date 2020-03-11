var Sequelize = require('sequelize'), sequelize =  new Sequelize('BDEquipamentos', 'usrsequelize', 'sequelize', {
    host: 'localhost',
    dialect: "mysql",
    port: 3306,
    operatorsAliases: false
});

sequelize
    .authenticate()
    .then(function (err) { console.log('SUCESSO!!! Conexão estabelecida.');}, function (err) {
    console.log('Erro!!! Não for possivel conectar.', err);
});
