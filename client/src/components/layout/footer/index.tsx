'use client'

import React, { useState } from 'react'
import { Button, Container, Input, List } from '@/components';
import { getCurrentYear } from '@/utils/helpers/dateTimeUtils';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import IconMail from '@/assets/icons/mail.svg';
import IconFacebook from '@/assets/socialmidia/facebook.svg';
import IconInstagram from '@/assets/socialmidia/instagram.svg';
import IconTwitter from '@/assets/socialmidia/twitter.svg';
import IconGitHub from '@/assets/socialmidia/github.svg';
import BadgeApplePay from '@/assets/badges/badge-applepay.svg';
import BadgeGooglePay from '@/assets/badges/badge-googlepay.svg';
import BadgeVisa from '@/assets/badges/badge-visa.svg';
import BadgeMastercard from '@/assets/badges/badge-mastercard.svg';
import BadgePayPal from '@/assets/badges/badge-paypal.svg';

import './style.css'

function Root() {
    const [emailAddressUser, setEmailAddressUser] = useState<string>();

    return (
        <footer className='footer'>
            <div className='footer-form-container'>
                <span className='footer-form-top' />
                <span className='footer-form-bottom' />
                <Container.Root className='footer-form'>
                    <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                    <div className='footer-form-content'>
                        <Input.Root
                            sizeInput='medium'
                            placeholder='Email Address'
                            value={emailAddressUser}
                            onChange={(e) => setEmailAddressUser(e.target.value)}
                        />
                        <Button.Root variant='white' sizeBtn='medium'>
                            Inscreva-se na nossa Newsletter
                        </Button.Root>
                    </div>
                </Container.Root>
            </div>
            <div className='footer-content'>
                <Container.Root>
                    <div className='footer-grid'>
                        <div className='footer-grid-midia'>
                            <Image src={Logo} alt='Logo Shop.Co' />
                            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                            <div className='social-midia'>
                                <Image src={IconTwitter} alt='Icon Twitter' />
                                <Image src={IconFacebook} alt='Icon Facebook' />
                                <Image src={IconInstagram} alt='Icon Instagram' />
                                <Image src={IconGitHub} alt='Icon GitHub' />
                            </div>
                        </div>
                        <List.Ul className='footer-grid-links'>
                            <List.Li className='li-title'>COMPANY</List.Li>
                            <List.Li>About</List.Li>
                            <List.Li>Features</List.Li>
                            <List.Li>Works</List.Li>
                            <List.Li>Carrer</List.Li>
                        </List.Ul>
                        <List.Ul className='footer-grid-links'>
                            <List.Li className='li-title'>HELP</List.Li>
                            <List.Li>Customer Support</List.Li>
                            <List.Li>Delivery Details</List.Li>
                            <List.Li>Terms & Conditions</List.Li>
                            <List.Li>Privacy Policy</List.Li>
                        </List.Ul>
                        <List.Ul className='footer-grid-links'>
                            <List.Li className='li-title'>FAQ</List.Li>
                            <List.Li>Account</List.Li>
                            <List.Li>Manage Deliveries</List.Li>
                            <List.Li>Orders</List.Li>
                            <List.Li>Payments</List.Li>
                        </List.Ul>
                        <List.Ul className='footer-grid-links'>
                            <List.Li className='li-title'>RESOURCES</List.Li>
                            <List.Li>Free eBooks</List.Li>
                            <List.Li>Development Tutorial</List.Li>
                            <List.Li>How to - Blog</List.Li>
                            <List.Li>Youtube Playlist</List.Li>
                        </List.Ul>
                    </div>
                    <div className='footer-copyright'>
                        <p>Shop.co © {getCurrentYear()}, All rights reserved</p>
                        <div className='footer-badges'>
                            <Image src={BadgeVisa} alt='Visa' />
                            <Image src={BadgeMastercard} alt='Mastercard' />
                            <Image src={BadgePayPal} alt='PayPal' />
                            <Image src={BadgeApplePay} alt='Apple Pay' />
                            <Image src={BadgeGooglePay} alt='Google Pay' />
                        </div>
                    </div>
                </Container.Root>
            </div>
        </footer >
    )
}

export {
    Root
}