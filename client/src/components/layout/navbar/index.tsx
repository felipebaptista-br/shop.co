'use client'

import { useEffect, useState } from 'react';
import {
    Container,
    Input
} from '@/components';
import { useCart } from '@/context/contextCart';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import IconCart from '@/assets/icons/cart.svg';
import IconUser from '@/assets/icons/user.svg';

import './style.css'
import { useRouter } from 'next/navigation';

interface RootProps {
    children: React.ReactNode,
}

function Root({ children }: RootProps) {
    return <nav className='nav-bar'><Container.Root className='nav-bar-container'>{children}</Container.Root></nav>
}

function NavLogo() {
    return <Image src={Logo} alt='Logo Shop.Co' />
}

interface NavigationProps {
    children: React.ReactNode
}

function Navigation({ children }: NavigationProps) {
    return <div className='nav-bar-navigation'>{children}</div>
}

interface NavLinkProps {
    children: React.ReactNode,
    href: string,
}

function NavLink({ children, href }: NavLinkProps) {
    return <Link href={href} className='nav-bar-link'>{children}</Link>
}

interface NavSearchProps extends React.HTMLAttributes<HTMLInputElement> { }

function NavSearch({ ...props }: NavSearchProps) {
    return <Input.Root {...props} sizeInput='medium' placeholder='Search for products' />
}

function NavPanel() {
    const router = useRouter();
    const { viewCart } = useCart();
    const [cartLengt, setCartLength] = useState(0);

    useEffect(() => {
        const updateCartLength = () => {
            const cartContent = viewCart();
            setCartLength(cartContent.length);
        };
        window.addEventListener('cartUpdated', updateCartLength);
        return () => {
            window.removeEventListener('cartUpdated', updateCartLength);
        };
    }, [viewCart]);

    return (
        <div className='nav-bar-panel'>
            <span onClick={() => router.push('/cart')} className='nav-bar-panel-cart'>
                <Image src={IconCart} alt='Icon Cart' />
                <p className='nav-bar-cart-number'>{cartLengt}</p>
            </span>
            <Image src={IconUser} alt='Icon User' />
        </div>)
}

export {
    Root,
    NavLogo,
    Navigation,
    NavLink,
    NavSearch,
    NavPanel
}