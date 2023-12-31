import Image from "next/image"
import Categories from "./components/categories"
import { prismaClient } from "@/lib/prisma"
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  });
  return (
    <div>
      <Image 
        src="/banner-home-01.png"
        width={0}
        height={0}
        className="h-auto w-full px-5 mt-5"
        sizes="100vw"
        alt="Até 55% de desconto esse mês!"
      />
      
      <div className="mt-10 px-5">
        <Categories/>
      </div>

      <div className="mt-10">
        <p className="font-bold uppercase pl-5 mb-2">Ofertas</p>
        <ProductList products={deals}/>
      </div>

      <Image 
        src="/banner-home-02.png"
        width={0}
        height={0}
        className="h-auto w-full px-5 mt-10"
        sizes="100vw"
        alt="Até 55% de desconto em mouses!"
      />
    </div>
  )
}
