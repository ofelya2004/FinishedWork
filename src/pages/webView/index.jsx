import Router from '../router';
import WebHeader from './webHeader'
import WebLogo from './webLogo';
import './WebView.scss';


const WebView = () =>{
    return(
        <div className='webheader'>
    <WebLogo/>

            <WebHeader/>
            <Router/>      
        </div>
    )
}

export default WebView