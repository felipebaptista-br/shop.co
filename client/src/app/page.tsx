import {
  Background, Customers, Dress, Marquee, News,
} from '@/components';

import './style.css'

export default function Home() {
  return (
    <main className='screen-home'>
      <Background.Root />
      <Marquee.Root />
      <News.Root />
      <Dress.Root />
      <Customers.Root />
    </main>
  );
}
