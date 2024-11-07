import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getProduct } from "../product.api"
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface Props {
    params: {
        id: string
    }
}

async function ProductDetailPage({ params }: Props) {
    const product = await getProduct(params.id);
    console.log(product)
    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="p-5">
                <CardTitle className="flex justify-between items-center">
                    Product Detail: {product.id}
                    <Link
                        className={buttonVariants()}
                        href='/'
                    >
                        Go back
                    </Link>
                </CardTitle>
                <CardContent>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <img 
                        src={product.image} 
                        className="w-full h-64 object-cover"
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default ProductDetailPage
