import React from 'react'

import { Album1, Album2, Album3, Album4, Album5 } from '../img/Library'

class Carousel extends React.Component {
  render () {
    return (
      <div class='container'>
        <div class='row'>
          <div class='col-12'>
            <div
              id='carouselExampleIndicators'
              className='carousel slide'
              data-ride='carousel'
            >
              <ol className='carousel-indicators'>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='0'
                  className='active'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='1'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='2'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='3'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='4'
                ></li>
              </ol>
              <div className='carousel-inner text-center'>
                <div className='carousel-item active'>
                  <img src={Album1} alt='Album 1' />
                </div>
                <div className='carousel-item'>
                  <img src={Album2} alt='' />
                </div>
                <div className='carousel-item'>
                  <img src={Album3} alt='' />
                </div>
                <div className='carousel-item'>
                  <img src={Album4} alt='' />
                </div>
                <div className='carousel-item'>
                  <img src={Album5} alt='' />
                </div>
              </div>
              <a
                className='carousel-control-prev'
                href='#carouselExampleIndicators'
                role='button'
                data-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a
                className='carousel-control-next'
                href='#carouselExampleIndicators'
                role='button'
                data-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Carousel
