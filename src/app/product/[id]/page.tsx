
export const dynamicParams = true // true | false,
import Image from "next/image";


import Head from "next/head";

import { ProductContainer, ImageContainer, ProductDetails } from "@/styles/page/product";
import BuyButton from "./components/BuyButton";
import { getSingleProduct } from "@/services/products/get-single-product";


export default async function Product({ params }: { params: { id: string } }) {
    const prodId = params.id
    const product = await getSingleProduct(prodId)
    return (
        <>
            <Head>
                <title>{product.title} | Ignite Shop</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt="" />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.title}</h1>
                    <span>{product.price}</span>

                    <p>{product.description}</p>
                    <BuyButton product={product} />

                </ProductDetails>
            </ProductContainer>
        </>
    )
}

/* export const generateStaticParams: any = async () => {
    return {
        paths: [
            { params: { id: 'prod_MLH5Wy0Y97hDAC' } },
        ],
        fallback: 'blocking',
    }
}

export const getProduct: any = async ({ params }: { params: { slug: string } }) => {
    const productId = params.slug;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    });

    const price = product.default_price as Stripe.Price;

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price.unit_amount,
                description: product.description,
                defaultPriceId: price.id
            }
        },
        //revalidate: 60 * 60 * 1 // 1 hours
    }
}
 */