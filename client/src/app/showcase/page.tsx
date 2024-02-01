import { Customers, Store } from '@/components'

import './style.css'

export default function ShowCase() {

    return (
        <main className='screen-showcase'>
            <Store.Root />
            <Customers.Root />
        </main>
    )
}