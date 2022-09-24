const path = require("path");

require("dotenv").config();

const { DATABASE_URL } = 'postgres://rpvbkmvw:XOcyIVRZEa9WBlDO79m1R1hAv76mZHdw@kesavan.db.elephantsql.com/rpvbkmvw';

module.exports = {
  development: {
    client: "postgresql",
    connection: 'postgres://rpvbkmvw:XOcyIVRZEa9WBlDO79m1R1hAv76mZHdw@kesavan.db.elephantsql.com/rpvbkmvw',
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: 'postgres://rpvbkmvw:XOcyIVRZEa9WBlDO79m1R1hAv76mZHdw@kesavan.db.elephantsql.com/rpvbkmvw',
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
