import React from 'react'
import SearchBar from '../searchBar/searchBar'
import './Header.css'

const Header = () => {
    return (
        <div className="backgroundBlue" >
            <h1 className="title1">Mini<span className="title2">Edu</span></h1>
            <div className="searchBarHeader">
                <SearchBar />
            </div>
        </div>
    )
}

export default Header