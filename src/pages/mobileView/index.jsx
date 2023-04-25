import Router from '../router';
import MobileHeader from './mobileHeader';

import './MobileView.scss'


const MobileView = () =>{
    return(
        <div className='Mobile-block'>

<MobileHeader/>
      <Router/>
        </div>
    )
}

export default MobileView