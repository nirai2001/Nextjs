'use client'
import Link from 'next/link';

import classes from './page.module.css';
import ImageSlideshow from './Components/images/image-slideshow';
import { useState } from 'react';
import Modal from './Components/Modal/Login';
import Login from './Components/Modal/Login';
import Register from './Components/Modal/Register';


export default function Home() {
  const [isClick,setIsClick] = useState(false);
  const [currentForm, setCurrentForm] = useState('login');
  function handleClick(){
    setIsClick(true);
  }

  function toggleForm(formName){
    setCurrentForm(formName);
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
        <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Find the best of professionals</h1>
            <p>Professionals from all over India.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/Partners">Join varna</Link>
            {!isClick && <button onClick={handleClick}>Explore Professions</button>}
            {isClick && currentForm === 'login' && <Login onFormSwitch={toggleForm}/>}
            {isClick && currentForm === 'register' && <Register onFormSwitch={toggleForm}/>}
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            content 1
          </p>
          <p>
            content 2
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Varna?</h2>
          <p>
            content 1
          </p>
          <p>
            content 2
          </p>
        </section>
      </main>
    </>
  );
}