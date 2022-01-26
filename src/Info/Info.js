// import react from "react"
// import ProductData from "../Utils/ProductData"
import classes from './Info.module.css'

const Info = (props)=>{
  // console.log(props.data)
  const colorOptions = props.data.colorOptions.map( (item, index)=>{
    const classImg = [classes.OptionProduct];
     if(index === props.currentImgPos){
      classImg.push(classes.SelectedProduct);
    }
        return(
          <img key={index} onClick={()=>props.onClickProductImg(index)} className={classImg.join(" ")} src={item.imageUrl} alt={item.styleName} />
          
        )
  } )

  const buttonOptions = props.data.featureList.map( (item, index)=>{
    const btnClasses = [classes.FeaturesBtn];

    if(item === props.featureBtn){
      btnClasses.push(classes.FeaturesBtnText)
    }
    return(
      <button key={index} onClick={()=>props.showHeartBeat(item)} className={btnClasses.join(' ')}>{item}</button>
    )
  })
    return(
        <div>
        <h1 className={classes.Title}>{props.data.title}</h1>
        <p className={classes.Description}>{props.data.description}</p>

        <h3 className={classes.HeadingStyle}>Select Color</h3>
        <div className={classes.ProductOptions}>
         {colorOptions}
        </div>

        <div className={classes.Features}>
          <h3 className={classes.HeadingStyle}>Features</h3>
           {buttonOptions}
           {console.log(buttonOptions)}
        </div>

          <button className={classes.BookBtn}>Book Now</button>
          </div>
    )
}


export default Info