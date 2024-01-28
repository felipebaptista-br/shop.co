import sql from '../database/db/db.mjs';

const readAllCategories = async () => {
    try {
        const categories = await sql`SELECT * FROM categories`;
        return categories;
    } catch (error) {
        console.error('Error getting categories:', error);
        throw error;
    }
}

const readCategory = async (id_category) => {
    try {
        const category = await sql`SELECT * FROM categories WHERE id_category = ${id_category}`;
        return category;
    } catch (error) {
        console.error('Error getting categories:', error);
        throw error;
    }
}

const createCategory = async (category) => {
    try {
        const result = await sql`INSERT INTO categories (name, description) VALUES (${category.name}, ${category.description})`;
        return result;
    } catch (error) {
        console.error('Error creating category:', error);
        throw error;
    }
}

const updateCategory = async (id_category, category) => {
    try {
        const result = await sql`UPDATE categories SET name = ${category.name}, description = ${category.description} WHERE id_category = ${id_category}`;
        return result;
    } catch (error) {
        console.error('Error updating category:', error);
        throw error;
    }
}

const deleteCategory = async (id_category) => {
    try {
        const result = await sql`DELETE FROM categories WHERE id_category = ${id_category}`;
        return result;
    } catch (error) {
        console.error('Error deleting category:', error);
        throw error;
    }
}

export default {
    readAllCategories,
    readCategory,
    createCategory,
    updateCategory,
    deleteCategory,
}