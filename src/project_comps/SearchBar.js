import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/SearchBar.css';
const SearchBar = () => {
    return ( 
        <>
        <div className="searchbar">
            <div className="search">
                <div className="searchicon"></div>
                <div className="input">
                    <input type="text"  placeholder="Search for anything"/>
                </div>
            </div>
            <div className="notification"></div>
        </div>
        </>
     );
}
 
export default SearchBar;