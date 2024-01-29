import Image from 'next/image';
import ImgVersace from '@/assets/brands/versace.svg';
import ImgCalvinKlein from '@/assets/brands/calvin-klein.svg';
import ImgGucci from '@/assets/brands/gucci.svg';
import ImgPrada from '@/assets/brands/prada.svg';
import ImgZara from '@/assets/brands/zara.svg';

import './style.css';

function Root() {
    return (
        <div className='marquee'>
            <div className='imagesContainer'>
                <Image src={ImgVersace} alt='Logo Versace' width={100} height={50} />
                <Image src={ImgCalvinKlein} alt='Logo Calvin Klein' width={100} height={50} />
                <Image src={ImgGucci} alt='Logo Gucci' width={100} height={50} />
                <Image src={ImgPrada} alt='Logo Prada' width={100} height={50} />
                <Image src={ImgZara} alt='Logo Zara' width={100} height={50} />
            </div>
        </div>
    );
}

export { Root };
