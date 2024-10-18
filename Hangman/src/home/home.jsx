import React from 'react'
import Letters from './Letters'
import Words from './Words'
import Header from './header/header'

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Letters/>
      <Words/>
      
    </div>
  )
}

export default Home
