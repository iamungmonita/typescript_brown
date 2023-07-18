import React from 'react'
interface iLists  {
    people: {
      name:string,
      age: number
    }[]
  }
const List: React.FC<iLists> = ({people}) => {
  const renderList = (): React.JSX.Element[] => {
    return people.map((peo) => {
      return (
        <ul>
          <p>{peo.name}</p>
          <p>{peo.age}</p>
        </ul>
      )
    })
  }
  return (
    <div>
    {renderList()}
    </div>
  )
}

export default List