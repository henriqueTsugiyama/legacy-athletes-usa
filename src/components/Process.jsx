

export const Process = (props) => {
    return(
        <div id='process' className=' well-lg text-center process-section' >
            <h2>{props.data.headers.heading}</h2>
            <h3>{props.data.headers.description}</h3>
            {
                props.data.steps.map((step, i) => (
                    <div className='panel-body'>
                            <i className={step.image} aria-hidden="true"></i>
                            <h4>{step.heading}</h4>
                            <p>{step.description}</p>
                    </div>))

            }
            
           
    
        </div>
    )
}