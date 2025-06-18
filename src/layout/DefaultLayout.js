import React from 'react'
import Navbar from './partials/Navbar'
import Footer from './partials/Footer'
import "../CSS/defaultlayout.css";
import { Outlet} from 'react-router-dom'

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <header className='header mb-2'>
        <Navbar />
         </header>

      < main className='main flex-grow-1'> //sticky layout behavior
      {children}
      <Outlet />
      </main>

      <footer className='footer mt-auto'>
       <Footer />
       </footer>
    </div>
  )
}

export default DefaultLayout
