
import { Product } from "@/styles/page/home";
import Image from "next/image";

import { getProducts } from "@/services/get-product";
import React from "react";

import HomeContainerGambi from "@/components/Carousel/Carousel";

export default async function Home() {


  const products = await getProducts();

  return (
    <HomeContainerGambi >
      {products.map((product) => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageUrl} alt="" width={520} height={480} />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>

        )
      })}
    </HomeContainerGambi>
  )
}

