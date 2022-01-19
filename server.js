const http = require('http');
const app = require("./app");


const PORT = process.env.PORT || 3000;

const server = http.createServer(app); //passing in Express to make it advance

server.listen(PORT, console.log(`Server is running on port ${PORT}`))
