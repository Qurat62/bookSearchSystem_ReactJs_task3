import React  from 'react';
export default async function FetchApiData(userInput)
{
let  reponse =await fetch("https://www.googleapis.com/books/v1/volumes?q=harry" ,
{
"method":"GET"

})
const json=await response.json();
console.log(json);
return json;
}

 
const handleInput=(e)=>
{
  console.log(e.target.value);
  setUserInput(e);
}

 const handleSearch=(e)=>
{
  e.preventDefault();
  async  function fetchData()
  {
    let  response =await fetch("https://www.googleapis.com/books/v1/volumes?q=harry" ,
{"method":"GET"})
    const json=await response.json();
   // let response=await FetchApiData();
    response=[json];
   
    setSearchResults(response);
    
  }
  fetchData();
}

import React, { Component, useState } from 'react';
import './styles.css';
import SearchArea from './SearchArea.js';
// import FetchApiData from './FetchApiData.js';
export default function FormSection()
{
 const [userInput,setUserInput]=useState(" ");
  const [searchResults,setSearchResults]=useState([]); 
  const [books,setBooks]=useState([]); 
  
   
 const handleInput=(e)=>
{
  console.log(e.target.value);
  setUserInput(e);
}

 const handleSearch=(e)=>
{
  e.preventDefault();
  async  function fetchData()
  {
    let  response =await fetch("https://www.googleapis.com/books/v1/volumes?q=harry" ,
{"method":"GET"})
    const json=await response.json();
   // let response=await FetchApiData();
    response=[json];
   
    setSearchResults(response);
    
  }
  fetchData();
}

const handleFilter=(book)=>
{
  debugger;

  const filteredSuggestions = searchResults.filter(suggestion =>
    suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
//   let i;
//   for(i=0;i<book.items;i++)
//   {
// console.log(book.items[i]);
// if(book.items[i]===userInput)
// {
//   console.log("found a match")
// }
//   }
}

// const  Books=searchResults && searchResults.map((bookArray)=>{
// return bookArray.map((book)=>{
//   return handleFilter(book);
// })
//  })
 

        return ( 
       
            <div className="grid-container">   
                 
              <SearchArea handleInput={handleInput} 
               handleSearch={handleSearch}   />  
              

            </div> 
    
                  
        )
    

}
    
 
    




