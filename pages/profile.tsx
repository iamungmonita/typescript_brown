
import React, { FormEvent, useState } from 'react'
import { addPerson, Employee, ParTimer } from '@/helper'

type Props = {
    onSubmit:FormEvent<HTMLFormElement>
}

const monita = addPerson({name: 'Monita', age: 26, occupation: 'ATC'})
console.log(monita.id);

const monitaEmployee = new Employee ('Monita', 26)
const putyPartimer = new ParTimer ('Puty', 27, 'Developer')

export default function profile({}: Props) {
  return (
    <div>
        <ul className='p-5 list-item'>
            <li className='list-item'>{monitaEmployee.register()}</li>
            <li>{putyPartimer.register()}</li>
            <li></li>
        </ul>
    </div>
  )
}