import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Carousel } from '@/components'
import { aboutSlider } from '@/constants'
type Props = {}

export default function about({}: Props) {
  return (
    <div>
       <Head>
        <title>About</title>
      </Head>
    
      <div className='max-w-6xl mx-auto p-5 lg:flex flex-wrap gap-10 space-y-5 justify-center items-center'>
        <Carousel title={aboutSlider[0].title} text={aboutSlider[0].text} interval={5000} sliderimage={aboutSlider}/>
      </div>
    
    </div>
  )
}