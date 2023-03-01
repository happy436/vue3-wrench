const http = require("http");

const request = require("./scripts/request");

const PORT = 3000;
const HOST = "localhost";

const server = http.createServer(request.listener);

request
    .init()
    .then(() => {
        server.listen(PORT, HOST, () => {
            console.log(`Server is running on http://${HOST}:${PORT}`);
        });
    })
    .catch((error) => {
        console.error(`Error starting server: ${error}`);
        process.exit(1);
    });
