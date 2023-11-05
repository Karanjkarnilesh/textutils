import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
    const [text,setText]=useState('');
    const handleUpClick=()=>{
        if(text.length>0)
        {
        let newText=text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to Uppercase",'success');
    }
}
    const handleLoClick=()=>{
        if(text.length>0)
        {
        let newText=text.toLowerCase()
        setText(newText);
        props.showAlert("Converted to lowercase",'success');
    }
}

    const handleClearClick=()=>{
        let newText='';
        if(text.length>0)   
    {
        setText(newText);
        props.showAlert("Clear Text Area",'success');
    }
    }
    const handleCopyClick=()=>{
        if(text.length>0)
        {
        var copyText = document.getElementById("floatingTextarea");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copy Text",'success');
    }
}
    const handleOnChange=(event)=>{
        
        setText(event.target.value);
    }
  return (
    <div>
        <div className=''  style={{color: props.mode==='dark'?'white':'black'}}>
    <div className=' container my-3'><h1>{props.heading}</h1><div className="mb-3">
          <label>TextArea</label>
    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="floatingTextarea" rows="8"></textarea>
  <button className='btn btn-primary my-3 mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
  <button className='btn btn-primary my-3 mx-1' onClick={handleLoClick}>Convert to Uppercase</button>
  <button className='btn btn-primary my-3 mx-1' onClick={handleClearClick}>Clear Text</button>
  <button className='btn btn-primary my-3 mx-1' onClick={handleCopyClick}>copy Text</button>
  </div>
  
  <div className='container'>
    <h2>Word and Character in Text</h2>
    <p>{text.split(" ").length} Words </p>
    <p>{text.length} Character</p>
  </div>
  </div>
  </div>
  
</div>
  )
}



TextForm.propTypes={
    heading:PropTypes.string.isRequired
}

TextForm.defaultProps={
    heading: "Heading is here!"
}
