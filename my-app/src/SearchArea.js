import React, { Component } from 'react';
import './styles.css';
import {Link} from "react-router-dom";
import  BookDetails from './BookDetails.js';


export const SearchArea=(props)=>
{
     console.log("Title",props.title);
    console.log("Authors",props.authors);
    console.log("Date",props.publishedDate);
    // console.log("Image",props.imageLinks);
    console.log("Description",props.description);
    // let obj={
    //    authors:props.authors
    // }

    return (
       
                       
            <div>

<form >

        <input type="text" onChange={props.handleSearch}    value={props.handleInput} 
                 name="ID" id="search"
                 className="golden-color-border"/>       

       
  
        <Link className="productButtonStyle button-color-brown" 
         to={{pathname:"/BookDetails/"+ props.title,
        state:{
            title:props.title,
            authors:props.authors,
            publishedDate:props.publishedDate,
            // imageLinks:props.imageLinks,
            description:props.description
        
        
        }
         }}> Search</Link>
          
        
</form>
                
            </div>
        
                     
        )
}
export default SearchArea;


   
// <form action="" onSubmit={props.searchBook}> 
// <input type="text" onChange={props.handleSearch} ></input>
// <button type="submit">search</button>       
// </form>