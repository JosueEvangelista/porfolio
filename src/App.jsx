import { useState } from 'react'
import { Footer } from './components/FooterPorfolio'
import { Header } from './components/HeaderPorfolio'
import { Main } from './components/MainPorfolio'

export function App() {
  return (
    <>    
      <Header />
      <Main />
      <Footer/>
    </>    
  )
}
