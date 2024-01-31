import ProductProps from '@/interfaces/product'
import Image from 'next/image';
import IconStar from '@/assets/icons/star.svg';

import './style.css';

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

function Root({ children, ...props }: RootProps) {
    return <div {...props} className='card-product'>{children}</div>
}

interface ImgProps {
    img: ProductProps['image']
}

function Img({ img }: ImgProps) {
    return <img className='card-product-img' src={img} alt='Product Image' />
}

interface NameProps {
    name: ProductProps['name']
}

function Name({ name }: NameProps) {
    return <h3 className='card-product-name'>{name}</h3>
}

function Classification() {
    return (
        <div className='card-product-classification'>
            <Image src={IconStar} alt='Icon Star' width={20} height={20} />
            <Image src={IconStar} alt='Icon Star' width={20} height={20} />
            <Image src={IconStar} alt='Icon Star' width={20} height={20} />
            <Image src={IconStar} alt='Icon Star' width={20} height={20} />
            <Image src={IconStar} alt='Icon Star' width={20} height={20} />
        </div>
    )
}

interface PriceProps {
    price: ProductProps['price']
}

function Price({ price }: PriceProps) {
    return <p className='card-product-price'>R$ {price}</p>
}

function Skeleton() {
    return <div className='card-product-skeleton' />
}

export {
    Root,
    Img,
    Name,
    Classification,
    Price,
    Skeleton
}