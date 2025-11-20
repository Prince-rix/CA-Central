require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.db_name,          // Database name
  process.env.db_User_Name,     // DB username
  process.env.db_password,      // DB password
  {
    host: process.env.db_host_name,  // RDS endpoint
    port: process.env.db_port,       // 5432
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,            // Enforce SSL connection
        rejectUnauthorized: false // Needed for RDS self-signed certificates
      }
    }
  }
);

const connectionDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ DB connected successfully");
  } catch (err) {
    console.error("❌ DB connection error:", err);
  }
};

module.exports = { sequelize, connectionDb };
