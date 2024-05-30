import PokeCard from "./PokeCard"
import './style/PokedexPage.css'


const ListPokemons = ( { pokemons } ) => {
  return (
    <div className='list__pokemons__pokedex__page'>
        {
            pokemons?.map(pokeInfo => (
               <PokeCard
               key={pokeInfo.url}
               pokeInfo={pokeInfo}
               /> 
            ))
        }
    </div>
  )
}

export default ListPokemons