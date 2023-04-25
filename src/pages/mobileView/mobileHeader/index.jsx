import { useState } from 'react';
import './MobileHeader.scss';
import { NavLink} from 'react-router-dom';

const MobileHeader = () =>{

    const [block,setBlock] = useState('none')


    function blocks(){
        setBlock('block')
    }
    
    function none(){
        setBlock('none')
    }
    return(
        <div className='MobileHeader'>
            <div className='L-div'>
                <div className="L-open">
                <div className='L-i'></div>
           <p className='L-font'>Brainwave</p>
                </div>
                <div className="L-open" onClick={blocks}>
                <i className='icon-menu'></i>
                </div>
            </div>
            <div className='L-block' style={{display:block}}>
            <p className='l-close' onClick={none}>Close Menu</p>
    <NavLink to={'/'} className='L-contact-link'> <span className='span' onClick={none}>Home</span> </NavLink>
                <NavLink to={'/About'} className='L-contact-link' onClick={none}> <span className='span'> About</span></NavLink>
                <NavLink to={'/Portfolio'} className='L-contact-link' onClick={none}> <span className='span'> Portfolio </span></NavLink>
                <NavLink to={'/Services'} className='L-contact-link' onClick={none}> <span className='span'>Services</span></NavLink>
                <NavLink to={'/contact'} className='L-contact-link' onClick={none}> <span className='span'>Contact us</span></NavLink>
    </div>
        </div>
    )
}

export default MobileHeader