import type { Metadata } from "next";
import Head from "next/head";
import { Footer, Navbar } from "@/components";

import "./globals.css";

export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "Shop.Co: The best online store in Brazil. Your online store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Navbar.Root>
          <Navbar.NavLogo />
          <Navbar.Navigation>
            <Navbar.NavLink href="/">Home</Navbar.NavLink>
            <Navbar.NavLink href="/showcase">Store</Navbar.NavLink>
          </Navbar.Navigation>
          <Navbar.NavSearch />
          <Navbar.NavPanel />
        </Navbar.Root>
        {children}
        <Footer.Root />
      </body>
    </html>
  );
}
