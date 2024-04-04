"use client"
import { FaSwatchbook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import "./footer.css";
import Link from "next/link";
export default function Footer(){
    return(
        <div className="container-fluid p-0">
           <div className="row footer">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <div className="row">
                    <div className="col-sm-3 mt-2">
                       <center>
                       <img src="https://resume4u.io/images/logo.png" alt=""  style={{height:"80px"}}/> <br />
                       <br />
                       <span style={{color:"white",textAlign:"justify"}}>
                       Unlock Your Potential, Unleash Your Future - For Free!
                       </span> <br />
                    <FaInstagramSquare  className="fs-1 bg-light text-dark m-1 p-1 ff"  style={{borderRadius: "20px"}}
/> <FaSquareFacebook className="fs-1 bg-light boder-none  p-1 m-1" style={{borderRadius: "20px"}}/><FaLinkedin className="fs-1 bg-light p-1  m-1" style={{borderRadius: "30px,"}}/><FaSquareTwitter className="fs-1 m-1 bg-light p-1" style={{borderRadius: "20px ", zIndex:"0"}}/>
                       </center>
                    </div>
                    <div className="col-sm-3  mt-4">
                        <span className="display-7" style={{fontWeight:"bolder", color:"white",textAlign:"center"}}>
            
                        <center>
                    <h4>    Terms & Policies</h4> <br />
                    <span className="mt-5"> Disclaimer  <br />
Privacy Policy</span>
                        </center>
                        </span>
                    </div>
                 
                    <div className="col-sm-3  mt-4">
                        <span className="display-7" style={{fontWeight:"bolder", color:"white",textAlign:"center"}}>
                    <center>
                        <h4>  Company</h4>
                        <br />
                        <span>
                         <Link style={{textDecoration:"none"}} href="/">Home</Link>    <br />
About Us<br />
Create Resume<br />
                        </span>
                   
                    </center>
                        </span>
                    </div>
                 
                 
                    <div className="col-sm-3 mt-4">
                        <span className="display-7" style={{fontWeight:"bolder", color:"white",textAlign:"center"}}>
                     
                        <center>
                       
                        <h4>  Contact</h4>
                        <br />
                        <span>
                        Contact Us <br />
(+92) 8795720084
                        </span>
                        </center>
                        </span>
                
                    </div>
                </div>
                <hr style={{color:"white",height:"10px",}} />
                <center>
              <span className="display-6, text-light"style={{padding:"10px"}}>
              Copyright, Resume4U 2023. All rights reserved.
              </span>
                </center>
                <br />
            </div>
            <div className="col-sm-1"></div>
           </div>
          
        </div>
    )
}
