"use client"
import { useKeenSlider } from 'keen-slider/react'


import 'keen-slider/keen-slider.min.css'

import { HomeContainer } from '@/styles/page/home'


export default function HomeContainerGambi(
    {
        children,
    }: {
        children: React.ReactNode
    }
) {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 48
        }
    });

    return (
        <HomeContainer ref={sliderRef} className="keen-slider">
            {children}
        </HomeContainer>
    )
}