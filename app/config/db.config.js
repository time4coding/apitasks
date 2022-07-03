module.exports = {
    HOST: "dpg-capo44v6d9kiqtaa2920-a.oregon-postgres.render.com",
    USER: "admin",
    PASSWORD: "postgres",
    DB: "tasks_lmgp",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };