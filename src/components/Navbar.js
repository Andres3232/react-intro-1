import React from 'react'
import PropTypes from 'prop-types'
import '../assets/css/Navbar.css'
// const title = React.createElement(
//     'h2',
//     null,
//     'El componente navbar'
// )
export const Navbar = (props) => {
//console.log(props);

  
  return (
      //title
    //<h1> Hola soy el componente Navbar</h1> //jsx
    <nav className='navbar'>
        <ul>
           {
             props.links.map((link,i) => {
               return <li key={i}> <a href={link.url}> {link.text }</a> </li>
             })
           }
        </ul>
    </nav>
  )
}

Navbar.propTypes = {
  links: PropTypes.array.isRequired
}

// Navbar.defaultProps = {
//   links : []
// }


// return (
//   //title
// //<h1> Hola soy el componente Navbar</h1> //jsx
// <nav className='navbar'>
//     <ul>
//         <li> <a href='/'>Home </a> </li>
//         <li> <a href='/'>About </a> </li>
//         <li> <a href='/'>Contact </a> </li>
//     </ul>
// </nav>
