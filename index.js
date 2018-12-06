const { server } = require('./server.js');

server.listen(3300, () => {
  console.log(`\n=== Server listening on port 3300\n`);
});
