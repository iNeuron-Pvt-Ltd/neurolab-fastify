const fastify = require('fastify')({
    logger: true
})
const PORT = process.env.OPEN_PORT || 4000
// Declare a route
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ port: PORT }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})