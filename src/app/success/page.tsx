import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer } from "@/styles/page/success";
import Head from "next/head";
import { showCheckoutSession } from "@/services/checkout/showCheckoutSession";
export const metadata = {
    title: 'Compra finalizada',
    robots: {
        index: false,
    },
}

interface SuccessProps {
    searchParams: {
        session_id: string
    }
}

export default async function Success(props: SuccessProps) {
    const sessionId = props.searchParams.session_id

    const { customerName, product } = await showCheckoutSession({
        sessionId,
    })

    return (
        <>
            <SuccessContainer>
                <h1>Compra efetuada</h1>

                <ImageContainer>
                    <Image src={product.imageUrl!} width={120} height={110} alt="" />
                </ImageContainer>

                <p>
                    Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.
                </p>

                <Link href="/">
                    Voltar ao catálogo
                </Link>
            </SuccessContainer>
        </>
    )
}
