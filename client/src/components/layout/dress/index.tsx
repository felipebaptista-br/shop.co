
import { Container } from '@/components'
import Image from 'next/image'
import BackgroundDress from '@/assets/bg/bg-dress.svg'

import './style.css'

function Root() {
    return (
        <div className='dress'>
            <Container.Root className='dress-container'>
                <h1>BROWSE BY DRESS STYLE</h1>
                <Image className='dress-img' src={BackgroundDress} alt='Background Dress'/>
            </Container.Root>
        </div>
    )
}

export {
    Root
}