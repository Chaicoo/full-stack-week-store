import ProductItem from "@/components/ui/product-item";
import { Product } from "@prisma/client";
import { computeProductTotalPrice } from "@/helpers/product";

interface ProductListProps {
    products: Product[]
}

const ProductList = ({products}: ProductListProps) => {
    return ( 
        <div className="flex w-ful gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
            {
                products.map((product) => (
                    <ProductItem key={product.id} product={computeProductTotalPrice(product)} />
                ))
            }
        </div>
     );
}
 
export default ProductList;