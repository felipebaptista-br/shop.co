import colorController from '../controllers/colorController.mjs'

/**
 * Define routes for handling color-related endpoints.
 *
 * @param {Object} fastify - The fastify instance
 * @param {Object} _options - Options object
 * @return {Promise} The result of registering the color routes
 */
async function colorRoutes(fastify, _options) {
    fastify.get('/colors', async function handler(_request, reply) {
        return reply.send(await colorController.readAllColors())
    })

    fastify.get('/color/:id', async function handler(request, reply) {
        return reply.send(await colorController.readColor(request.params.id))
    })

    fastify.post('/color', async function handler(request, reply) {
        const { name, code } = request.body
        return reply.status(201).send(await colorController.createColor({ name, code }))
    })

    fastify.put('/color/:id', async function handler(request, reply) {
        return reply.send(await colorController.updateColor(request.params.id, request.body))
    })

    fastify.delete('/color/:id', async function handler(request, reply) {
        console.log(request.params.id);
        return reply.send(await colorController.deleteColor(request.params.id))
    })
}

export default colorRoutes;