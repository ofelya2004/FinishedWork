
import { Route, Routes } from 'react-router-dom';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Home from '../components/home';
import Portfolio from '../components/portfolio';
import Services from '../components/services';

// import Footer from '../components/footer';


const Router = () =>(

    <div className='L-router-block'>
        
        <Routes>
            <Route path='/' element={<Home/>} index/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Portfolio' element={<Portfolio/>} />
            <Route path='/Services' element={<Services />}/>
          
            <Route path='/contact' element={<Contact/>}/>

        </Routes>
        
        <Footer/>

    </div>
)

export default Router