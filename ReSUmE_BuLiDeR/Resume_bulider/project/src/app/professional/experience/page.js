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

    <div className="row ">
                        <div className="con-sm-12">
                            {showgithubs && (
                                <div className="input-icons">
                                    <i className="fa fa-user icon">

                                    </i>
                                    <label className="text-inverse" htmlFor="validationCustom01">Add Experience</label>
                                    <div class="input-icons">
                                        <i class="fa fa-user icon">
                                       
                                        </i>
                                        <input class="input-field"
                                            type="text"
                                            placeholder="dilip.879572@gmail.com"
                                            value={github}
                                            onChange={handlegithub}
                                        />
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
        <div className="row">
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
        </div>
        <div className="row mt-2">
        <div className="col-md-12 col-sm-12 mb-4">
                <label className="text-inverse" htmlFor="validationCustomFrom">Company Name</label>
                <input
                    type="text"
                    className="form-control h-100"
                    id="validationCustomFrom"
                    placeholder="ABC Comapny"
                    required
                />
            </div>
        </div>
        <div className="row mt-2">
        <div className="col-md-12 col-sm-12 mb-4">
                <label className="text-inverse" htmlFor="validationCustomFrom">Your Postion
</label>
                <input
                    type="text"
                    className="form-control h-100"
                    id="validationCustomFrom"
                    placeholder="XYZ Manager"
                    required
                />
            </div>
        </div>

        <div className="row mt-2">
        <div className="col-md-12 col-sm-12 mb-4">
                <label className="text-inverse" htmlFor="validationCustomFrom">Company Address</label>
                <input
                    type="text"
                    className="form-control h-100"
                    id="validationCustomFrom"
                placeholder="8 Lorem Ipsum Sit Amet 415121" 
                    required
                />
            </div>
        </div>

        <div className="row mt-2">
        <div className="col-md-12 col-sm-12 mb-4">
                <label className="text-inverse" htmlFor="validationCustomFrom">Your Postion
</label>
<label className="text-inverse mt-3" htmlFor="validationCustom01">Your Experience</label>
            <textarea  className="form-control h-50 ">

            </textarea>
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


            {/* <div className="row mt-5">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <div className="row">
                        <div className="col-sm-2">
                            <img src="https://resume4u.io/images/profileNew.webp" style={{ height: "100px", width: "100px" }} />
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" style={{ transform: 'translate(-3rem, 5ex)' }} viewBox="0 0 33 33" fill="currentColor"><path d="M16.4624 32.578C25.3314 32.578 32.5212 25.394 32.5212 16.5321C32.5212 7.67022 25.3314 0.486237 16.4624 0.486237C7.59343 0.486237 0.403687 7.67022 0.403687 16.5321C0.403687 25.394 7.59343 32.578 16.4624 32.578Z" fill="#F4F4F4" stroke="black" stroke-width="0.293303"></path><path d="M17.2755 23.8474H13.2084C10.9626 23.8474 9.14124 22.0275 9.14124 19.7835V13.2807C9.14124 11.0367 10.9626 9.21683 13.2084 9.21683H19.7164C21.9622 9.21683 23.7835 11.0367 23.7835 13.2807V17.3446" stroke="black" stroke-width="0.879909" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.5333 14.4628C19.6765 15.6059 19.6765 17.4583 18.5333 18.6006C17.3892 19.7429 15.5354 19.7429 14.3914 18.6006C13.2481 17.4583 13.2481 15.6059 14.3914 14.4628C14.9402 13.9135 15.6858 13.6056 16.4623 13.6056C17.2388 13.6056 17.9844 13.9135 18.5333 14.4628Z" stroke="black" stroke-width="0.879909" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5294 22.6231H24.5965" stroke="black" stroke-width="0.879909" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.5631 24.655V20.5912" stroke="black" stroke-width="0.879909" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <div className="col-sm-10 mt-3">
                            <label className="text-inverse" htmlFor="validationCustom01">Name</label>
                            <div class="input-icons">
                                <i class="fa fa-user icon">
                                    <MdContacts class="fs-4" />
                                </i>
                                <input class="input-field"
                                    type="text"
                                    placeholder="+91:-8795720084" />
                            </div>
                        </div>
                    </div>

                    <div className="row m-2">
                        <div className="col-sm-12">
                            <label className="text-inverse" htmlFor="validationCustom01">Email</label>
                            <div class="input-icons">
                                <i class="fa fa-user icon">
                                    <MdOutlineMail class="fs-3" />
                                </i>
                                <input class="input-field"
                                    type="text"
                                    placeholder="dilip.879572@gmail.com" />
                            </div>

                        </div>
                    </div>

                    <div className="row m-2">
                        <div className="col-sm-12">
                            <label className="text-inverse" htmlFor="validationCustom01">Phone Number</label>
                            <div class="input-icons">
                                <i class="fa fa-user icon">
                                    <MdOutlinePhone class="fs-3" />
                                </i>
                                <input class="input-field"
                                    type="text"
                                    placeholder="+91:-8795720084" />
                            </div>

                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col-sm-12">
                            <label className="text-inverse" htmlFor="validationCustom01">Address</label>
                            <div class="input-icons">
                                <i class="fa fa-user icon">
                                    <TfiLocationPin class="fs-3" />
                                </i>
                                <input class="input-field"
                                    type="text"
                                    placeholder="Locknow " />
                            </div>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col-sm-12">
                            {showInputField && (
                                <div className="input-icons">
                                    <i className="fa fa-user icon">

                                    </i>
                                    <label className="text-inverse" htmlFor="validationCustom01">LinkedIn</label>
                                    <div class="input-icons">
                                        <i class="fa fa-user icon">
                                            <FaLinkedin class="fs-3" />
                                        </i>
                                        <input class="input-field"
                                            type="text"
                                            placeholder="dilip.879572@gmail.com"
                                            value={inputValue}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>



                    <div className="row m-2">
                        <div className="col-sm-12">
                            {showInputFielg && (
                                <div className="input-icons">
                                    <i className="fa fa-user icon">

                                    </i>
                                    <label className="text-inverse" htmlFor="validationCustom01">Skype</label>
                                    <div class="input-icons">
                                        <i class="fa fa-user icon">
                                            <FaSkype class="fs-3" />
                                        </i>
                                        <input class="input-field"
                                            type="text"
                                            placeholder="dilip.879572@gmail.com"
                                            value={skype}
                                            onChange={handleskype}
                                        />
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>


                    <div className="row m-2">
                        <div className="con-sm-12">
                            {showgithubs && (
                                <div className="input-icons">
                                    <i className="fa fa-user icon">

                                    </i>
                                    <label className="text-inverse" htmlFor="validationCustom01">GitHub</label>
                                    <div class="input-icons">
                                        <i class="fa fa-user icon">
                                            <FaGithub class="fs-4" />
                                        </i>
                                        <input class="input-field"
                                            type="text"
                                            placeholder="dilip.879572@gmail.com"
                                            value={github}
                                            onChange={handlegithub}
                                        />
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>

                    <div className="row m-2">
                        <div className="con-sm-12">
                            {showstackoverflow && (
                                <div className="input-icons">
                                    <i className="fa fa-user icon">

                                    </i>
                                    <label className="text-inverse" htmlFor="validationCustom01">Stack Overflow</label>
                                    <div class="input-icons">
                                        <i class="fa fa-user icon">
                                            <FaStackOverflow class="fs-4" />
                                        </i>
                                        <input class="input-field"
                                            type="text"
                                            placeholder="dilip.879572@gmail.com"
                                            value={showstack}
                                            onChange={handlstack}
                                        />
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>



                    <div className="row m-2">
                        <div className="col-sm-12">
                            <div class="flex items-center gap-1"><label for="" class="font-medium">Job Postion</label><span aria-label="Your introduction for the interviewer" class=""><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="currentColor"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></span></div>

                            <div class="input-icons">
                                <i class="fa fa-user icon">
                                    <IoMdContacts class="fs-2" />
                                </i>
                                <input class="input-field"
                                    type="text"
                                    placeholder="XYZ manager" />
                            </div>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col-sm-12">
                            <div class="flex items-center gap-1"><label for="" class="font-medium">Bio</label><span aria-label="Your introduction for the interviewer" class=""><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="currentColor"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></span></div>

                            <div class="input-icons">
                                <i class="fa fa-user icon">
                                    <IoMdContacts class="fs-2" />
                                </i>
                                <textarea className="form-control input-field" placeholder="Ipsum sit amet Lorem Ipsum sit amet Lorem Ipsum sit amet Lorem Ipsum sit amet Lorem Ipsum sit amet Lorem Ipsum sit amet.."></textarea>

                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ textAlign: "end" }}>
                        <div className="col-sm-12">
                            <button style={{ borderRadius: "5px", color: "blue", border: "0", border: "1px solid blue", padding: "8px", textAlign: "left" }} className="m-3" onClick={toggleInputField}>
                                {showInputField ? <IoMdClose /> : '+'} LinkedIn
                            </button>
                            <button style={{ borderRadius: "5px", color: "blue", border: "0", border: "1px solid blue", padding: "8px", }} className="m-3" onClick={toggleInputFieldg}>
                                {showInputFielg ? <IoMdClose /> : '+'} Skype
                            </button>

                            <button style={{ borderRadius: "5px", color: "blue", border: "0", border: "1px solid blue", padding: "8px", }} className="m-1" onClick={toggleInputFieldgit}>
                                {showInputField ? <IoMdClose /> : '+'} GitHub
                            </button>

                            <button style={{ borderRadius: "5px", color: "blue", border: "0", border: "1px solid blue", padding: "8px", }} className="m-1" onClick={togglestackoverflow}>
                                {showInputField ? <IoMdClose /> : '+'} Stack Overflow
                            </button>


                        </div>

                    </div>
                  

                </div> */}
                {/* <div className="col-sm-2"></div>


</div> */}
<br/>
<br/>
<br/>
        </div>
    )
}


