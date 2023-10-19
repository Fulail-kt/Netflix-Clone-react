import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import Footer from './components/Footer/Footer'
import { Orginals,Actions } from './Urls/urls'


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={Orginals} title='Netflix Orginals'/>
      <RowPost url={Actions} title='Actions' isSmall />
      <Footer/>
    </div>
  )
}

export default App
