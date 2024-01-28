import productController from '../controllers/productController.mjs';

/**
 * Defines routes for product-related operations.
 *
 * @param {object} fastify - The Fastify instance
 * @param {object} _options - The options object
 * @return {Promise<void>} A promise that resolves when the routes are defined
 */
async function productRoutes(fastify, _options) {
    fastify.get('/products', async function handler(_request, reply) {
        return reply.send(await productController.readAllProducts())
    });

    fastify.get('/product/:id', async function handler(request, reply) {
        return reply.send(await productController.readProduct(request.params.id))
    });

    fastify.post('/product', async function handler(request, reply) {
        const { name, description, price, image, stock, id_brand, id_category } = request.body
        return reply.status(201).send(await productController.createProduct({ name, description, price, image, stock, id_brand, id_category }))
    });

    fastify.put('/product/:id', async function handler(request, reply) {
        return reply.send(await productController.updateProduct(request.params.id, request.body))
    });

    fastify.delete('/product/:id', async function handler(request, reply) {
        return reply.send(await productController.deleteProduct(request.params.id))
    });
};

export default productRoutes;