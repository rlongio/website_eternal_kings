import React from 'react'

class Navbar extends React.Component {
  render () {
    return (
      <nav
        id='navbar-main'
        className='navbar navbar-expand-lg navbar-dark fixed-top bg-black'
      >
        <div className='container'>
          <a className='navbar-brand' href='/'>
            Eternal Kings MS
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='nav nav-pills ml-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#mission'>
                  Mission
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#contact_us'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
