import { useState } from 'react';
import useValidation from '../../../hook/useValidation';
import './style.scss';

function Footer(){
    const [inp, setInp] = useState('')
    const [type1, setType1] = useState('email')
  

    const {item} = useValidation()

return(
    <div className='L-footer-block'>
        <div className='G-container'>
<div className='L-div'>
            <div className='L-footer'>
                <h3 className='L-font'>Menu</h3>
                <div className='L-check-box'>
                <input type="checkbox" className='L-check'/><p className='L-p'>Home</p> 
                </div>
                <div className='L-check-box' >
                <input type="checkbox" className='L-check'/><p className='L-p'> About</p>
                </div>
                <div className='L-check-box'>
                <input type="checkbox" className='L-check'/><p className='L-p'>Portfolio </p> 
                </div>
                <div className='L-check-box'>
                <input type="checkbox" className='L-check'/><p className='L-p'>Services</p>

                </div>
                <div className='L-check-box'>
                <input type="checkbox" className='L-check'/><p className='L-p'> Contact Us</p>
                </div>
            
              
            </div>
            <div className='L-footer'>
            <h3 className='L-font'>Location</h3>
            <div className='L-icon'>
                <div className='L-blocks'>
<i className='icon-location' style={{color:'white',fontSize:'25px',marginTop:'18px'}}></i>
<p className='L-p'>104 loram ipusm</p>
</div>
<div className='L-blocks'>
<i className='icon-phone' style={{color:'white',fontSize:'25px',marginTop:'18px'}}></i>
<p className='L-p'>( +01 1234567890 )</p>
</div>
<div className='L-blocks'>
<i className='icon-mail-letter' style={{color:'white',fontSize:'25px',marginTop:'18px'}}></i>
<p className='L-p'>demo@gmail.com</p>
</div>
            </div>
            </div>
            <div className='L-footer2'>
            <h3 className='L-font'>Social Link</h3>
            <div className='L-icons'>
            <i className='icon-facebook-official' style={{color:'white',fontSize:'35px'}}></i>
            <i className='icon-twitter' style={{color:'white',fontSize:'35px',marginLeft:'15px'}}></i>
            <i className='icon-instagram' style={{color:'white',fontSize:'35px',marginLeft:'15px'}}> </i>
            <i className='icon-linkedin' style={{color:'white',fontSize:'35px',marginLeft:'15px'}}></i>
            </div>
            </div>
            <div className='L-footer1'>
            <h3 className='L-font'> Newsletter</h3>
            <input type="email" placeholder='Enter Your Email' className='L-inp'  onChange={(e) =>{ 
                  setInp(e.target.value)
                  setType1(e.target.type)
                  }}/>
                   <h5 style={{color:'white'}}>  {item.email}</h5>
            <button className='L-btn'  onClick={()=>{ 
                item.func(inp,type1)
                  }}>Subscribe</button>
            </div>
            </div>
      <p className='L-info'>© 2019 All Rights Reserved By Free Html Templates</p>
        </div>
    </div>
)
}

export default Footer