import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>
    {
      let newText = textState.toUpperCase();
      setTextState(newText);
 console.log("cikcked upper case button " +textState)
  }
 const handleLowClick =()=>{
   let newText= textState.toLowerCase();
   setTextState(newText);
 }

  const handleOnChange=(event)=>{
     console.log('there is a change seen ');
     setTextState(event.target.value)
  }
  const [textState, setTextState ]= useState('enter text here');

  //textState="new text "; -wrong way
  ////textState(new text); - correct way 
    return (
        <div>
          
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <div className="container">
<label htmlFor="myTextBox" className="form-label">{props.heading}</label>
  <textarea className="form-control" id="myTextBox" rows="8" value={textState} onChange={handleOnChange}></textarea>
  <br/>
  <button className= 'btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
  <button className= 'btn btn-primary mx-2' onClick={handleLowClick}>Convert to lowercase</button>
    </div>
    
        </div>
        
         <div className="container">
           <h1>your text summary</h1>
           <p>There are {textState.split(" ").length} words and {textState.length} characters </p>
           <p>{0.008*textState.split(" ").length} minutes to read the typed text </p>
           <h2>preview</h2>
         <p>{textState}</p>
  
         </div>
         </div >
    )
}
