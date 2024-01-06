const data = require('./db.js');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

const port = process.env.PORT || 3000;

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running');
})
