import type { Metadata } from 'next';
import Script from 'next/script';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/nav';
import { Suspense } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

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
        <Script src='https://www.googletagmanager.com/gtag/js?id=G-4TFHNVLC3Y' />
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-4TFHNVLC3Y');
        `}
        </Script>
        {/* @ts-expect-error Async Server Component */}
        <Header />
        {/* @ts-expect-error Async Server Component */}
        <Navbar />
        <Suspense>
          <main className='w-full pb-8'>{children}</main>
        </Suspense>
        {/* @ts-expect-error Async Server Component */}
        <Footer />
      </body>
    </html>
  );
}
