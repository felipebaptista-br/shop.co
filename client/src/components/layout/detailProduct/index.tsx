'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUrlSlug } from '@/utils/helpers/browserParamsHandler';
import { getProductById } from '@/api/products-endpoints';
import { useCart } from '@/context/contextCart';
import { getAllColors } from '@/api/colors-endpoints';
import { Alert, Button, Container } from '@/components';
import ProductProps from '@/interfaces/product';
import ColorProps from '@/interfaces/color';
import IconStar from '@/assets/icons/star.svg';
import Image from 'next/image';
import IconCheck from '@/assets/icons/check.svg';

import './style.css'

function Root() {
    const router = useRouter()
    const { addToCart } = useCart();
    const [product, setProduct] = useState<ProductProps>();
    const [colors, setColors] = useState<ColorProps[]>([]);
    const [selectedProduct, setSelectedProducts] = useState<boolean>(false);

    useEffect(() => {
        const productId = getUrlSlug();

        if (productId !== '') {
            const getProduct = async () => {
                try {
                    const response = await getProductById({ id_product: productId });
                    setProduct(response[0]);
                } catch (error) {
                    console.log(error);
                }
            };

            const getColors = async () => {
                try {
                    const response = await getAllColors();
                    setColors(response);
                } catch (error) {
                    console.log(error);
                }
            }

            getProduct();
            getColors();
        }
    }, [getUrlSlug()]);

    if (!product) {
        return (
            <div className='detail-product'>
                <Container.Root>
                    <div className='detail-product-skeleton'>
                        <div className='detail-product-skeleton-img' />
                        <div className='detail-product-skeleton-content' />
                    </div>
                </Container.Root>
            </div>
        )
    }

    const handleSelectedProduct = () => {
        setSelectedProducts(true);
        addToCart(product)
        setTimeout(() => {
            router.push('/showcase');
        }, 1500);
    }

    return (
        <div className='detail-product'>
            {selectedProduct &&
                <Alert.Root type='success'>
                    <Alert.Description description='Product added to cart' />
                    <Alert.Icon><Image src={IconCheck} alt='Icon Check' width={30} height={30} /></Alert.Icon>
                </Alert.Root>
            }
            <Container.Root>
                <div className='detail-product-container'>
                    <img className='detail-product-img' src={product.image} alt={product.name} />
                    <div className='detail-product-content'>
                        <h1>{product.name}</h1>
                        <div className='detail-product-stars'>
                            {Array.from({ length: 5 }, (_, index) => (
                                <Image key={index} className='detail-product-star' src={IconStar} alt='Star' />
                            ))}
                        </div>
                        <p className='detail-product-price'>R$ {product.price}</p>
                        <p className='detail-product-description'>{product.description}</p>
                        <div className='details-product-colors-container'>
                            <p>The colors that our store works with.</p>
                            <div className='details-product-colors'>
                                {colors.map((color: ColorProps) => (
                                    <div
                                        key={color.id_color}
                                        className='details-color'
                                        style={{ backgroundColor: `${color.code}` }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='details-product-options'>
                            <Button.Root onClick={() => handleSelectedProduct()} className='detail-product-button' sizeBtn='medium' variant='black'>
                                Add to Cart
                            </Button.Root>
                        </div>
                    </div>
                </div>
            </Container.Root>
        </div>
    )
}

export {
    Root
}