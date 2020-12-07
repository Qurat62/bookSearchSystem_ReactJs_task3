import React  from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Menu from './Menu.js';
import Home from './Home.js';
import BookDetails from './BookDetails.js';
import SearchArea from './SearchArea.js';
import Section from './Section.js';
import FormSection from './FormSection.js';
import LastSection from './LastSection.js';
import Heading from './Heading.js';
import Footer from './Footer.js';
import { propTypes } from 'react-bootstrap/esm/Image';


function App() {
  return (

    <div className="wrapper">
<Router>
    <Switch>
        {
        /* <Route exact path="/" exact component={App} /> */}
        
        <Route path="/Home" component={Home}/>
        {/* <Route path="/Detail" render={props=> <Detail {...props} ></Detail> }/> */}
        <Route path="/BookDetails" component={BookDetails}/>
        <Route path="/Section" component={Section} />
        <Route path="/FormSection" component={FormSection} />
        <Route path="/SearchArea" component={SearchArea}/>
        <Route path="/Menu" component={Menu}/>
        <Route path="/Heading" component={Heading}/>
        <Route path="/LastSection" component={LastSection}/>
        <Route path="/Footer" component={Footer} />
   
    </Switch>
</Router>
    </div>
  
  );
}

export default App;
