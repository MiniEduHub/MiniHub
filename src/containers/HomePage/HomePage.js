import React from 'react';
import Header from '../../components/Header/Header'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="homePage">
            <Header />
            <div className="content">
                <h2>Featured</h2>
                <h2>Genres</h2>
            </div>
        </div>
    )
}

export default HomePage