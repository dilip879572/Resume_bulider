"use client"
import Image from 'next/image'
import './header.css'
import { NavLink } from 'react-bootstrap';
import logo from "../Comman/images/logo.png";
import textimages from "../Comman/images/logowithoutText.png"
import { IoHome } from "react-icons/io5";
import { IoCreateSharp } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useEffect, useState } from 'react';

import axios from 'axios';
export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);


  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const handleHomeClick = () => {
    setShowMessage(true);
    setMenuOpen(false);
    
  };


  const [userdata, setUserdata] = useState({});
    console.log("response", userdata)

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:6085/login/sucess", { withCredentials: true });

            setUserdata(response.data.user)
        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(() => {
      getUser()
  }, [])

     // logoout
     const logout = ()=>{
      window.open("http://localhost:6085/logout","_self")
  }

  return (
    <div  className='container-fluid p-0'>
    <div className='row'>
    <div className='col-sm-12'> 
     
      
       
   
      <nav class="navbar" className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="/#"> <IoHome />   Home</a></li>
             
       
                <li><a href="/contact"> <FaHeadset/>   Contact </a></li>
                <li><a href="/faqs">  ? FAQ's </a></li>

          
                <li onClick={logout}><a> Logout</a></li>                      
              
             
                {
  Object.keys(userdata).length > 0 ? (
    <>
      <li><a href="/create" style={{ width: "190px" }}> <IoCreateSharp/> Create Resume</a></li>
    
      <img className='mx-2' src={userdata?.image} style={{ width: "40px", borderRadius: "50%" }} alt="" />             
      <div>{userdata?.displayName}</div>
    </>
  ) : (
    <li><a href="/login"><FaArrowRightToBracket/> Sign in</a></li>
  )
}

            </ul>
  <Image
        src={textimages}
        width={70}
        height={70}
        className='logo'
        />
           <Image 
        src={logo}
        width={240}
        height={70}
        className='logos'
        /> 
        </div>
  </nav>
      
      </div>
    </div>
    </div>
  )
}

