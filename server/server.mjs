import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import marked from 'marked';
import colorRoutes from './app/routes/colorRoutes.mjs';
import brandRoutes from './app/routes/brandRoutes.mjs';
import categoryRoutes from './app/routes/categoryRoutes.mjs';
import commentRoutes from './app/routes/commentRoutes.mjs';
import productRoutes from './app/routes/productRouters.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const fastify = Fastify({
    logger: true
});

fastify.register(fastifyCors, {
    origin: '*',
    methods: 'GET,POST,PUT,PATCH,DELETE',
    credentials: true,
});

fastify.get('/', async function handler(_request, reply) {
    const readmePath = path.join(__dirname, 'README.md');

    try {
        const readmeContent = await fs.promises.readFile(readmePath, 'utf-8');
        const htmlContent = marked(readmeContent);
        const styledHtmlContent = `
            <html>
                <head>
                    <style>
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                        body {                            
                            padding: 50px;
                            text-align: justify;
                            background-color: #9F9F9F;
                            font-family: 'Poppins', sans-serif;
                        }

                        div {
                            width: 50%;
                            margin: auto;
                            padding: 50px;
                            border: 5px solid #02005F;
                            border-radius: 20px;
                            background-color: #ECECEC;
                        }

                        h1 {
                            color: #fff;
                            background-color: #02005F;
                            padding: 15px;
                            border-radius: 15px;
                        }

                        h2, h3 {
                            color: #333;
                        }
                        
                        h2 {
                            background-color: #DEDEDE;
                            color: #02005F;
                            padding: 15px;
                            border-radius: 15px;
                        }
                        
                        a {
                            text-decoration: none;
                            color: #0300A7;
                        }
                    </style>
                </head>
                <body>
                    <div>
                        ${htmlContent}
                    </div>
                </body>
            </html>
        `;
        reply.header('Content-Type', 'text/html; charset=utf-8').send(styledHtmlContent);
    } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
    }
});

fastify.register(colorRoutes);
fastify.register(brandRoutes);
fastify.register(categoryRoutes);
fastify.register(commentRoutes);
fastify.register(productRoutes);

try {
    await fastify.listen({ port: 5000, host: '0.0.0.0' });
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}