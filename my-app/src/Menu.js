import react, { Component, createContext } from 'react';
import './styles.css';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

// <script src="https://kit.fontawesome.com/a076d05399.js"></script>
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

class Menu extends Component
{

    render() { 
        return ( 
        <div>
            <nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <label className="logo">VisionX</label>
        <ul>
            <li><Link className="active" to={"./Home"}>Home</Link></li>
            <li><Link className="" to={"./BookDetails"}>About</Link></li>
            {/* <li><a href="">About</a></li> */}
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
        </ul>
           </nav>
   
            
        </div> 
        );
    }

}
export default Menu;