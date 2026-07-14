const app = require("./app");

// start the express server
app
    .listen(3001, 'localhost', () => {
        console.log("Server is listening on port 3001");
    })
    .on('error', (err) => {
        console.error("Error starting server:", err);
    })