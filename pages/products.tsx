import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { ProductCard } from '@/components'
import { StaticImageData } from 'next/image'
type Props = {

}
interface InterfaceProducts {
    id: number,
    title: string,
    description: string,
    thumbnail: StaticImageData
}

export default function products({}: Props) {
    const [products, setProducts] = useState<InterfaceProducts[]>([])
    useEffect(() => {
        const getProducts = async() => {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            setProducts(data.products)
        }
        getProducts()
    },[])    

  return (
    <div className='max-w-6xl mx-auto flex flex-wrap gap-5 mt-5'>
        {products.map((product) => 
        <div key={product.id} className='max-w-[300px] mx-auto '>
            <Head>{product.title}</Head>
            <ProductCard productImage={product.thumbnail}
            productTitle={product.title} productId={product.id} productDescription={product.description}/>
        </div>
        )}
    </div>
  )
}

 