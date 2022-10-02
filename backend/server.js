const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling uncought exception
process.on("uncounghtError", err => {
    console.log(`Error: ${err.message}`);
    console.log("shutting Down the Server due to uncought Exception");
    process.exit(1);
})

//config
dotenv.config({path: "backend/config/config.env"});

// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is Working ! http://localhost:${process.env.PORT}`);
})

//unhandled proimise Rejection (try crash server :P , change name etc)
process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`);
    console.log("shutting Down the Server due to unhandled Promise Rejection")

    server.close(() => {
        process.exit(1);
    });
});