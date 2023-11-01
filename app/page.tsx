import { ThreeItemGrid } from '@/components/grid/three-items';

export const runtime = 'edge';

export default async function Home() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <ThreeItemGrid />
    </>
  );
}
