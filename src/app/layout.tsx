import { Container, Header } from '@/styles/app'
import { globalStyles } from '@/styles/global'
import { getCssText } from '@/styles/stitches.config'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import logoImg from '../assets/Logo.svg'

const roboto = Roboto(
  {weight:['400', '700'],
  subsets:['latin'],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: 'Ignite Shop',
  description: 'Ignite Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>        
      </head>
      <body className={roboto.className}>
        
        <Container>
        <Header>
        <Image src={logoImg} alt='' />
        </Header>
        {children}
        </Container>

      <style id="stitches" dangerouslySetInnerHTML={{ __html: `${getCssText()}, ${globalStyles()}` }} />
      </body>
    </html>
  )
}
