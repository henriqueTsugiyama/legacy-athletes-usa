import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleButton } from '../reusableComponents/ToggleButton'
import { switchLangReq } from '../../src/store/modules/lang/actions'

export const Navigation = (props) => {

  const [selected, toggleSelected ] = useState(false);
  const { langReducer } = useSelector(state => state);
  const { Navigation, Contact } = props.data; 
  const dispatch = useDispatch();
  

  useEffect(()=>{


  }, [])
  
  function handleToggle(){
    toggleSelected(!selected)
    
    if (langReducer.lang == 'en'){
      return dispatch(switchLangReq('spa'));
    }
    return dispatch(switchLangReq('en'));
  }

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        
        <div className='container'>
          <div
            // className=''
            // id='bs-example-navbar-collapse-1'
          >
            <div className='nav-status'>
              <ul className='nav navbar-nav navbar-left'>
                      <li>
                        <a href={props.data ? Contact.facebook : '/'}>
                          <i className='fa fa-facebook fa-1x'></i>
                        </a>
                      </li>
                      <li>
                        <a href={props.data ? Contact.instagram : '/'}>
                          <i className='fa fa-instagram fa-1x'></i>
                        </a>
                      </li>
                    </ul>
            
              <ul className='nav navbar-nav navbar-right'>
                <li>
                  <ToggleButton 
                  selected={langReducer.lang} 
                  toggleSelected={()=> {
                    handleToggle()
                  }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>


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
              <a href='#features' className='page-scroll'>
                {Navigation.services}
              </a>
            </li>
            <li>
              <a href='#process' className='page-scroll'>
                {Navigation.process}
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
              {Navigation.about}
              </a>
            </li>
            {/* <li>
              <a href='#services' className='page-scroll'>
                Services Details
              </a>
            </li> */}
            <li>
              <a href='#team' className='page-scroll'>
                {Navigation.team}
              </a>
            </li>
            
            <li>
              <a href='#portfolio' className='page-scroll'>
                {Navigation.gallery}
              </a>
            </li>
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li> */}
            
            <li>
              <a href='#contact' className='page-scroll'>
                {Navigation.contact}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
