import Cart from '@/components/cart';
import OpenCart from '@/components/cart/open-cart';
import { Suspense } from 'react';
import Logo from '@/components/logo';
import Link from 'next/link';

export default async function Header() {
  return (
    <div className='flex w-full justify-between border-b border-orange-500'>
      <Link href='/'>
        {/* @ts-expect-error Async Server Component */}
        <Logo />
      </Link>
      <div className='flex items-center justify-center gap-8 px-12 text-gray-700'>
        <div className='flex justify-end md:w-1/3'>
          <Suspense fallback={<OpenCart />}>
            {/* @ts-expect-error Async Server Component */}
            <Cart />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
