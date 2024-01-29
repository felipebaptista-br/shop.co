import api from './api';

interface ProductProps {
    id: number;
}

const getAllProducts = async () => {
    try {
        const response = await api.get('/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Failed to fetch products');
    }
};

const getProductById = async ({ id }: ProductProps) => {
    try {
        const response = await api.get(`/product/${id}`);
        return response.data
    } catch (error) {
        console.error('Error fetching product:', error);
        throw new Error('Failed to fetch product');
    }
}

export {
    getAllProducts,
    getProductById 
}
