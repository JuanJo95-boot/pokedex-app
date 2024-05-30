import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import '../components/shared/PokedexPage/style/PokemonDetailPage.css'
import { useNavigate } from "react-router-dom"

const PokemonDetailPage = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const [ pokemon, getPokemon ] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [name])
  const navigate = useNavigate()
  const handleHomepage = () => {
    navigate('/')
}
  return (
    <>
    <header className='header_page_pokemon_detail' onClick={handleHomepage}>
      <img className='image_header_pokemon_detail' src="../pokedexPageheader.png" alt="" />
    </header>
    <div className='card_container_pokemon_detail'>
      <header className={`info__card__header bg-${pokemon?.types[0].type.name}`}>
        <img className='info__card__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <h2 className={`info__card__id color-${pokemon?.types[0].type.name} `}>#{pokemon?.id}</h2>

      <div className='info__card__box__name'>
        <hr className='info__card__hr1' />
        <h2 className={`info__card__name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
        <hr className='info__card__hr2'/>
      </div>
      <ul className='info__card__size'>
        <li><span className='info__card__size__title'>Weight</span><span className='info__card__size_p'>{pokemon?.weight}</span></li>
        <li><span className='info__card__size__title'>Height</span><span className='info__card__size_p'>{pokemon?.height}</span></li>
      </ul>
      <div className='card__type__container'>
        <h3 className='card__type__title'>Kind</h3>
        <h3 className='card__type__title'>Skills</h3>
      </div>
      <div className='card__ul__container'>
        <ul className='card__types__box'>
          {
            pokemon?.types.map(type =>(
              <li className='card__types1' key={type.type.url}><span className='info__card_1'>{type.type.name}</span></li>
            ))
          }
        </ul>

        <ul className='card__types__box'>
          {
            pokemon?.abilities.map(ability=> (
              <li className='card__abilities' key={ability.ability.url}>{ability.ability.name}</li>
            ))
          }
        </ul>
      </div>
      <div className='card__stats__container'>
        <h3 className='card__stats'>Stats</h3>
        <hr className='card__stats__hr' />
        <img className='card__stats__pokebolita' src="../public/pokebolita.png" alt="" />
      </div>
      <ul className='card__stats__box'>
        {
          pokemon?.stats.map(statInfo => (
            <li className='card__stats__list' key={statInfo.stat.url}><span className='stats__label'>{statInfo.stat.name}</span><span className={`stats__value${pokemon?.types[0].type.name}`}>
             {statInfo.base_stat}/150</span></li>
             
          ))
          
        }
        
      </ul>
<div className='move__container'>
  <div className='card__stats__container'>
    <h3 className='card__stats'>Movements</h3>
    <hr className='card__stats__hr' />
    <img className='card__stats__pokebolita' src="../pokebolita.png" alt="" />
  </div>
  <ul className='info__move__ul'>
    {
      pokemon?.moves.map(statInfo =>(
        <li className='info__move__list' key={statInfo.move.url}><span className='stats__label'>{statInfo.move.name}</span></li>
      ))
    }
  </ul>

</div>
    </div>
    </>
  )
}

export default PokemonDetailPage