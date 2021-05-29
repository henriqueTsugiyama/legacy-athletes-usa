export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='column'>
              <div className=' col-xs-12 col-md-8 intro-text'>
                <h1>
                  {/* {props.data ? props.data.title : 'Loading'} */}
                  <span><img src={props.data.image} alt=""/></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  {props.data.learnMore}
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
