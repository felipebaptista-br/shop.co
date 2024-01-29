'use client'

import { Button, Container } from "@/components";
import { useRouter } from "next/navigation";

import './style.css';

function Root() {
    const router = useRouter()

    return (
        <div className='background'>
            <Container.Root>
                <div className='background-container'>
                    <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <Button.Root onClick={() => router.push('/showcase')} className='background-button' variant='black' sizeBtn='medium'>Shop Now</Button.Root>
                    <div className='background-statistics'>
                        <section className='background-statistics-item'>
                            <h3>200+</h3>
                            <p>International Brands</p>
                        </section>
                        <section className='background-statistics-item background-statistics-line'>
                            <h3>2,000+</h3>
                            <p>High-Quality Products</p>
                        </section>
                        <section className='background-statistics-item'>
                            <h3>30,000+</h3>
                            <p>Happy Customers</p>
                        </section>
                    </div>
                </div>
            </Container.Root>
        </div>
    )
}

export {
    Root
}