
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";



interface ProductProps {
    id: string
    title: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string

}

export const getSingleProduct = async (prodId: string): Promise<ProductProps> => {
    const productId = prodId;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    });

    const price = product.default_price as Stripe.Price;
    return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pr-BR", {
            style: 'currency',
            currency: 'BRL',
        }).format((price.unit_amount as number) / 100),
        description: product.description,
        defaultPriceId: price.id

    }
}