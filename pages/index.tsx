import React, { FormEvent, useState } from 'react'
import { addPerson } from '@/helper'
import Head from 'next/head';
export const person = addPerson({name: 'Monita', age: 26, occupation: 'ATC'})
console.log(person);

interface IProps  {
  people: {
    name:string,
    age: number
  }[]
}

const Home = () => {
  const [users, setUsers] = useState<IProps['people']>([
    {name: 'Lebro James', age:35},
    {name: 'Michael Jordan', age:50},
  ])
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
    </div>
  )
}

export default Home