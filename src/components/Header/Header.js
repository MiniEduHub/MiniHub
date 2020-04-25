import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './Header.css'

const Header = () => {
    return (
        <div className="backgroundBlue" >
            <div className="miniEduIcon"></div>
            <div className="searchBarHeader">
                <SearchBar />
            </div>
        </div>
    )
}

export default Header

