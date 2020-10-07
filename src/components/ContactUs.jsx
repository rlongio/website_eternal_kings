import React from 'react'

class ContactUs extends React.Component {
  render () {
    return (
      <div id='contact_us' className='container pt-5'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='jumbotron'>
              <h2>Contact Us</h2>
              <br />
              <form
                name='message'
                method='POST'
                data-netlify-recaptcha='true'
                data-netlify='true'
              >
                <div className='form-group'>
                  <div className='row'>
                    <div className='col'>
                      <label htmlFor='first_name'>First Name</label>
                      <input
                        id='first_name'
                        name='first_name'
                        type='text'
                        className='form-control'
                        placeholder='First name'
                      />
                    </div>
                    <div className='col'>
                      <label htmlFor='last_name'>Last Name</label>
                      <input
                        id='last_name'
                        name='last_name'
                        type='text'
                        className='form-control'
                        placeholder='Last name'
                      />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email address</label>
                  <input
                    type='email'
                    name='email'
                    className='form-control'
                    id='message_email'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                  />
                  <small id='emailHelp' className='form-text text-muted'>
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className='form-group'>
                  <label htmlFor='message'>Message</label>
                  <textarea
                    name='message'
                    className='form-control'
                    id='message'
                    rows='5'
                  ></textarea>
                </div>
                <div className='form-group'>
                  <div data-netlify-recaptcha='true'></div>
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
      </div>
    )
  }
}

export default ContactUs
