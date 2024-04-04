"use client"
import { FaChevronRight } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { IoMdContacts } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { Slider } from 'antd';
import { MdDeleteForever } from "react-icons/md";

import "./page.css";
import Link from "next/link";
export default function page() {
    const [showInputField, setShowInputField] = useState(false);
    const [showInputFielg, setShowInputFielg] = useState(false);
    const [github, setGithub] = useState('')
    const [showstackoverflow, setShowstackoverflow] = useState(false);
    const [showstack, setShowstack] = useState('');
    const [showgithubs, setShowgithub] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [skype, setSkype] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [output, setOutput] = useState('Dilip');
    const [isContainerVisible, setIsContainerVisible] = useState(true);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const toggleInputField = () => {
        setShowInputField(!showInputField);
        setInputValue('');
    };

    const handleskype = (e) => {
        setSkype(!skype);
        setSkype('');
    }



    const toggleInputFieldg = () => {
        setShowInputFielg(!showInputFielg);
        setSkype('');
    };

    const toggleInputFieldgit = () => {
        setShowgithub(!showgithubs);
        github('');
    };

    const handlegithub = (e) => {
        setGithub(!github);
        setGithub('');
    }

    const togglestackoverflow = () => {
        setShowstackoverflow(!showstackoverflow);
        showstack('');
    };

    const handlstack = () => {
        setShowstack(!showstack);
        setShowstack('')
    }


    const circleStyle = {
        height: "100px",
        width: "1000px",
        backgroundColor: "black",
        borderRadius: "50%",
        color: "white",
        textAlign: "center",
        padding: "10px",
        fontWeight: "bold",
        fontSize: "20px",
        margin: "20px auto"
    };

    const headingStyle = {
        fontWeight: "bold",
        fontSize: "25px",
    };
    


   
  
    const updateOutput = (event) => {
      const value = parseInt(event.target.value, 10);
  
      switch (value) {
        case 0:
          setOutput('Dilip');
          break;
        case 1:
          setOutput('Manish');
          break;
        case 2:
          setOutput('Vijay');
          break;
        case 3:
          setOutput('Yash');
          break;
        case 4:
          setOutput('Max Value');
          break;
        default:
          setOutput('Invalid Value');
      }
    };
  
    const handleDelete = () => {
      setIsContainerVisible(true);
      alert("ok")
    };
  
    return (
        <div className="container-fluid mt-5">
            <br /> <br />
            <div className="row mt-5">
                <div className="col-sm-2">
                    <div>
                        <span style={circleStyle}>1</span> &nbsp; &nbsp;
                      <Link href="/professional"> <span style={headingStyle}>Basic Info</span>  </Link>     <FaChevronRight className="fs-5 m-3" />
                    </div>
                </div>
                <div className="col-sm-2">
                    <span style={circleStyle}>2</span> &nbsp; &nbsp;
                 <Link href="/professional/experience">   <span style={headingStyle}>Experiences </span>  <FaChevronRight className="fs-5 m-3" /></Link>  

                </div>
                <div className="col-sm-2">
                    <span style={circleStyle}>3</span> &nbsp; &nbsp;
                    <Link href="/professional/education"><span style={headingStyle}>      Education
                    </span> </Link>   <FaChevronRight className="fs-5 m-3" />
                </div>
                <div className="col-sm-2">
                    <span style={circleStyle}>4</span> &nbsp; &nbsp;
                 <Link href="/professional/reference">  <span style={headingStyle}>Refrences</span></Link>      <FaChevronRight className="fs-5 m-3" />
                </div>
                <div className="col-sm-2">
                    <span style={circleStyle}>5</span> &nbsp; &nbsp;
                    
                <Link href="/professional/others">   <span style={headingStyle}>
                        Others
                    </span> </Link>    
                    
                     <FaChevronRight className="fs-5 m-3" />
                </div>
                <div className="col-sm-2">
                    <span style={circleStyle}>6</span> &nbsp; &nbsp;
                  <Link href="/professional/downloads">  <span style={headingStyle}>Download</span> </Link>   <FaChevronRight className="fs-5 m-3" />
                </div>

            </div>





            <div className="row mt-5">
    <div className="col-sm-2"></div>
    <div className="col-sm-8 mt-5">

  
        {/* <div className="row">
            <div className="col-md-6 col-sm-12 mb-4">
                <label className="text-inverse" htmlFor="validationCustomFrom">From</label>
                <input
                    type="month"
                    className="form-control h-100"
                    id="validationCustomFrom"
                    placeholder="Select a month"
                    required
                />
            </div>
            <div className="col-md-6 col-sm-12 mb-4">
      <label className="text-inverse" htmlFor="validationCustomTo">
        To  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <span>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={isChecked}
          />
         &nbsp; &nbsp; &nbsp; &nbsp;  Currently working here
        </span>
      </label>
      <input
        type="datetime-local"
        className="form-control h-100"
        id="validationCustomTo"
        placeholder="Select a date and time"
        required
        disabled={isChecked}
      />
    </div>
        </div> */}
        <div className="row mt-2">
            <span><h5>Add Languages
</h5></span>
<br />
<br />
        <div className="col-md-12 col-sm-12 mb-4">
                <label className="text-inverse" htmlFor="validationCustomFrom">Language Name</label>
                <input
                    type="text"
                    className="form-control h-100"
                    id="validationCustomFrom"
                    placeholder="Language Name"
                    required
                />
            </div>
        </div>
        <div className="row" style={{textAlign:"right"}}>
            <div className="col-sm-12">
            <button style={{ borderRadius: "5px", color: "blue", border: "0", border: "1px solid blue", padding: "8px",}} className="m-3" >Add Languages </button>

            </div>
        </div>
<span><h5>Add Expertise</h5></span>
<br />
        <div className="row mt-2">
        <div className="col-md-12 col-sm-12 mb-4">
                <label className="text-inverse" htmlFor="validationCustomFrom">Add Expertise
</label>
                <input
                    type="text"
                    className="form-control h-100"
                    id="validationCustomFrom"
                    placeholder="Expertise/Skill"
                    required
                />
            </div>
        </div>

       
        <div className="row">
                        <div className="con-sm-12">
                            {showgithubs && (
                                <div className="input-icons">
                                    <i className="fa fa-user icon">

                                    </i>
                                    <label className="text-inverse" htmlFor="validationCustom01">Add Experience</label>
                                    <div class="input-icons">
                                        <i class="fa fa-user icon">
                                        </i>
                                        <div className={`range-slider-container ${isContainerVisible ? '' : 'hidden'}`}>
      <input
        type="range"
        min="0"
        max="4"
        step="1"
        value="0"
        className="range-slider"
        onChange={updateOutput}
      />
      <div className="output">{output}</div>
      <MdDeleteForever className="fs-4" onClick={handleDelete} />
</div>
                                    </div>

                                </div>
                            )}
                        </div>
                     
                    </div>





        <div className="row" style={{ textAlign: "end" }}>
                        <div className="col-sm-12">
                            <button style={{ borderRadius: "5px", color: "blue", border: "0", border: "1px solid blue", padding: "8px", textAlign: "left" }} className="m-3" >Preview</button>
                            <button style={{ borderRadius: "5px", color: "blue", border: "0", border: "1px solid blue", padding: "8px",height: "50px", width: "180px", }} className="m-1" onClick={toggleInputFieldgit}>
                                {showInputField ? <IoMdClose /> : '+'} Add Experience
                            </button>

                            <button style={{ borderRadius: "5px", color: "white", border: "0", border: "1px solid blue", padding: "", textAlign: "left", height: "50px", width: "80px", backgroundColor: "#1d3fff" ,textAlignLast:"center"}} className="m-3">Next</button>
                        </div>
                    </div>
    </div>
    <div className="col-sm-2"></div>
</div>


        
<br/>
<br/>
<br/>
        </div>
    )
}


