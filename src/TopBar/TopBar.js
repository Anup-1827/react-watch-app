import logo from '../Images/amazon-logo.png';
import classes from './TopBar.module.css'
const TopBar = ()=>{

    return(
        <header>
        <nav className={classes.TopNav}>
          <img src={logo} className="App-logo" alt="logo" />
        </nav>
      </header>
    )
}

export default TopBar