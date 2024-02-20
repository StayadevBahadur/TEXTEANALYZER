// import React from 'react'
import * as React from 'react';


export default function Alert(props) {
  const capitlaize =(word)=>{
   let cpaword = word.charAt(0).toUpperCase()+ word.slice(1);
  // let lowerWord = word.toLowerCase();
   return cpaword;
  }
  return (
    
  props.alert &&  <div className={`alert alert-${props.alert.type}`} role="alert">
       <strong>{capitlaize(props.alert.type)}</strong> : {props.alert.message}
    </div>


    
  )
}
