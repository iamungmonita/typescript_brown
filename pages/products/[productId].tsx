import React from 'react'

type Props = {
    product:any
}

export default function productId({product}: Props) {
    console.log(product);
    
  return (
    <div>
        {product.id}
    </div>
  )
}

export const getServerSideProps = async(context:any) => {
    const {params} = context
    const {productId} = params
    const res = await fetch(`https://dummyjson.com/products/${productId}`)
    const data = await res.json()
    return {
        props: {
            product : data
        }
    }
}