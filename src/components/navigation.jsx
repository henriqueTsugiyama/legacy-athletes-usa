import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleButton } from '../reusableComponents/ToggleButton'
import { switchLangReq } from '../../src/store/modules/lang/actions'
export const Navigation = (props) => {

  const [selected, toggleSelected ] = useState(false);
  const { langReducer } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(props.data)

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
              selected={langReducer.lang} 
              toggleSelected={()=> {
                handleToggle()
              }}
              />
            </li>
            
            <li>
              <a href='#features' className='page-scroll'>
                {props.data.services}
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
              {props.data.about}
              </a>
            </li>
            {/* <li>
              <a href='#services' className='page-scroll'>
                Services Details
              </a>
            </li> */}
            <li>
              <a href='#portfolio' className='page-scroll'>
                {props.data.gallery}
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
                {props.data.contact}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
