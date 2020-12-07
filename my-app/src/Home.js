import React from 'react';
import './App.css';
import './styles.css';
import Menu from './Menu.js';
import Footer from './Footer.js';
import Section from './Section.js';
import FormSection from './FormSection.js';
import LastSection from './LastSection.js';
import Heading from './Heading.js';


function App() {
  return (

    <React.Fragment>
      <header className="App-header">
       <Menu></Menu>
      </header>     
      <Heading></Heading>
      <Section></Section>
      <Section></Section>
      <FormSection></FormSection>
      <LastSection></LastSection>
        <Footer></Footer>
      
        </React.Fragment>
  );
}

export default App;
