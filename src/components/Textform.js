import React,{useState} from 'react'
export default function Textform(props) {
    const handleUpClick=()=>{
     let newText=text.toUpperCase();
     setText(newText);
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
       }
       const handleClearClick=()=>{
        let newText='';
        setText(newText);
       }
    const handleOnChange=(event)=>{
        setText(event.target.value);
       }
    const handleCopy= () =>{
        var text=document.getElementById("my box");
        text.select();
        navigator.clipboard.writeText(text.value);
       }
   
    const[text,setText]=useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3 my-3">
  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
   color:props.mode==='dark'?'white':'#042743'}} id="my box" rows="8"></textarea>
  </div>
  <button className="btn btn-dark mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-dark mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-dark mx-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-dark mx-2" onClick={handleCopy}>Copy Text</button>
  </div>
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Your Text Summary</h2>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p> {0.008*text.split(" ").length } Minutes Read</p>
    <h2>Preview</h2>
    <p>{ text.length>0?text:"Enter Something to Preview here"}</p>
  </div>
  </>
  )
}
