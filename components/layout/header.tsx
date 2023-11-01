import Cart from '@/components/icons/cart';
import Instagram from '@/components/icons/instagram';
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
        <Instagram />
        <Cart />
      </div>
    </div>
  );
}
