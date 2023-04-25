import { useState } from 'react';
import useValidation from '../../../hook/useValidation';
import './style.scss';

function Contact(){

    const [inp, setInp] = useState('')
const [inp2, setInp2] = useState('')
const [inp3, setInp3] = useState('')
const [type1, setType1] = useState('email')
const [type2, setType2] = useState('password')
const [type3, setType3] = useState('text')

const {item} = useValidation()


    return(
        <div className='L-contact'>
<div className='L-contact-div'>

    <div className='L-input-block'>
        <h2 className='L-h2'>Contact Us</h2>
<input type="name" className='L-inp' placeholder='Name' onChange={(e) =>{ 
                  setInp3(e.target.value)
                  setType3(e.target.type)

                 
                  }}/>
                   <h5 style={{color:'white',paddingLeft:'10px',fontSize:'16px'}}>{item.name}</h5>
<input type="email" className='L-inp' placeholder='Email' onChange={(e) =>{ 
                  setInp(e.target.value)
                  setType1(e.target.type)

                 
                  }}/>
                      <h5 style={{color:'white',paddingLeft:'10px',fontSize:'16px'}}>  {item.email}</h5>
<input type="text" className='L-inp' placeholder='Pone Number'/>
<input type="password" className='L-input' placeholder='Password'   onChange={(e)=> {
            setInp2(e.target.value)
            setType2(e.target.type)
          }}/>
                  <h5 style={{color:'white',paddingLeft:'10px',fontSize:'16px'}}><br />
                  {item.pass}
                  </h5>
<button className='L-btn' onClick={()=>{ 
                item.func(inp,type1)
                item.func(inp2,type2)
                item.func(inp3,type3)
                  }}>SEND</button>
</div>
</div>
<div className="L-image-contact"></div>
        </div>
    )
}

export default Contact