import './style.scss';

import { useState } from 'react';
import Img from './portfolio-components';
import { design } from './utils';


function Portfolio(){
    const [item,setItem] = useState(design)


   
    return(
        <div className='L-portfolio'>
            <div className='L-poop'>
            <h1 className='L-h3'>Our Portfolio</h1>
    <div className='L-l'></div>
    </div>
<div className='L-img-block'>

{item.map(el => <Img key={el.id} image={el}/>)}
</div>
        </div>
    )
}

export default Portfolio