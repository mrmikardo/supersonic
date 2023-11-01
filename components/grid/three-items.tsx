import { GridTileImage } from '@/components/grid/tile';
import { getCollectionProducts } from '@/lib/shopify';
import type { Product } from '@/lib/shopify/types';
import Link from 'next/link';

function ThreeItemGridItem({
  item,
  priority,
}: {
  item: Product;
  priority?: boolean;
}) {
  return (
    <Link
      className='relative block aspect-square h-full w-full'
      href={`/product/${item.handle}`}
    >
      <GridTileImage
        src={item.featuredImage.url}
        fill
        sizes={'(min-width: 768px) 66vw, 100vw'}
        priority={priority}
        isInteractive={true}
        alt={item.title}
        label={{
          position: 'bottom',
          title: item.title as string,
          amount: item.priceRange.maxVariantPrice.amount,
          currencyCode: item.priceRange.maxVariantPrice.currencyCode,
        }}
      />
    </Link>
  );
}

export async function ThreeItemGrid() {
  const homepageItems = await getCollectionProducts({
    collection: 'launch-issue',
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className='max-w-screen mx-auto grid w-4/5 gap-16 md:grid-cols-3'>
      <ThreeItemGridItem item={firstProduct} priority />
      <ThreeItemGridItem item={secondProduct} priority />
      <ThreeItemGridItem item={thirdProduct} priority />
    </section>
  );
}
