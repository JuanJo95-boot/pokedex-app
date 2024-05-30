import React from 'react'
import FormTrainer from '../components/shared/FormTrainer'
import '../components/shared/PokedexPage/style/HomePage.css'
const HomePage = () => {
  return (
    <>
    <div className='Home__container'>
        <img className='image__home__title' src="../public/HomeTitlepokedex.png" alt="" />
        <h2 className='home__salutation'>Hi trainer !</h2>
        <p className='home_p'>To see pokemon's information, tell me your trainer name</p>
        <FormTrainer />
    </div>
    <footer className='home_footer'>
    <img className='img__home__footer' src="../public/homeImageFooter.png" alt="" />
  </footer>
  </> 
  )
}

export default HomePage