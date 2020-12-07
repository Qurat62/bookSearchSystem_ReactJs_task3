import React from 'react';
import './App.css';
import './styles.css';
import Menu from './Menu.js';
import Footer from './Footer.js';
import Section from './Section.js';
import LastSection from './LastSection.js';
import Heading from './Heading.js';
import SearchArea from './SearchArea.js';


// const { handle } = this.props.match.params
// const { fromNotifications } = this.props.location.state;
class BookDetails extends React.Component {
  
    componentDidMount () {
    
      const { SearchArea } = this.props.match.params
      const { authors } = this.props.location.state
  
    
    }
    render() {
        return(
     
        <div className="">
             <header className="BookDetails-header">
       <Menu></Menu>
      </header>     
    
      <Section></Section>
      <Section></Section>
      <div className="card-container">
        
             
             <div><h4>Author:</h4><p>{this.props.location.state.authors}</p></div>
             <div><h3>Title:<label><label></label>{this.props.location.state.title}</label></h3></div>
             <div><h4>Published Date:</h4><p>{this.props.location.state.publishedDate}</p></div>
             <div> <label></label> <h4>Description:</h4><p>{this.props.location.state.description}</p></div>

</div>
<Section></Section>
      <Section></Section>
    <LastSection></LastSection>
      <Footer></Footer>
 </div>)
 }
}
export default BookDetails;
