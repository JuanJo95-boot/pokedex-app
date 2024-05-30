import React from 'react'
import useFetch from '../../../hooks/useFetch'
import { useEffect } from 'react'
import '../PokedexPage/style/PokedexPage.css'

const SelectType = ({ setTypeSelected }) => {

    const url = 'https://pokeapi.co/api/v2/type'
   const [ types, getTypes ] = useFetch(url)
   useEffect(() => {
    getTypes()
   }, [])
   
   const handleChange = e => {
    setTypeSelected(e.target.value);
   } 
  return (
    <select className='select__type' onChange={handleChange}>
        <option value='allPokemons'>All pokemons</option>
        {
            types?.results.map(typeInfo =>(
                <option className='type__info' key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType