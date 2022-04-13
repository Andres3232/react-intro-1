import React from 'react'
import '../assets/css/Footer.css'
export const Footer = (props) => {
  console.log(props.children);
  
  return (
    <footer className='footer'>
        
        <h2> Soy el componente Footer</h2>
        {props.children}
    </footer>
  )
}
