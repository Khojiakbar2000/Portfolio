const http = require("http")
const mongodb = require("mongodb")
const express = require ("express");

const app = express();

let db;
const connectionString = "mongodb+srv://John:nyEqdng3t7co7Q6X@cluster0.smk9w.mongodb.net/Reja"

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true,
}, (err, client) => {
    if(err)console.log("ERROR on connection MongoDB")
        else {
    console.log("MongoDB connection succeed")
    module.exports = client;



const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`)
});
        }
    }
);