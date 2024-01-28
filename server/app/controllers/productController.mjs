import sql from "../database/db/db.mjs";

const readAllProducts = async () => {
    const result = await sql`select * from products`;
    return result;
}

const readProduct = async (id_product) => {
    const result = await sql`select * from products where id_product = ${id_product}`;
    return result;
}

const createProduct = async (product) => {
    const result = await sql`
        INSERT INTO products (name, description, price, image, stock, id_brand, id_category)
        VALUES (${product.name}, ${product.description}, ${product.price}, ${product.image}, ${product.stock}, ${product.id_brand}, ${product.id_category})
    `;
    return result;
}

const updateProduct = async (id_product, product) => {
    const result = await sql`update products set product = ${product} where id_product = ${id_product}`;
    return result
}

const deleteProduct = async (id_product) => {
    const result = await sql`delete from products where id_product = ${id_product}`;
    return result
}

export default {
    readAllProducts,
    readProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
