import { Unbounded } from 'next/font/google';

const unbounded = Unbounded({ subsets: ['latin'] });

export default async function Logo() {
  return (
    <div className='z-10 flex w-full flex-col justify-center px-4 py-2'>
      <h1 className={unbounded.className}>
        <span className='text-5xl uppercase'>super</span>
      </h1>
      <h1 className={unbounded.className}>
        <span className='text-5xl uppercase'>sonic</span>
      </h1>
    </div>
  );
}
