import brandController from '../controllers/brandController.mjs'

/**
 * Defines routes for CRUD operations on brands.
 *
 * @param {object} fastify - The fastify instance
 * @param {object} _options - Options for the route
 * @return {Promise} The result of the route handling
 */
async function brandRoutes(fastify, _options) {
    fastify.get('/brands', async function handler(_request, reply) {
        return reply.send(await brandController.readAllBrands())
    })

    fastify.get('/brand/:id', async function handler(request, reply) {
        return reply.send(await brandController.readBrand(request.params.id))
    })

    fastify.post('/brand', async function handler(request, reply) {
        const { name, description } = request.body
        return reply.status(201).send(await brandController.createBrand({ name, description }))
    })

    fastify.put('/brand/:id', async function handler(request, reply) {
        return reply.send(await brandController.updateBrand(request.params.id, request.body))
    })

    fastify.delete('/brand/:id', async function handler(request, reply) {
        return reply.send(await brandController.deleteBrand(request.params.id))
    })
}

export default brandRoutes;