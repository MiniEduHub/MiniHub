import React from 'react'
import SearchBar from '../searchBar/searchBar'
import './Header.css'

const Header = () => {
    return (
        <div className="backgroundBlue" >
            <div className="MiniEduicon"></div>
            <div className="searchBarHeader">
                <SearchBar />
            </div>
        </div>
    )
}

export default Header