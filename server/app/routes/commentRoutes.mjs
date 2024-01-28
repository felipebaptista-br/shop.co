import commentController from '../controllers/commentController.mjs';

/**
 * Defines routes for handling comments.
 *
 * @param {object} fastify - The fastify instance
 * @param {object} _options - The options object
 * @return {Promise<void>} The async function does not return anything
 */
async function commentRoutes(fastify, _options) {
    fastify.get('/comments', async function handler(_request, reply) {
        return reply.send(await commentController.readAllComments());
    });

    fastify.get('/comment/:id', async function handler(request, reply) {
        return reply.send(await commentController.readComment(request.params.id));
    });

    fastify.post('/comment', async function handler(request, reply) {
        const { id_product, comment, classification } = request.body;
        return reply.status(201).send(await commentController.createComment({ id_product, comment, classification }));
    });

    fastify.put('/comment/:id', async function handler(request, reply) {
        return reply.send(await commentController.updateComment(request.params.id, request.body));
    });

    fastify.delete('/comment/:id', async function handler(request, reply) {
        return reply.send(await commentController.deleteComment(request.params.id));
    });
};

export default commentRoutes;