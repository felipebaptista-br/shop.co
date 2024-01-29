import {
  Button, Container
} from '@/components';

import './style.css'

export default function Home() {
  return (
    <main className='screen-home'>
      <div className='home-background'>
        <Container.Root>
          <div className='home-background-container'>
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <Button.Root className='home-background-button' variant='black' sizeBtn='medium'>Shop Now</Button.Root>
            <div className='home-background-statistics'>
              <section className='home-background-statistics-item'>
                <h3>200+</h3>
                <p>International Brands</p>
              </section>
              <section className='home-background-statistics-item home-background-statistics-line'>
                <h3>2,000+</h3>
                <p>High-Quality Products</p>
              </section>
              <section className='home-background-statistics-item'>
                <h3>30,000+</h3>
                <p>Happy Customers</p>
              </section>
            </div>
          </div>
        </Container.Root>
      </div>
    </main>
  );
}
