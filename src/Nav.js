import React, {useState, useEffect} from 'react'
import "./Nav.css";

const Nav = () => {
const [show, handleShow] = useState(false);

const transitionNavBar = () => {
    if(window.scrollY > 100) {
        handleShow(true);
    } else {
        handleShow(false);
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
}, []);
  return (
    <div className={`nav ${show &&"nav_black"}`}>
        <div className="nav_contents">
        <img className="nav_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>


        <img className="nav_avatar" src="https://i.pinimg.com/550x/60/80/81/60808105ca579916a1b3eda8768dd570.jpg" alt=""/>
        </div>
       
    </div>
  )
}

export default Nav