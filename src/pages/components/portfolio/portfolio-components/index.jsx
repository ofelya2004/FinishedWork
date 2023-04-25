import './style.scss';

function Img(props){
    return(
        <div className='L-img-div'>
 <div className='L-img' style={{backgroundImage:`url(${props.image.img})`}}>

<p className='L-img-name'>{props.image.name}</p>
</div>
        </div>
    )
}

export default Img