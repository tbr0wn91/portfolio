import React from 'react';
import '../components/Header.scss';

export default function Header(){
    return(
        <div>
            <header className="header-container">
               <div className="menu-container">
                   <h1>Thomas Brown</h1>
                   <div>
                       <h1>Contact</h1>
                       <ul>
                           <li>Email:</li>
                           <li>Phone:</li>
                           <li>LinkedIn</li>
                       </ul>
                   </div>
               </div>
            </header>
        </div>
    )
}