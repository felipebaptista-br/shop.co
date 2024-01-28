import sql from '../database/db/db.mjs';

const readAllComments = async () => {
    const result = await sql`select * from comments`;
    return result;
}

const readComment = async (id_comment) => {
    const result = await sql`select * from comments where id_comment = ${id_comment}`;
    return result;
}

const createComment = async (comment) => {
    const result = await sql`insert into comments (id_product, comment, classification) values (${comment.id_product}, ${comment.comment}, ${comment.classification})`;
    return result;
}

const updateComment = async (id_comment, comment) => {
    const result = await sql`update comments set comment = ${comment.comment}, classification = ${comment.classification} where id_comment = ${id_comment}`;
    return result;
}

const deleteComment = async (id_comment) => {
    const result = await sql`delete from comments where id_comment = ${id_comment}`;
    return result;
}

export default {
    readAllComments,
    readComment,
    createComment,
    updateComment,
    deleteComment
}