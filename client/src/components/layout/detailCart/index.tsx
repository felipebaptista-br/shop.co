'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/contextCart';
import {
    Alert,
    Button,
    Container,
    ListProduct
} from '@/components';
import ProductProps from '@/interfaces/product';
import Image from 'next/image';
import IconCheck from '@/assets/icons/check.svg';
import IconArrowRight from '@/assets/icons/arrow-right-white.svg';

import './style.css';

function Root() {
    return (
        <div className='cart'>
            <Container.Root className='cart-container'>
                <ListProducts />
                <OrderSummary />
            </Container.Root>
        </div>
    )
}

function ListProducts() {
    const { viewCart, removeFromCart } = useCart();
    const [cart, setCart] = useState<ProductProps[]>([]);
    const router = useRouter()


    useEffect(() => {
        return () => {
            const cartContent = viewCart();
            setCart(cartContent);
        };
    }, [viewCart]);

    const handleRemoveFromCart = (productId: number) => {
        removeFromCart(productId);
        const cartContent = viewCart();
        setCart(cartContent);
    };

    if (cart.length === 0) {
        return <div className='empty-cart'>
            <p>Your cart is empty</p>
            <Button.Root onClick={() => router.push('/showcase')} variant='white' sizeBtn='medium'>View Products</Button.Root>
        </div>
    };

    return (
        <div className='cart-products'>
            <h1>Your Cart</h1>
            <div className='cart-list-products'>
                {cart.map((product: ProductProps) => (
                    <ListProduct.Root key={product.id_product}>
                        <ListProduct.Img img={product.image} />
                        <ListProduct.ContentContainer>
                            <ListProduct.Name name={product.name} />
                            <ListProduct.Description description={product.description} />
                            <ListProduct.Price price={product.price} />
                            <Button.Root
                                onClick={() => {
                                    handleRemoveFromCart(product.id_product);
                                }}
                                variant='white'
                                sizeBtn='small'>REMOVER</Button.Root>
                        </ListProduct.ContentContainer>
                    </ListProduct.Root>
                ))}
            </div>
        </div>
    )
}

function OrderSummary() {
    const { clearCart } = useCart();
    const router = useRouter();
    const [finishPush, setFinishPush] = useState<boolean>(false);

    const handleFinishPush = () => {
        setFinishPush(true);
        clearCart();
        setTimeout(() => {
            router.push('/')
        }, 1500);
    }

    return (
        <div className='order-summary'>
            {finishPush &&
                <Alert.Root type='success'>
                    <Alert.Description description='Compra realizada! Acompanhe seu pedido por E-mail' />
                    <Alert.Icon><Image src={IconCheck} alt='Icon Check' /></Alert.Icon>
                </Alert.Root>
            }
            <h3>Order Summary</h3>
            <div className='order-summary-items'>
                <span className='order-summary-item'>
                    <p className='order-summary-item-title'>Subtotal</p>
                    <p>R$ 565</p>
                </span>
                <span className='order-summary-item'>
                    <p className='order-summary-item-title'>Discount (%)</p>
                    <p>R$ -113</p>
                </span>
                <span className='order-summary-item'>
                    <p className='order-summary-item-title'>Delivery Fee</p>
                    <p>R$ 15</p>
                </span>
            </div>
            <div className='order-summary-finish'>
                <span className='order-summary-total'>
                    <p className='order-summary-total-title'>Total</p>
                    <p>R$ 452</p>
                </span>
                <Button.Root onClick={() => handleFinishPush()} className='order-summary-button' variant='black' sizeBtn='medium'>Finalize Purchase <Image src={IconArrowRight} alt='Icon Arrow Right' width={20} height={20} /></Button.Root>
            </div>
        </div>
    )
}

export {
    Root
}