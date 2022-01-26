import classes from './ProductPreview.module.css'
import HeartBeat from '../Images/HeartBeat.png';



const ProductPreview = (props)=>{
   
    const getHours = new Date().getHours() > 9? new Date().getHours(): "0"+ new Date().getHours();
    const getMinutes = new Date().getMinutes() > 9? new Date().getMinutes() : "0"+ new Date().getMinutes();
return(
<div className={classes.Preview}>
    <img src= {props.currentPreviewImage}alt="Preview" />

    {props.showHeartBeat? <div className={classes.HeartSection}>
        <img className={classes.HeartImg} src={HeartBeat} alt="HeatIcon" />
        <p className={classes.Beat}>70</p>
    </div>
    :<div className={classes.TimeSection}>{`${getHours}:${getMinutes}`}</div>
}
    {/* <div className={classes.TimeSection}>{`${getHours}:${getMinutes}`}</div>
    {<div className={classes.HeartSection}>
        <img className={classes.HeartImg} src={HeartBeat} alt="HeatIcon" />
        <p className={classes.Beat}>70</p>
    </div> } */}
</div>
)
}

export default ProductPreview