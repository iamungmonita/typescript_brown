import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import { Carousel } from '@/components';
type Props = {
  data:any
}

export default function productId({data}: Props) {
  console.log(data);
  const price  = (data.price.toFixed(2))
  return (
    <div>
      <Head><title>{data.title}</title></Head>

      <div className='max-w-6xl mx-auto p-5'>
        <h2>{data.title}</h2>
        {/* <h2>{data.description}</h2>
        {data.images.map((img:any) => 
          <Image src={img} alt={data.id} width={300} height={200}/>
        )} */}
        <Image src={data.thumbnail} alt={data.title} width={300} height={200}/>
        <p>${price}</p>
        <p>{data.stock}</p>
        <p>{data.discountPercentage}</p>
        <p>{data.brand}</p>
      </div>
    </div>
  )
}

export const getServerSideProps = async(context:any) => {
  const res = await fetch(`https://dummyjson.com/products/${context.params.productId}`)
  const data = await res.json()
  return {
    props : {
      data
    }
  }
}