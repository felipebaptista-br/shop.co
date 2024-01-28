import categoryController from '../controllers/categoryController.mjs'

/**
 * Defines routes for CRUD operations on categories.
 *
 * @param {Object} fastify - The fastify instance
 * @param {Object} _options - The options object
 * @return {Promise} The result of the route handling
 */
async function categoryRoutes(fastify, _options) {
    fastify.get('/categories', async function handler(_request, reply) {
        return reply.send(await categoryController.readAllCategories())
    })

    fastify.get('/category/:id', async function handler(request, reply) {
        return reply.send(await categoryController.readCategory(request.params.id))
    })

    fastify.post('/category', async function handler(request, reply) {
        const { name, description } = request.body
        return reply.status(201).send(await categoryController.createCategory({ name, description }))
    })

    fastify.put('/category/:id', async function handler(request, reply) {
        return reply.send(await categoryController.updateCategory(request.params.id, request.body))
    })

    fastify.delete('/category/:id', async function handler(request, reply) {
        return reply.send(await categoryController.deleteCategory(request.params.id))
    })
}

export default categoryRoutes