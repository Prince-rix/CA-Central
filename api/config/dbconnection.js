require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,   // RDS host
    port: process.env.DB_PORT,   // 5432
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
