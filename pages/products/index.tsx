import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
type Props = {
    products:any
}
export default function index({products}: Props) {

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(10)
  
    const lastIndex = currentPage * postPerPage
    const firstIndex = lastIndex - postPerPage
    const currPostPerPage = products.slice(firstIndex,lastIndex)


    const pages = []
    for (let i = 1; i <= Math.ceil(products.length/postPerPage); i++) {
        pages.push(i)
    }

  return (
    <div className='max-w-6xl mx-auto flex flex-col mt-5 items-center'>         
        <div>
            {pages.map((p) => 
                <button className='p-2 shadow-sm border' key={p} onClick={() => setCurrentPage(p)}>{p}</button>
            )}
        </div>
        
        <div className='flex flex-col md:flex-row justify-center items-start flex-wrap gap-5'>
        {currPostPerPage.map((product:any) => 
        <div key={product.id} className='bg-red-200 max-w-[300px]'>
            <Link  href={`/products/[productId]`} as={`/products/${product.id}`} >
          
                <h2>{product.id} | {product.title}</h2>
                <h2>{product.description}</h2>
            </Link>
        </div>
        )}
        </div>

       
    </div>
  )
}


export const getServerSideProps = async() => {
    const res = await fetch(`https://dummyjson.com/products`)
    const data = await res.json()
    return {
        props: {
            products : data.products
        }
    }
}