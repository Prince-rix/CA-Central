require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.db_name,
  process.env.db_User_Name,
  process.env.db_password,
  {
    host: process.env.db_host_name,   // RDS host
    port: process.env.db_port,   // 5432
    dialect: "postgres",
    logging: false,
  }
);

const connectionDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected");
  } catch (err) {
    console.error("DB connection error:", err);
  }
};

module.exports = { sequelize, connectionDb };
