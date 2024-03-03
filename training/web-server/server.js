const { createServer } = require("http")

const PORT = '8080'

const requestListener = (req, res) => {
    switch (req.url) {
        case '/json': {
            if (req.method === 'GET') {
                res.setHeader('Content-type', 'application/json');
                res.writeHead(200);
                res.end(JSON.stringify({
                    schoolName: 'John Brice'
                }));
                break;
            }

            if (req.method === 'POST') {
                console.log("saving json...");
                res.writeHead(201);
                res.end();
                break;
            }
        }
        default: {
            res.writeHead(405);
            res.end("Invalid uri");
        }
    }

}

const server = createServer(requestListener)

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})