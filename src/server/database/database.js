var Sequelize = require('sequelize');
var yourDB = "postgres://wefbagotpgtihr:Eky9dnfj09ISCQbTkqfPzr_ybo@ec2-54-235-120-27.compute-1.amazonaws.com:5432/d3anem31po4una";
var sequelize = new Sequelize(yourDB, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true
        }
    }
});

module.exports = sequelize;


