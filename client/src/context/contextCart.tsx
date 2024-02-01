'use client'

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getCartFromLocalStorage, setCartToLocalStorage } from '@/utils/storage/utilsLocalStorage';
import ProductProps from '@/interfaces/product';

interface CartContextProps {
    cartItems: ProductProps[];
    addToCart: (item: ProductProps) => void;
    removeFromCart: (productId: number) => void;
    viewCart: () => ProductProps[];
    clearCart: () => void;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<ProductProps[]>(getCartFromLocalStorage);

    useEffect(() => {
        setCartToLocalStorage(cartItems);
        window.dispatchEvent(new Event('cartUpdated'));
    }, [cartItems]);

    const viewCart = () => {
        return [...cartItems];
    };

    const addToCart = (item: ProductProps) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeFromCart = (productId: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id_product !== productId));
    };
    

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, viewCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
