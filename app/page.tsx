import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { getAllProducts } from './products/product.api'
import ProductCard from '@/components/productCard';
async function HomePage() {
  const products = await getAllProducts();
  console.log(products)
  return (
    <>
      <div className='flex justify-between'>
        <h1
          className='text-4xl font-bold'
        >
          NextNestApp
        </h1>

        <Link
          href="/products/new"
          className={buttonVariants()}
        >
          Create Product
        </Link>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-3'>
        {
          products.map((product) => (
            <ProductCard product={product} key={product.id}/>
          ))
        }
      </div>
    </>
  )
}

export default HomePage