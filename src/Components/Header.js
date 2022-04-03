import React from 'react'
import './Header.scss'
import mainphoto from '../assets/mainphoto.jpg'
import logo from '../assets/logo.jpg'
import email from '../assets/email.png'
import phonenumber from '../assets/phonenumber.png'
import facebook from '../assets/facebook.png'
import location from '../assets/location.png'



const Header = () => {
  return (

    <React.Fragment>
        
      
            <div className='navigation'>

          <img src={logo} alt="logo" className='logo'/>
          <ul>
            <li>
              <a href="mailto:Watermaster176@gmail.com">
              <img src={email} className="icons"/>
              <h4>Watermaster176@gmail.com</h4>
              </a>

            </li>
            <li>
            <a href="tel:+995591276176">
            <img src={phonenumber} className="icons"/>
            <h4>+995 591 276 176</h4>
            </a>
            </li>
            <li>
              <a href="https://www.facebook.com/watermaster.ge">
            <img src={facebook} className="icons"/>
            </a>
            </li>
            <li>
            <img src={location} className="icons"/>
            <h4>Kutaisi,Georgia</h4>
            </li>
          </ul>
          </div>

  
    <div className="relative bg-indigo-800">
    <div className="absolute inset-0">
      <img
        className="w-full h-full object-cover"
        src={mainphoto}
        alt=""
      />
      <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
    </div>
    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Water Master</h1>
      <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
      წყალანირების(კანალიზაცია) და წყლის ქსელის შეკეთება-გაწმენდა თანამედროვე ევრო
ტექნოლოგიებით.
      </p>
    </div>
  </div>




  {/* ================================================= */}



  
  </React.Fragment>
  )
}

export default Header