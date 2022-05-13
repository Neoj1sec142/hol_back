require('dotenv').config()
module.exports = {
  development: {
    database: "holicity_database_development",
    dialect: "postgres"
  },
  test: {
    database: "holicity_database_test",
    dialect: "postgres"
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    database: "holicity_database_production",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
