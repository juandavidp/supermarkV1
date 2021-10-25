import React from 'react'
import '../assets/styles/search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    return (
        <div className="buscador">
            <label htmlFor="search">Buscar producto: </label>
            <input name="search" id="search" type="text" className="buscador__input" placeholder="Producto" /><i className="fas fa-user"></i>
            <button className="buscador__button"><FontAwesomeIcon icon={faSearch} className="buscador__icon" /></button>
        </div>
    )
}

export default Search