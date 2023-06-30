module.exports = {
    HOST: "localhost",
    PORT: "1434",
    USER: "topzson",
    PASSWORD: "123456",
    DB: "node_crud_db",
    dialect: "mssql",
    pool:{
        max:5,
        min:0,
        acquire:3000,
        idle:10000
    }
};