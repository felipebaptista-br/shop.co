import sql from '../database/db/db.mjs';

const readAllColors = async () => {
    try {
        const colors = await sql`SELECT * FROM colors`;
        return colors;
    } catch (error) {
        console.error('Error getting colors:', error);
        throw error;
    }
}

const readColor = async (id_color) => {
    try {
        const color = await sql`SELECT * FROM colors WHERE id_color = ${id_color}`;
        return color;
    } catch (error) {
        console.error('Error getting colors:', error);
        throw error;
    }
}

const createColor = async (color) => {
    try {
        const result = await sql`INSERT INTO colors (name, code) VALUES (${color.name}, ${color.code})`;
        return result;
    } catch (error) {
        console.error('Error creating color:', error);
        throw error;
    }
}

const updateColor = async (id_color, color) => {
    try {
        const result = await sql`UPDATE colors SET name = ${color.name}, code = ${color.code} WHERE id_color = ${id_color}`;
        return result;
    } catch (error) {
        console.error('Error updating color:', error);
        throw error;
    }
}

const deleteColor = async (id_color) => {
    try {
        const result = await sql`DELETE FROM colors WHERE id_color = ${id_color}`;
        return result;
    } catch (error) {
        console.error('Error deleting color:', error);
        throw error;
    }
}

export default {
    readAllColors,
    readColor,
    createColor,
    updateColor,
    deleteColor
}