'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAllProducts } from '@/api/products-endpoints';
import { getAllCategories } from '@/api/categories-endpoints';
import { CardProduct, Container } from '@/components';
import Image from 'next/image';
import ProductProps from '@/interfaces/product';
import CategoryProps from '@/interfaces/category';
import IconFilter from '@/assets/icons/filter.svg';
import IconArrowRight from '@/assets/icons/arrow-right.svg';

import './style.css';

function Root() {
    const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
    const [allCategories, setAllCategories] = useState<CategoryProps[]>([]);
    const [selectedFilter, setSelectedFilter] = useState<CategoryProps['name']>('');

    useEffect(() => {
        const getProducts = async () => {
            const response = await getAllProducts();
            setAllProducts(response);
        }

        const getCategories = async () => {
            const response = await getAllCategories();
            setAllCategories(response);
        }

        getProducts();
        getCategories();
    }, [])

    const handleFilterClick = (filter: CategoryProps['name']) => {
        setSelectedFilter(filter);
    };

    return (
        <div className='store'>
            <Container.Root className='store-container'>
                <Filters categories={allCategories} onFilterClick={handleFilterClick} />
                <GridItems categories={allCategories} products={allProducts} selectedFilter={selectedFilter} />
            </Container.Root>
        </div>
    )
}

function Filters({ categories, onFilterClick }: { categories: CategoryProps[], onFilterClick: (filter: CategoryProps['name']) => void }) {
    if (categories.length === 0) { return <div className='store-filters-skeleton' /> }

    return (
        <div className='store-filters'>
            <div className='store-filters-panel'>
                <h3>Filters</h3>
                <Image src={IconFilter} alt='Icon Filter' width={20} height={20} />
            </div>
            <div className='store-filters-items'>
                <span className='store-filters-item' onClick={() => onFilterClick('')}>
                    <p>Todos</p>
                    <Image src={IconArrowRight} alt='Icon Arrow Right' width={10} height={10} />
                </span>
                {categories.map((filter) => (
                    <span className='store-filters-item' key={filter.name} onClick={() => onFilterClick(filter.name)}>
                        <p>{filter.name}</p>
                        <Image src={IconArrowRight} alt='Icon Arrow Right' width={10} height={10} />
                    </span>
                ))}
            </div>
        </div>
    )
}

function GridItems({ products, selectedFilter, categories }: { products: ProductProps[], selectedFilter?: CategoryProps['name'], categories: CategoryProps[], }) {
    if (products.length === 0) {
        return (
            <div className='store-grid'>
                <div className='grid-items'>
                    {Array.from({ length: 6 }, (_, index) => (
                        <CardProduct.Skeleton key={index} />
                    ),)}
                </div>
            </div>
        )
    }

    const router = useRouter();
    const filteredProducts = selectedFilter
        ? products.filter(product => product.id_category === categories.find(category => category.name === selectedFilter)?.id_category)
        : products;

    return (
        <div className='store-grid'>
            <h1>{selectedFilter ? selectedFilter : 'Todos os Produtos'}</h1>
            <div className='grid-items'>
                {filteredProducts.map((product: ProductProps) => (
                    <CardProduct.Root onClick={() => router.push(`/product/${product.id_product}`)} key={product.id_product}>
                        <CardProduct.Img img={product.image} />
                        <CardProduct.Name name={product.name} />
                        <CardProduct.Classification />
                        <CardProduct.Price price={product.price} />
                    </CardProduct.Root>
                ))}
            </div>
        </div>
    )
}

export {
    Root
}