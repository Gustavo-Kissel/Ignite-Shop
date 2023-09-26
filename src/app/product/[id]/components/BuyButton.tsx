"use client"
import { createCheckouts } from "@/services/checkout/createCheckout";
import { useRouter } from "next/navigation";

import { useState } from "react";

type DetailedProduct = {
    id: string
    title: string
    price: string
    description?: string | null
    defaultPriceId: string
}

interface ProductInfoProps {
    product: DetailedProduct
}

export default function BuyButton({ product }: ProductInfoProps) {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
        useState(false)
    const { push } = useRouter()

    async function handleBuyProduct() {
        try {
            setIsCreatingCheckoutSession(true)

            const { checkoutUrl } = await createCheckouts(product.defaultPriceId)

            if (checkoutUrl) {
                push(checkoutUrl)
            }
        } catch (err) {
            alert('Falha ao redirecionar ao checkout!')

            setIsCreatingCheckoutSession(false)
        }
    }

    return (
        <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
            Comprar agora
        </ button>
    )
}