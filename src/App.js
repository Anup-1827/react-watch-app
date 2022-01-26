
import classes from './App.module.css';
import ProductData from './Utils/ProductData';
import ProductPreview from './ProductPreview/ProductPreview';
import Info from './Info/Info'
import TopBar from './TopBar/TopBar';
import react from 'react';


class App  extends react.Component {
  state = {
    productData : ProductData,
    currentPreviewImage : "https://imgur.com/iOeUBV7.png",
    showHeartBeat : false,
    currentImgPos : 0,    
    featureBtn : "Time"
  }
  onClickProductImg =(pos)=>{
    const updateImageUrl = this.state.productData.colorOptions[pos].imageUrl
    this.setState({
      currentPreviewImage : updateImageUrl,
      currentImgPos : pos
    })
  }

  // Should Component Update
  shouldComponentUpdate(nextProps, nextState){
      // console.log("Next State ==> " +nextState);
      // console.log("Prev State ==> " + this.state);
      if(nextState.currentImgPos === this.state.currentImgPos)
      {return false}
    return true
  }

  Display = (item)=>{
    this.setState({
      showHeartBeat : !this.state.showHeartBeat,
      featureBtn : item
    })
  }
  render(){
    return (
      <div className="App">
        <TopBar/>
          {/* {console.log("Render")} */}
        <div className={classes.MainContainer}>
  
          <div className={classes.Preview}>
          <ProductPreview currentPreviewImage={this.state.currentPreviewImage}  showHeartBeat={this.state.showHeartBeat}/>
          </div>
  
          <div className={classes.Info}>
           <Info data ={this.state.productData} onClickProductImg={this.onClickProductImg} currentImgPos={this.state.currentImgPos} showHeartBeat={this.Display} featureBtn={this.state.featureBtn}/>
          </div>
          
        </div>
      </div>
    );
  }
 
}

export default App;
