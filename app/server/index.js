const fastify = require('fastify')();

fastify.get('/', (req, reply) => {
  console.log('process pid =>', process.pid);
  reply.send('Hello World');
});

fastify.listen(80, err => {
  if (err) throw err;
  console.log('Server listening on port ' + 80);
});
