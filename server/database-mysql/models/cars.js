const connection=require("../index")
const { Sequelize, DataTypes } = require("sequelize");
// console.log(connection);

const Cars = connection.define("cars", {
    brand:DataTypes.STRING,
    // category:DataTypes.STRING,
    modele:DataTypes.STRING,
    price:DataTypes.INTEGER,
    kilometers:DataTypes.INTEGER,
    // nbrOfHands:DataTypes.INTEGER,
    // description:DataTypes.STRING,
    // fuel:DataTypes.STRING,
    image:DataTypes.STRING
    });


 module.exports.Cars = Cars