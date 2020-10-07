import React from 'react'
import {
  SocialFacebook,
  SocialInstagram,
  SocialTelephone,
  SocialWebsite,
  SocialEmail,
  BadgeWhite
} from '../img/Library'

class Footer extends React.Component {
  render () {
    return (
      <footer className='py-5'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='contacts col-lg-4 col-md-6 d-flex justify-content-center order-1'>
              <ul className='list-unstyled'>
                <li>
                  <h4>Contact Info</h4>
                </li>
                <li className='media'>
                  <a href='mailto:EternalKingsMC.com'>
                    <img className='mr-2' src={SocialEmail} alt='' />
                    <div className='media-body'>EternalKingsMS@gmail.com</div>
                  </a>
                </li>
                <li className='media'>
                  <a href='https://EternalKingsMC.com'>
                    <img className='mr-2' src={SocialWebsite} alt='' />
                    <div className='media-body'>https://EternalKingsMS.com</div>
                  </a>
                </li>
                <li className='media'>
                  <img className='mr-2' src={SocialTelephone} alt='' />
                  <div className='media-body'>
                    <span>(602)753-8059</span>
                  </div>
                </li>
              </ul>
            </div>

            <Badge />
            <div className='contacts col-lg-4 col-md-6 d-flex justify-content-center'>
              <ul className='list-unstyled'>
                <li>
                  <h4>Social Media</h4>
                </li>
                {/* <li className='media'>
                  <a href='https://www.facebook.com/eternalkingsphx'>
                    <img className='mr-2' src={SocialFacebook} alt='' />
                    <div className='media-body'>
                      facebook.com/eternalkingsphx
                    </div>
                  </a>
                </li> */}
                <li className='media'>
                  <a href='https://www.instagram.com/eternalkingsphx/'>
                    <img className='mr-2' src={SocialInstagram} alt='' />
                    <div className='media-body'>@EternalKingsMS</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Copyright />
        </div>
      </footer>
    )
  }
}

function Copyright () {
  return (
    <div className='row'>
      <div className='col-12 copyright'>
        <p className='m-0 text-center text-white'>
          Copyright &copy; Eternal Kings MS
          <script type='text/javascript'>
            {document.write(new Date().getFullYear())}
          </script>
          <br />
          <sub>
            Site designed by <a href='https://rlong.io'>rlong.io</a>
          </sub>
        </p>
      </div>
    </div>
  )
}

function Badge () {
  return (
    <div className='d-flex col-lg-4 col-md-12 p45 justify-content-center align-items-center order-3'>
      <img className='outlaw-badge' src={BadgeWhite} alt='' />
    </div>
  )
}

export default Footer
