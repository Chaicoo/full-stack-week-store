import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";

interface ProductItemProps {
    product: ProductWithTotalPrice
}

const ProductItem = ({product}: ProductItemProps) => {
    return ( 
        <div className="relative flex flex-col gap-4 max-w-[150px]">
            <div className="bg-accent rounded-lg h-[170px] w-[156px] flex items-center justify-center">
                <Image 
                    src={product.imageUrls[0]}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto w-auto max-w-[80%] max-h-[70%]"
                    style={{
                        objectFit: "contain"
                    }}
                    alt={product.name}
                />
            </div>

           {
                product.discountPercentage > 0 && (
                        <Badge className="absolute left-2 top-2 py-[2px]">
                            {product.discountPercentage}% OFF
                        </Badge>
                )
           }

            <div>
                <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">
                    {product.name}
                </p>

                <div className="flex items-center gap-2">
                    {
                        product.discountPercentage > 0 && (
                            <>
                                <p className="font-semibold text-sm">
                                    R$ {product.totalPrice.toFixed(2)}
                                </p>
                                <p className="opacity-75 line-through text-xs">
                                    R$ {Number(product.basePrice)}
                                </p>
                            </>
                        )
                    }
                    {
                        product.discountPercentage === 0 && (
                            <p className="font-semibold text-sm">
                                R$ {Number(product.basePrice)}
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
     );
}
 
export default ProductItem;