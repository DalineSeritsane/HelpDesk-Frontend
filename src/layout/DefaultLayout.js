import React from 'react'
import NavbarComp from './partials/Navbar'
import Footer from './partials/Footer'
import "../CSS/defaultlayout.css";
import { Outlet} from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div className="default-layout d-flex flex-column min-vh-100">
      <header className='header mb-2'>
        <NavbarComp />
         </header>

      < main className='main flex-grow-1'> 
     
      <Outlet />
      </main>

      <footer className='footer mt-auto'>
       <Footer />
       </footer>
    </div>
  )
}

export default DefaultLayout
