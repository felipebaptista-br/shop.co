'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAllProducts } from '@/api/products-endpoints';
import { Button, Container } from '@/components';
import Image from 'next/image';
import IconStar from '@/assets/icons/star.svg';

import './style.css'

function Root() {
    const router = useRouter()
    const [newProducts, setNewProducts] = useState()

    useEffect(() => {
        const getNewProducts = async () => {
            const response = await getAllProducts()
            setNewProducts(response);
            console.log(response);
        }

        getNewProducts()
    }, [])

    return (
        <div className='news'>
            <Container.Root className='news-container'>
                <h1>NEW ARRIVALS</h1>
                <div className='news-grid'>
                    <div className='news-grid-item'>
                        <img src="https://i.ibb.co/2hMTng3/ONE-LIFE-GRAPHIC-T-SHIRT.png" alt="ONE-LIFE-GRAPHIC-T-SHIRT" />
                        <div className='news-grid-item-content'>
                            <h3>One Life Graphic T-shirt</h3>
                            <div className='news-grid-item-stars'>
                                <Image src={IconStar} alt='Icon Star' />
                                <Image src={IconStar} alt='Icon Star' />
                                <Image src={IconStar} alt='Icon Star' />
                                <Image src={IconStar} alt='Icon Star' />
                                <Image src={IconStar} alt='Icon Star' />
                            </div>
                            <p>$50</p>
                        </div>
                    </div>
                </div>
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

export {
    Root
}