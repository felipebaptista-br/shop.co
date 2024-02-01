import ProductProps from "@/interfaces/product";

export const getCartFromLocalStorage = (): ProductProps[] => {
    try {
        const cartData = localStorage.getItem('cart');
        return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
        console.error('Error retrieving cart from localStorage:', error);
        return [];
    }
};

export const setCartToLocalStorage = (cartItems: ProductProps[]): void => {
    try {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
        console.error('Error storing cart in localStorage:', error);
    }
};
