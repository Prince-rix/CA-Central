require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: 'root',
    database: 'CA_youth',
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: process.env.db_User_Name,
    password: process.env.db_password,
    database: process.env.db_name,
    host: process.env.db_host_name,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
