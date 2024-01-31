import api from './api';
import ProductProps from '@/interfaces/product';

const getAllProducts = async () => {
    try {
        const response = await api.get('/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Failed to fetch products');
    }
};

interface ProductsIdProps {
    id_product: string
}

const getProductById = async ({ id_product }: ProductsIdProps) => {
    try {
        const response = await api.get(`/product/${id_product}`);
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
