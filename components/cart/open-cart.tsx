import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <>
      <ShoppingCartIcon
        className={clsx(
          'h-8 transition-all ease-in-out hover:text-orange-700 ',
          className
        )}
      />

      {quantity ? (
        <div className='absolute right-0 top-0 mt-8 mr-10 h-4 w-4 rounded bg-orange-700 text-[11px] font-medium text-white'>
          {quantity}
        </div>
      ) : null}
    </>
  );
}
