import React, { Component } from "react";
import "./styles.css";
import SearchArea from "./SearchArea.js";




class FormSection extends Component {
  static defaultProperty = {
    suggestions: [],
  };
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      userInput: "",
      activeSuggestion: 0,
      filteredSuggestions:[],
      showSuggestions: false,
      authors:'',
      title:'',
      publishedDate:'',
      // imageLinks:'',
      description:'',
      limitTo: 3
    };
  }

  // call service : Handle Api

  /********************************************************* */
  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({
      userInput: e.target.value,
    });
  };

  handleSearch = (e) => {
    
    const userInput = e.currentTarget.value;

    fetch("https://www.googleapis.com/books/v1/volumes?q=" + userInput, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState(
          {
            books: [...response.items],
          },

          () => {
        
            console.log("setBooks", this.state.books);
            console.log("userIn", userInput);
            this.handleFilter(this.state.books, userInput);
     
          },
          
          
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleFilter = (books, userInput) => {
    if (books === "") {
      alert("no data found");
    } else {
    


      this.setState({
        userInput: userInput,
        filteredSuggestions: books,
        showSuggestions: true,
      });
    }
  };

onLoadMore=()=>
{

this.setState({limitTo:this.state.limitTo+3})
}

  // clickme = (e) => {
  //   this.setState({
  //     activeSuggestion: 0,
  //     filteredSuggestions: [],
  //     showSuggestions: false,
  //     userInput: e.currentTarget.innerText,

  //   });
  // };
  updateInputValue = (e) => {
    debugger;
    this.setState({
      userInput: e.currentTarget.innerText,
      title:e.currentTarget.innerText,
      authors:e.target.attributes.authors.nodeValue,
      publishedDate:e.target.attributes.publishedDate.nodeValue,
      // imageLinks:e.target.attributes.imageLinks.thumbnail,
      description:e.target.attributes.description.nodeValue,
      showSuggestions: false,
    });
  };

  render() {
    console.log("books", this.state.books);
    console.log("select", this.state.value);
    console.log("userInput", this.state.userInput);
    const {
      handleInput,
      handleSearch,
      handleFilter,
   
      clickme,
      state: {
        activeSuggestion,
        filteredSuggestions,     
        showSuggestions,
        userInput,
        title,
        authors,
        publishedDate,
        // imageLinks,
        description,
        limitTo
      },
    } = this;

    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      // if (filteredSuggestions.length) {
        //if suggestionlist is > 5 then add scroller to list
        
        if (this.state.filteredSuggestions.length) {
        
        suggestionsListComponent = (
          <ul  className="suggestions">
            {this.state.filteredSuggestions.slice(0, this.state.limitTo).map((suggestion, index) => {
              let className;

              if (index === activeSuggestion) {
                className = "";
                              
                
              }

              return (
                <div   >
                   <li
                 
                  key={suggestion.id}
                  
             title={suggestion.volumeInfo.title}
             authors={suggestion.volumeInfo.authors}
             publishedDate={suggestion.volumeInfo.publishedDate}
             description={suggestion.volumeInfo.description}
            //  imageLinks={suggestion.volumeInfo.imageLinks.thumbnail}
                  onClick={this.updateInputValue}
                >
                  {suggestion.volumeInfo.title}
                </li>
                
                </div>

              
              );
            })}
          <a onClick={this.onLoadMore}>Load</a>
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="suggestions">
            <em>No suggestions</em>
          </div>
        );
      }
    }

    return (
      <div className="grid-container">
        {console.log(userInput)}

        <SearchArea
          handleInput={this.state.userInput}
          handleSearch={this.handleSearch}
          handleFilter={this.handleFilter}
          authors={this.state.authors}
          title={this.state.title}
          publishedDate={this.state.publishedDate}
          // imageLinks={this.state.imageLinks}
          description={this.state.description}
          />

        <div className="">
          {suggestionsListComponent}
          
          </div>
    
      </div>
    );
  }
}

export default FormSection;
