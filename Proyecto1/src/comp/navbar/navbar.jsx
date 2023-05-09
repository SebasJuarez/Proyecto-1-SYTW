import React from "react";
import { MenuItems } from "./menuitems";
import { Nav } from "react-bootstrap";
import './navbar.css'

export default function Navbar() {
  return (
      <Nav className="NavbarItems">
        <h1 className="Navbar-logo"><img className ="imalogo" src="https://ticketasa.gt/wp-content/uploads/2018/05/LogoPagina.png" alt="Logo asa"></img></h1>
        <ul className="menu-items">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
               <a className={item.cName} href={item.url}>
                  {item.Title}
                </a>
              </li>
            );
          })}
          <div className="botones">
          <li className="facebook"><a href=''><i className='fa fa-facebook'></i></a></li>
          <li className="twitter"><a href=''><i className='fa fa-twitter'></i></a></li>
          <li className="instagram"><a href=''><i className='fa fa-instagram'></i></a></li>
          <li className="tiktok"><a href=''><i className='fa fa-tiktok'></i></a></li>
          <li className="youtube"><a href=''><i className='fa fa-youtube'></i></a></li>
          </div>
        </ul>
      </Nav>
  );
}