import sql from '../database/db/db.mjs';

const readAllBrands = async () => {
    const result = await sql`select * from brands`;
    return result;
}

const readBrand = async (id_brand) => {
    const result = await sql`select * from brands where id_brand = ${id_brand}`;
    return result;
}

const createBrand = async (brand) => {
    const result = await sql`insert into brands (name, description) values (${brand.name}, ${brand.description})`;
    return result;
}

const updateBrand = async (id_brand, brand) => {
    const result = await sql`update brands set name = ${brand.name}, description = ${brand.description} where id_brand = ${id_brand}`;
    return result;
}

const deleteBrand = async (id_brand) => {
    const result = await sql`delete from brands where id_brand = ${id_brand}`;
    return result;
}

export default {
    readAllBrands,
    readBrand,
    createBrand,
    updateBrand,
    deleteBrand
}