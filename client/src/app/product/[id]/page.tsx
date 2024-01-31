import { getUrlSlug } from '@/utils/helpers/browserParamsHandler'
import { DetailProduct } from '@/components'

import './style.css'

export default function ProductDetail() {

    return (
        <main className='screen-product-detail'>
            <DetailProduct.Root />
        </main>
    )
}