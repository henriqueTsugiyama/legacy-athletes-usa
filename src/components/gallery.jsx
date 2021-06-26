export const Gallery = (props) => {
 
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>{props.data.Navigation.gallery}</h2>
          <p>
            {props.data.Gallery.description}
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio-legacy/baseball.JPG'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Baseball</h4>
                    </div>
                    <img
                      src='img/portfolio-legacy/baseball.JPG'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio-legacy/champs.JPG'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4> Men's Soccer</h4>
                    </div>
                    <img
                      src='img/portfolio-legacy/champs.JPG'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio-legacy/wonder-legacy.JPG'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Practice field</h4>
                    </div>
                    <img
                      src='img/portfolio-legacy/wonder-legacy.JPG'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
           
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-legacy-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio-legacy/owls-tennis-lineup.JPG'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Men's tennis lineup</h4>
                    </div>
                    <img
                      src='img/portfolio-legacy/owls-tennis-lineup.JPG'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            


            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio-legacy/soccer-celebration.JPG'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Women's Soccer</h4>
                    </div>
                    <img
                      src='img/portfolio-legacy/soccer-celebration.JPG'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio-legacy/volleyball.JPG'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Volleyball</h4>
                    </div>
                    <img
                      src='img/portfolio-legacy/volleyball.JPG'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio-legacy/owls-tennis.JPG'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Owls conference champions</h4>
                    </div>
                    <img
                      src='img/portfolio-legacy/owls-tennis.JPG'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio-legacy/womens-stanford-soccer.JPG'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Women's soccer Stanford</h4>
                    </div>
                    <img
                      src='img/portfolio-legacy/womens-stanford-soccer.JPG'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>

            

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio-legacy/track-and-field.JPG'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Track and Field</h4>
                    </div>
                    <img
                      src='img/portfolio-legacy/track-and-field.JPG'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div> 

            
          </div>
        </div>
      </div>
    </div>
  )
}
