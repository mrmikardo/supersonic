import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom',
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div>
      <div className='flex w-full items-center justify-center font-light'>
        {title}
      </div>
      <div className='flex w-full items-center justify-center font-light'>
        <Price amount={amount} currencyCode={currencyCode} />
      </div>
    </div>
  );
};

export default Label;
