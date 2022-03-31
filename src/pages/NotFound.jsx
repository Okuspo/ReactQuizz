import React from 'react'
import HomeButton from '../components/HomeButton'

const NotFound = () => {
  return (
    <div className='not-found'>
    <h1>Oups !</h1>
    <div className='not-found-container'>
      La page que vous demandez n&apos;existe pas. <br/>
      Cliquez sur le bouton Home pour revenir au menu. &#128521;
    </div>
    <HomeButton />
    </div>
  )
}

export default NotFound
