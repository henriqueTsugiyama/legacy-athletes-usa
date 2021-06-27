import { useSelector } from 'react-redux'

export const Team = (props) => {
  const {langReducer} = useSelector(state => state)
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
        <h2>{langReducer.lang !== 'en' ? "Conozca el equipo" : "Meet the team"}</h2>
          
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-6 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                       
                      {/* {langReducer.lang == 'en' &&
                      <>
                      <h4>{d.bio.title}</h4>
                      <p>{d.bio.text}</p>

                      <h4>{d.accomplishments.title}</h4>
                      <ul>
                        {d.accomplishments.text.map((item, index)=> (
                        <li key={index}>{item}</li>
                        ))}
                      </ul>
                      </>
                      } */}
                      
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
