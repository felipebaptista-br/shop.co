import api from './api';
import CommentProps from '@/interfaces/comment';

const getAllComments = async () => {
    try {
        const response = await api.get('/comments');
        return response.data;
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw new Error('Failed to fetch comments');
    }
}

const getCommentById = async ({ id_comment }: CommentProps) => {
    try {
        const response = await api.get(`/comment/${id_comment}`);
        return response.data
    } catch (error) {
        console.error('Error fetching comment:', error);
        throw new Error('Failed to fetch comment');
    }
}

export {
    getAllComments,
    getCommentById
}
