import type { Metadata } from 'next';
import { Unbounded, Work_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/nav';
import { Suspense } from 'react';
import Cart from '@/components/icons/cart';
import Instagram from '@/components/icons/instagram';

const unbounded = Unbounded({ subsets: ['latin'] });
const workSans = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Supersonic',
  description: 'Web site for supersonic apparel',
  openGraph: {
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={workSans.className}>
      <body className='flex min-h-screen flex-col items-center gap-16'>
        {/* TODO: wrap this top part up as a component. */}
        <div className='flex w-full justify-between border-b border-orange-500'>
          {/* LOGO */}
          <div className='z-10 flex w-full flex-col justify-center px-4 py-2'>
            <h1 className={unbounded.className}>
              <span className='text-5xl uppercase'>super</span>
            </h1>
            <h1 className={unbounded.className}>
              <span className='text-5xl uppercase'>sonic</span>
            </h1>
          </div>
          {/* /LOGO */}
          {/* ICONS */}
          <div className='flex items-center justify-center gap-8 px-12 text-gray-700'>
            <Instagram />
            <Cart />
          </div>
          {/* /ICONS */}
        </div>
        {/* @ts-expect-error Async Server Component */}
        <Navbar />
        <Suspense>
          <main className='w-full'>{children}</main>
        </Suspense>
        <div className='fixed bottom-0 flex w-full flex-col items-center justify-center'>
          <p className='my-3 text-sm font-light text-gray-700'>
            Copyright © 2023 Supersonic Industries
          </p>
        </div>
      </body>
    </html>
  );
}
