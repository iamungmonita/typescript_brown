import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
type Props = {
    productTitle: string,
    productDescription: string,
    productImage: StaticImageData
    productId: number
}


export default function ProductCard({productTitle, productDescription,productId,productImage}: Props) {
  const lowerCase = productTitle.toLocaleLowerCase().replace(/ /g, '')
  return (
    <div className='bg-green-200 p-5'>
        <Image src={productImage} alt={productTitle} width={300} height={200}/>
        <Link href={`/products/[productId]`} as={`/products/${productId}`}>
            <h2>{productTitle}</h2>
            <p>{productDescription}</p>
        </Link>
    </div>
  )
}