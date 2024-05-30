import  { useRef } from 'react'
import { setTrainer } from '../../store/states/trainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const FormTrainer = () => {

    const trainerInput = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainer(trainerInput.current.value.trim()));
        navigate('/pokedex')
    }
  return (
    <form className='home__form' onSubmit={handleSubmit}>
        <input className='home__input' ref={trainerInput} type="text" />
        <button className='home__button'>Lets Start</button>
    </form>
  )
}

export default FormTrainer