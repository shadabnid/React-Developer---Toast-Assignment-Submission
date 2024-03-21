
import React from 'react';
import PropTypes from 'prop-types';
import './Toast.css';
import { Trash, X,Info,Warning,WarningCircle,ThumbsUp} from "@phosphor-icons/react";




export default function Toast({ toast: { text,icon,divider,button,close },buttonAction,closeAction,notification}) {
  return (
    <>
    <div className='container'>
      <div className="main">
        <div className='global-style'>Global </div>
        <div className='name'>Toast</div>
        <div className='msg'>Message that provides simple feedback about an operation in a small popup.</div>
      </div>

    <div className='toast-container'>
      <div className='toast-default'>
       <div>{icon?
       (notification==='normal'?(<Trash size={24} />
       ):notification==='information'?(<Info size={24} />
       ):notification==='error'?(<Warning size={24} />
       ):notification==='warning'?(<WarningCircle size={24} />
       ):(
         <ThumbsUp size={24} />
         )
         
         
         )
         :(null)}
       </div>
       <div className='toast-msg'>{text}</div>
       <div>{divider?<div class="divider"></div>:null}</div>
       <div>{button?<button className='btn' onClick={buttonAction}>Button</button>:null}</div>
       <div>{close?<X size={32} onClick={closeAction} />:null}</div>
      </div>

    </div>
    </div>
        </>
    
  );
}

 Toast.propTypes = {
  
  toast: PropTypes.shape({
   
    text: PropTypes.string.isRequired,
    
    icon: PropTypes.bool,
    
    divider: PropTypes.bool,
    button: PropTypes.bool,
    close: PropTypes.bool,
  }),
  buttonAction:PropTypes.func,
  closeAction:PropTypes.func,
  notification:PropTypes.oneOf(['default','information','warning','error','success']),

 
 };