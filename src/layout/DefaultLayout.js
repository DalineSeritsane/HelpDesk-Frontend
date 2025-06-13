import React from 'react'
import Navbar from './partials/Navbar'
import Footer from './partials/Footer'
import "../CSS/defaultlayout.css";

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <header className='header'>
        <Navbar />
         </header>

      < main className='main'>
      {children}
      </main>

      <footer className='footer'>
       <Footer />
       </footer>
    </div>
  )
}

export default DefaultLayout
