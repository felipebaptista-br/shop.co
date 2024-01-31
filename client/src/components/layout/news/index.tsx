'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { generateArrayByQuantity, sortArrayByCreationDate } from '@/utils/helpers/orderArray';
import { getAllProducts } from '@/api/products-endpoints';
import ProductProps from '@/interfaces/product';
import {
    Button,
    CardProduct,
    Container
} from '@/components';

import './style.css'

function Root() {
    const router = useRouter();
    const [newProducts, setNewProducts] = useState<ProductProps[]>([]);

    useEffect(() => {
        const getNewProducts = async () => {
            const response = await getAllProducts();
            const sortedProducts = sortArrayByCreationDate<ProductProps>(response);
            setNewProducts(generateArrayByQuantity<ProductProps>(sortedProducts, 4));
        };

        getNewProducts();
    }, [])


    return (
        <div className='news'>
            <Container.Root className='news-container'>
                <h1>NEW ARRIVALS</h1>
                <GridItems newProducts={newProducts} />
                <Button.Root
                    onClick={() => router.push('/showcase')}
                    className='news-btn'
                    variant='white'
                    sizeBtn='medium'
                >
                    View All
                </Button.Root>
            </Container.Root>
        </div>
    )
}

function GridItems({ newProducts }: { newProducts: ProductProps[] }) {
    const router = useRouter();

    if (newProducts.length === 0) {
        return (
            <div className='news-grid'>
                {Array.from({ length: 4 }, (_, index) => (
                    <CardProduct.Skeleton key={index} />
                ),)}
            </div>
        )
    }

    return (
        <div className='news-grid'>
            {newProducts.map((product: ProductProps) => (
                <CardProduct.Root onClick={() => router.push(`/product/${product.id_product}`)} key={product.id_product}>
                    <CardProduct.Img img={product.image} />
                    <CardProduct.Name name={product.name} />
                    <CardProduct.Classification />
                    <CardProduct.Price price={product.price} />
                </CardProduct.Root>
            ))}
        </div>
    )
}

export {
    Root,
}