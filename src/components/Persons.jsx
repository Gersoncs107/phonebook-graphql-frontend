import {useState} from 'react'
import {gql} from '@apollo/client'
import {useQuery} from '@apollo/client/react'

const Persons = ({ persons }) => {
  return (
    <div>
      <h2>Persons</h2>
      {persons.map(p =>
        <div key={p.id}>
          {p.name} {p.phone}
        </div>  
      )}
    </div>
  )
}

export default Persons