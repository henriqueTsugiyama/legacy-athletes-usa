import React, {useState, useEffect} from 'react';


export const Questionnaire = ()=> {
    return (
        <div id='questionnaire'>
            <form className='form-horizontal'>
                <div className='form-group'>
                    <label className='form-label'>First name: </label>
                    <input class='form-control' type='text' />
                </div>

                <div className='form-group'>
                    <label>Last name: </label>
                    <input class='form-control' type='text'/>
                </div>
                
                <div className='form-group'>
                    <label>Email: </label>
                    <input class='form-control' type='text'/>
                </div>

                <div className='form-group'>
                    <label>Sport: </label>
                    <input class='form-control' type='text'/>
                </div>

                <div className='form-group'>
                    <label>Area of study: </label>
                    <input class='form-control' type='text'/>
                </div>
            </form>
        </div>
    );
}