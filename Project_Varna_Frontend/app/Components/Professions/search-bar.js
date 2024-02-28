'use client'
import classes from './search-bar.module.css'
import React, { useState } from 'react';

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false); 

  const handleClick = () => {
    setIsOpen(!isOpen); 
  };

  function handleOnChange(){
    
  }

  return (
    <div className={classes.searchbarcontainer}>
      <input type="text" className={classes.searchinput} placeholder="Search professionals near you..." onChange={handleOnChange} />
      {!isOpen &&<button className={classes.searchbutton} onClick={handleClick}>
        SEARCH
      </button>}
      {isOpen && (
        <ul >
          <button className={classes.searchbutton}>Rating</button>
          <button className={classes.searchbutton}>City</button>
        </ul>
      )}
    </div>
  );
}