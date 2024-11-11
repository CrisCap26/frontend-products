import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductForm } from './product-form'
import { getProduct } from "../product.api"

interface Props {
  params: {
    id: string
  }
}

async function ProductNewPage({ params }: Props) {
  const product = await getProduct(params.id);
  console.log(product)
  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>
            {
              params.id ? 'Update Product' : 'Create Product'
            }
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm product={product} />
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductNewPage
