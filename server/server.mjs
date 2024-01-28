import Fastify from 'fastify'
import colorRoutes from './app/routes/colorRoutes.mjs'
import brandRoutes from './app/routes/brandRoutes.mjs'
import categoryRoutes from './app/routes/categoryRoutes.mjs'
import commentRoutes from './app/routes/commentRoutes.mjs'
import productRoutes from './app/routes/productRouters.mjs'

const startWelcomeMessage = {
    welcome: 'API SHOP.CO with Node.js',
    message: 'Im excited to share with you a significant update to my online portfolio. Recently, I implemented a new server using Node.js with the Fastify framework to provide an even more efficient and dynamic experience.',
    details: {
        Technology: 'Node.js with Fastify',
        Objective: 'Enhance the performance and usability of my portfolio, ensuring fast navigation and effective presentation of my projects and skills.',
        dotenv: [
            'PGHOST',
            'PGDATABASE',
            'PGUSER',
            'PGPASSWORD',
            'ENDPOINT_ID'
        ],
        services: {
            deploy: '',
            documentation: '',
            github: 'https://github.com/felipebaptista-br/shop.co',
            version: '0.1.0',
            database: 'postgres - neon.tech: https://neon.tech/',
        },
        dependences: [
            'fastify',
            'dotenv',
            'postgres'
        ]
    }
}

export const fastify = Fastify({
    logger: true
})

fastify.get('/', async function handler(_request, _reply) { return startWelcomeMessage })
fastify.register(colorRoutes)
fastify.register(brandRoutes)
fastify.register(categoryRoutes)
fastify.register(commentRoutes)
fastify.register(productRoutes)

try {
    await fastify.listen({ port: 5000, host: '0.0.0.0' })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}