import React, { useState } from 'react'

export default function TextReview(props) {

  return (
    <div className='container'>
        <div style={{"margin":"10px"}}>
        <h4>Preview :</h4>
        <textarea className="form-control bg-white" value={props.text} placeholder='Nothing for preview !' id="exampleFormControlTextarea1" rows="5"></textarea>
       
        </div>
        <h4>Word Counter :</h4>
        <div className='d-flex flex-row bd-highlight'>
            <div className='mx-3 p-2 bd-highlight bg-secondary'>
               <h3> {props.text.length} </h3>
               <p>Character</p>
            </div>
            <div className='mx-3 p-2 bd-highlight bg-secondary'>
              <h3> {props.text.split(" ").length-1} </h3> 
              <p>Words</p>
            </div>
        </div>
    </div>

  )
}
