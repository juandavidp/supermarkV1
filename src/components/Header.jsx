import React from 'react'
import Menu from './Menu'
import '../assets/styles/header.scss'

const Header = () => {
    return (
        <div className="header" id="header">
            <div className="header-container">
                <div className="logo" />
                <h2>Super<span>Mark</span></h2>
            </div>
            <Menu />
        </div>
    )
}

export default Header