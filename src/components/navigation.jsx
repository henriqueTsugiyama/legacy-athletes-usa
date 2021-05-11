import { useEffect, useState } from 'react';
import { ToggleButton } from '../reusableComponents/ToggleButton'

export const Navigation = (props) => {

  const [selected, toggleSelected ] = useState(false)
  const lang = localStorage.getItem('lang');
  useEffect(()=>{
    localStorage.setItem('lang','en');
  }, [])
  
  function handleToggle(){
    toggleSelected(!selected)
    console.log(props.data)

    if (lang == 'en'){
      return localStorage.setItem('lang', 'spa');
    }
    return localStorage.setItem('lang', 'en');
  }

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Legacy Athletes USA
          </a>{' '}
          
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <ToggleButton 
              selected={lang} 
              toggleSelected={()=> handleToggle()} 
              />
            </li>
            
            <li>
              <a href='#features' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            {/* <li>
              <a href='#services' className='page-scroll'>
                Services Details
              </a>
            </li> */}
            <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li> */}
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
