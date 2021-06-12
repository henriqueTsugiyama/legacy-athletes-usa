import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { useSelector } from 'react-redux'
const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)
  const {langReducer} = useSelector(state => state)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'service_by8rca8', 'template_wdagber', e.target, 'user_8GNfSzSbdSgmQ9ii1KPrW'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>{langReducer.lang !== 'en' ? "Contáctenos" : "Get in touch"}</h2>
                <p>
                  {langReducer.lang !== 'en' ? 
                  "Complete el formulario al lado para guardarmos su correo electrónico y nos pondremos en contacto con usted lo antes posible."
                  : 
                  "Please fill out the form below to send us an email and we will get back to you as soon as possible." 
                }
                  
                  
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  { langReducer.lang !== 'en' ? "Enviar" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            {/* <div className='contact-item'>
              <h3>{ langReducer.lang !== 'en' ? "Informaciones de contacto" : "Contact Info"}</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> {props.data.addressLabel}
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div> */}
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> {props.data.phoneLabel}
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> 
                  {langReducer.lang !== 'en' ? "Correo eletrónico" : "Email"}
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2020 Issaaf Kattan. Design by{' '}
            <a href='http://www.templatewire.com' rel='nofollow'>
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
