
import { Product } from "@/styles/page/home";
import Image from "next/image";


import React from "react";

import HomeContainerGambi from "@/components/Carousel/Carousel";
import Link from "next/link";
import { getProducts } from "@/services/products/get-products";

export default async function Home() {


  const products = await getProducts();

  return (
    <HomeContainerGambi >
      {products.map((product) => {
        return (
          <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} alt="" width={520} height={480} blurDataURL="data:..." placeholder="blur" />
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link>
        )
      })}
    </HomeContainerGambi>
  )
}

