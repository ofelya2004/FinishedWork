import './WebHeader.scss'
import { NavLink} from 'react-router-dom';

const WebHeader = () =>{

    
    return(
        <div className='Webheader'>
<div className='L-header'>
    <div className='L-block'>
    <NavLink to={'/'} className='L-contact-link'> <span className='span'>Home</span> </NavLink>
                <NavLink to={'/About'} className='L-contact-link'> <span className='span'> About</span></NavLink>
                <NavLink to={'/Portfolio'} className='L-contact-link'> <span className='span'> Portfolio </span></NavLink>
                <NavLink to={'/Services'} className='L-contact-link'> <span className='span'>Services</span></NavLink>
                <NavLink to={'/contact'} className='L-contact-link'> <span className='span'>Contact us</span></NavLink>
    </div>
    <div className='L-block1'>
        <p className='L-contact-link'>Login</p>
        <i className='icon-search'></i>
    </div>
</div>
        </div>
    )
}

export default WebHeader