import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import ListPokemons from '../components/shared/PokedexPage/ListPokemons'
import SelectType from '../components/shared/PokedexPage/SelectType'
import '../components/shared/PokedexPage/style/PokedexPage.css'
import { useNavigate } from "react-router-dom"
import TablePagination from '../components/TablePagination/TablePagination'


const PokedexPage = () => {

const [pokeSearch, setPokeSearch] = useState('') 
const [typeSelected, setTypeSelected] = useState('allPokemons')   

const inputSearch = useRef()

const trainer = useSelector(states => states.trainer)

const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'

const [ pokemons, getPokemons, getPokeByType ] = useFetch(url)

useEffect(() =>{
  if(typeSelected === 'allPokemons'){
  getPokemons()
  } else {
  getPokeByType(typeSelected)
  }
}, [typeSelected])

const handleSubmit = e => {
  e.preventDefault()
  setPokeSearch(inputSearch.current.value.trim().toLowerCase())

}

const pokemonFiltered = pokemons?.results.filter(poke => {
  return poke.name.includes(pokeSearch)
})
const navigate = useNavigate()

const handleHomepage = () => {
    navigate('/')
}

  return (
    <>
    <header className='pokedex__page__header' onClick={handleHomepage}>
      <img className='img__pokedex__page__header' src="../public/pokedexPageheader.png" alt="" />
    </header>
    <div className='pokedex__page__container'>
      <p className='pokedex__page__p'><span className='welcome__pokedex__page'>Welcome</span> <span className='trainer__pokedex__page'>{trainer}</span>, here you can find your favorite pokemon</p>
      <div className='inp__form__select__pokedex__page'>
      <form className='form__pokedex__page' onSubmit={handleSubmit}>
        <input className='input__pokedex__page' ref={inputSearch} type="text" />
        <button className='button__pokedex__page'>Search</button>
      </form>
      <SelectType
      setTypeSelected={setTypeSelected}
      />
      </div>
      
      <ListPokemons
      pokemons={pokemonFiltered} 
      />
      
    </div>
    <TablePagination/>
    </>
    
  )
}

export default PokedexPage