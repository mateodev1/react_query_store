const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3100;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
  }).on('error', (err) => {
    console.error('Server error:', err);
  });