import About from '../about';
import Contact from '../contact';
import Portfolio from '../portfolio';
import Services from '../services';
import Testimonial from '../testimonial';
import './style.scss';

function Home(){
    return(
        <div className='L-home'>
            <About/>
<Services/>
<Portfolio/>
<Testimonial/>
<Contact/>
        </div>
    )
}

export default Home