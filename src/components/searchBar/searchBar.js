import React from 'react'
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa';

const SearchBar = () =>{
    return(
        <div className="backgroundInputText">
            <FaSearch className="icon"/>
            <input className="inputText" type="text" placeholder="What would you like to learn today?">
            </input>
        </div>
    )
}

export default SearchBar