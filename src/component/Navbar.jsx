import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';



function Navbar() {


    return (
        <>
             <div className="div">
                <header>
<div className="dib">
  
<img src="./travel3.png" alt=""/>
<Link to='#home'>Home</Link>
<Link to='#service'>Service</Link>
<Link to='#about'>About</Link>
<Link to='#contact'>Contact</Link>
            <span>
               <button><img src="./profil.png" alt="" style={{width:'40px',height:'40px'}}/></button>
            </span> 
</div>

                </header>
                
             </div>
        </>
    )
}

export default Navbar;

