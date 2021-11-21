import React,{useState} from 'react'

export default function About() {

const [aboutStyle, setAboutStyle] = useState({
  color: 'black',
  backgroundColor: 'white'
})

const[btnText, SetBtnText]= useState('Enable Dark Mode')


  const toggleStyle= ()=>{
   if(aboutStyle.color==='black'){
     setAboutStyle({
       color:'white',
       backgroundColor: 'black',
       border: '1px solid white'
     })
     SetBtnText('Enable light mode')
   }
   else {
    setAboutStyle({
      color: 'black',
      backgroundColor: 'white'
    })
    SetBtnText('Enable dark mode')

   }
 } 
    return (
        <div>
            <div className='container' style={aboutStyle}>
            <h2 className= "My-3">About React-Ninja</h2>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={aboutStyle} >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={aboutStyle}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is React- Ninja ?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"  data-bs-parent="#accordionExample">
      <div className="accordion-body" style={aboutStyle} >
        <strong>A React Learning project </strong> It is small project that demonstrate the components and features of react and it helps us to understand what are the features we are using in the project.
        <ul>
          <li>Home project</li>
          <li>Text Transform</li>
          <li>State and Props  </li>
          <li>Dark Mode</li>
          <li>About us with accordion bootstrap components</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={aboutStyle} >
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={aboutStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Why to Use React-Ninja?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={aboutStyle} >
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={aboutStyle}  >
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={aboutStyle}  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Who can Use React-Ninja?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"
    style={aboutStyle} >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

<div className="container my-3">
<button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
</div>
        </div>
        </div>
    )
}
