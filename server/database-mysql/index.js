
const { Sequelize, DataTypes } = require("sequelize");

// create a database connection in your application using a Sequelize instance and the config file
const connection = new Sequelize(
  "cars",
  "root",
  "root",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

//verify your connection here !
connection.authenticate()
.then(()=>{
  console.log("db is connected");
})
.catch((error)=>{
  console.log(error);
})

// export your Model Phrase below
module.exports = connection;
