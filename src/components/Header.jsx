import React from 'react'
import { Logo } from '../img/Library'

class Header extends React.Component {
  render () {
    return (
      <header>
        <div className='container-fluid hero'>
          <div className='row'>
            <HeaderLogos />
            <HeaderForm />
          </div>
        </div>
      </header>
    )
  }
}

class HeaderLogos extends React.Component {
  render () {
    return (
      <div className='col-lg-8 d-flex align-items-center justify-content-center'>
        <img className='hero-logo' src={Logo} alt='' />
        {/* <img className='hero-badge' src={BadgeWhite} alt='' /> */}
      </div>
    )
  }
}

class HeaderForm extends React.Component {
  render () {
    return (
      <div className='col-lg-4 d-flex justify-content-center'>
        <div className=''>
          <div className='content hero-action mx-auto'>
            <p className='lead mb-4 text-white-100'>
              "We are a family focused brotherhood.
            </p>
            <p className='lead mb-4 text-white-100'>
              We ride together, travel together, party together and help each
              other throughout life.""
            </p>
            <p className='lead mb-4 text-white-100'>
              Send us your email address for more information.
            </p>
            <form
              name='request_for_info'
              method='POST'
              netlify-honeypot='bot-field'
              data-netlify='true'
            >
              <p className='hp'>
                <label>
                  Galaxy: <input name='bot-field' />
                </label>
              </p>
              <div className='form-group'>
                <label htmlFor='request-more-info-email'>Email address</label>
                <input
                  name='email'
                  type='email'
                  className='form-control form-control-lg'
                  id='request-more-info-email'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary btn-lg form-control form-control-lg'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
