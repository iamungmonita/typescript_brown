import React from 'react'
import style from '@/styles/Carousel.module.scss'
import { StaticImageData } from 'next/image'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import { arrowleftIcon, arrowrightIcon } from '@/public/icons' 
type Props = {
    sliderimage: {
        id: string,
        pic: StaticImageData
    }[],
    interval: number
    text?:string
    title: string
}

export default function Carousel({sliderimage, interval, text, title}: Props) {
    const [sliderImages, setSliderImages] = useState(sliderimage) 
    const [curr, setCurr] = useState<number>(0)
    const [autoSlide, setAutoSlide] = useState<boolean>(true)
    const prev = () => {
        setCurr((curr) => (curr === 0 ? sliderImages.length - 1 : curr - 1 ))
      }
      const next = () => {
        setCurr((curr) => (curr ===  sliderImages.length - 1 ? 0 : curr + 1 ))
      }
      useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, interval)
        return () => clearInterval(slideInterval)
       },[])
    
  return (
  
    <section className='space-y-5'>
      <div>
      <h2 className='font-bold text-lg'>{title}</h2>
      </div>
      <div className='text-justify mb-5'>
        <p className=''>{text}</p>
      </div>
      <div className='relative w-full mx-auto overflow-x-hidden'>
        <div className={`${style.slider} transition-transform ease-out duration-500`}>
            {sliderImages.map((image) => 
            <Image className={`${style.image} transition-transform ease-out duration-500`} 
            style={{transform : `translateX(-${curr * 100}%)`}}
            key={image.id} src={image.pic} alt='image'></Image>
            )}
        </div>
        <div className='absolute inset-0 w-full px-5 flex justify-between items-center'>
           <button onClick={prev}><Image src={arrowleftIcon} height={30} width={30} alt='prev_logo'/></button>
           <button onClick={next}><Image src={arrowrightIcon} height={30} width={30} alt='next_logo'/></button>
        </div>
        <div className={style.nav}>
          {sliderImages.map((_, i) => 
          <div key={i} className={`${style.dot} ${curr === i && 'p-1 rounded-full'}`}></div>)}
        </div>
      </div>
    </section>

  )
}