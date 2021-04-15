import React from 'react';
import './CgpaComponent.css'


function CgpaComponent(props){
    return <>
    
      <input className='input-div' type='text' placeholder='Semester No.'/> 
      <input 
      className='input-div'
        type='text' 
        placeholder='Sgpa' 
        value={props.totalSgpa}
        onChange={ (event) => props.handleSgpa(event,props.index)}
      
      />
      <input 
      className='input-div'
        type='text' 
        placeholder='total credits' 
        value={props.totalCredits}
        onChange={ (event) => props.handleTotalCredits(event,props.index)}
      />
      
      <br/>
     </>
}

export default CgpaComponent;