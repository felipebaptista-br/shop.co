import {
    Container,
    Input
} from '@/components';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import IconCart from '@/assets/icons/cart.svg';
import IconUser from '@/assets/icons/user.svg';

import './style.css'

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
    return (
        <div className='nav-bar-panel'>
            <Image src={IconCart} alt='Icon Cart' />
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