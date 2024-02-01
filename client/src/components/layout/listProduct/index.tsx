import ProductProps from '@/interfaces/product'

import './style.css';
import { generateArrayByQuantity } from '@/utils/helpers/orderArray';

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

function Root({ children, ...props }: RootProps) {
    return <div {...props} className='list-products'>{children}</div>
}

interface ContentContainerProps {
    children: React.ReactNode
}

function ContentContainer({ children }: ContentContainerProps) {
    return <div className='list-products-container'>{children}</div>
}

interface ImgProps {
    img: ProductProps['image']
}

function Img({ img }: ImgProps) {
    return <img className='list-product-img' src={img} alt='Product Image' />
}

interface NameProps {
    name: ProductProps['name']
}

function Name({ name }: NameProps) {
    return <h3 className='list-product-name'>{name}</h3>
}

interface DescriptionProps {
    description: ProductProps['description'] | string;
}

function Description({ description }: DescriptionProps) {
    return <p className='list-product-description'>{generateArrayByQuantity(description, 150)}</p>
}

interface PriceProps {
    price: ProductProps['price']
}

function Price({ price }: PriceProps) {
    return <p className='list-product-price'>R$ {price}</p>
}

function Skeleton() {
    return <div className='list-product-skeleton' />
}

export {
    Root,
    ContentContainer,
    Img,
    Name,
    Description,
    Price,
    Skeleton
}