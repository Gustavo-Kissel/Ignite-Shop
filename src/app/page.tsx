import { HomeContainer, Product } from "@/styles/page/home";
import Image from "next/image";

import camiseta1 from "../assets/2_explorer-t-shirt 2.png"
import camiseta2 from "../assets/Camisa-Maratona 2.png"
import camiseta3 from "../assets/IgniteLab-T-shirt 2.png"
import camiseta4 from "../assets/Igniter-abord-2-t-shirt 2.png"

export default function Home() {
  return (
    <HomeContainer>

      
      <Product>
        <Image src={camiseta1} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Explorer</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta2} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Maratona</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta3} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Ignite Lab</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}


