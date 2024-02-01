import {
    Customers,
    DetailProduct,
    News
} from '@/components'

import './style.css'

export default function ProductDetail() {

    return (
        <main className='screen-product-detail'>
            <DetailProduct.Root />
            <Customers.Root />
            <News.Root />
        </main>
    )
}