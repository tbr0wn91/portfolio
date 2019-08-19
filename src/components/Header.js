import React from 'react';
import '../components/Header.scss';

export default function Header(){
    return(
        <div>
            <header className="header-container">
               <div className="menu-container">
                   <h1 id="name">Thomas Brown</h1>
                   <div className="contact-container">
                       <h1>Contact</h1>
                       <ul>
                           Email:<li>thomasbrown9101@gmail.com</li>
                           Phone:<li>408-710-9756</li>
                           <li>LinkedIn</li>
                       </ul>
                   </div>
               </div>
            </header>
        </div>
    )
}