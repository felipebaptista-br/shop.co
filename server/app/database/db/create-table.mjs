import sql from './db.mjs'

async function createTables() {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS colors (
                id_color SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                code VARCHAR(7) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        await sql`
            CREATE TABLE IF NOT EXISTS categories (
                id_category SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        await sql`
            CREATE TABLE IF NOT EXISTS brands (
                id_brand SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        await sql`
            CREATE TABLE IF NOT EXISTS products (
                id_product SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                price NUMERIC(10, 2) NOT NULL,
                stock INT NOT NULL,
                description TEXT,
                image VARCHAR(255),
                id_category INT REFERENCES categories(id_category),
                id_brand INT REFERENCES brands(id_brand),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        await sql`
            CREATE TABLE IF NOT EXISTS comments (
                id_comment SERIAL PRIMARY KEY,
                id_product INT REFERENCES products(id_product),
                comment TEXT,
                classification INT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        console.log('created tables successfully');
    } catch (error) {
        console.error('Erro ao criar tabelas:', error);
    } finally {
        await sql.end();
    }
}

createTables();
