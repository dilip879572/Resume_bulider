"use client";
import { FaChevronRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
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
import { Slider } from "antd";
import { MdDeleteForever } from "react-icons/md";
import { Carousel } from "react-bootstrap";

import Modals from "../modal/modalss";
import Link from "next/link";
export default function page() {
  const [showInputField, setShowInputField] = useState(false);
  const [showInputFielg, setShowInputFielg] = useState(false);
  const [github, setGithub] = useState("");
  const [showstackoverflow, setShowstackoverflow] = useState(false);
  const [showstack, setShowstack] = useState("");
  const [showgithubs, setShowgithub] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [skype, setSkype] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [output, setOutput] = useState("Dilip");
  const [isContainerVisible, setIsContainerVisible] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleInputField = () => {
    setShowInputField(!showInputField);
    setInputValue("");
  };

  const handleskype = (e) => {
    setSkype(!skype);
    setSkype("");
  };

  const toggleInputFieldg = () => {
    setShowInputFielg(!showInputFielg);
    setSkype("");
  };

  const toggleInputFieldgit = () => {
    setShowgithub(!showgithubs);
    github("");
  };

  const handlegithub = (e) => {
    setGithub(!github);
    setGithub("");
  };

  const togglestackoverflow = () => {
    setShowstackoverflow(!showstackoverflow);
    showstack("");
  };

  const handlstack = () => {
    setShowstack(!showstack);
    setShowstack("");
  };

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
    margin: "20px auto",
  };

  const headingStyle = {
    fontWeight: "bold",
    fontSize: "25px",
  };

  const updateOutput = (event) => {
    const value = parseInt(event.target.value, 10);

    switch (value) {
      case 0:
        setOutput("Dilip");
        break;
      case 1:
        setOutput("Manish");
        break;
      case 2:
        setOutput("Vijay");
        break;
      case 3:
        setOutput("Yash");
        break;
      case 4:
        setOutput("Max Value");
        break;
      default:
        setOutput("Invalid Value");
    }
  };

  const handleDelete = () => {
    setIsContainerVisible(true);
    alert("ok");
  };

  function d() {
    alert("ok");
  }

  return (
    <div className="container-fluid mt-5">
      <br /> <br />
      <div className="row mt-5">
        <div className="col-sm-2">
          <div>
            <span style={circleStyle}>1</span> &nbsp; &nbsp;
            <Link href="/ordinary">
              {" "}
              <span style={headingStyle}>Basic Info</span>{" "}
            </Link>{" "}
            <FaChevronRight className="fs-5 m-3" />
          </div>
        </div>
        <div className="col-sm-2">
          <span style={circleStyle}>2</span> &nbsp; &nbsp;
          <Link href="/ordinary/experience">
            {" "}
            <span style={headingStyle}>Experiences </span>{" "}
            <FaChevronRight className="fs-5 m-3" />
          </Link>
        </div>
        <div className="col-sm-2">
          <span style={circleStyle}>3</span> &nbsp; &nbsp;
          <Link href="/ordinary/education">
            <span style={headingStyle}> Education</span>{" "}
          </Link>{" "}
          <FaChevronRight className="fs-5 m-3" />
        </div>
        <div className="col-sm-2">
          <span style={circleStyle}>5</span> &nbsp; &nbsp;
          <Link href="/ordinary/others">
            {" "}
            <span style={headingStyle}>Others</span>{" "}
          </Link>
          <FaChevronRight className="fs-5 m-3" />
        </div>
        <div className="col-sm-2">
          <span style={circleStyle}>6</span> &nbsp; &nbsp;
          <Link href="/ordinary/downloads">
            {" "}
            <span style={headingStyle}>Download</span>{" "}
          </Link>{" "}
          <FaChevronRight className="fs-5 m-3" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-2"></div>
        <div className="col-sm-8 mt-5">
          <div className="row mt-2">
            <span>
              <h5>Font Family</h5>
            </span>
            <br />
            <br />
            <div className="col-md-12 col-sm-12 mb-4">
              <select className="form-control h-100 m-b">
                <option value=""> </option>
                <option> Poppins</option>
                <option> Robbot</option>
                <option> Garmamond</option>
                <option> Saira</option>
                <option> Lato</option>
                <option> Montserrat</option>
                <option> Opne sans</option>
                <option>Noto Serif</option>
                <option>Merriweather</option>
                <option>Releway</option>
                <option>Playfair Display</option>
                <option value=""> Arimo</option>
                <option value="">Cabin</option>
                <option>Bitter</option>
                <option value="">Karla</option>
                <option value="">Quicksand</option>
                <option value="">Josefin Sans</option>
                <option value="">Inter</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="con-sm-12">
              {showgithubs && (
                <div className="input-icons">
                  <i className="fa fa-user icon"></i>
                  <label className="text-inverse" htmlFor="validationCustom01">
                    Add Experience
                  </label>
                  <div class="input-icons">
                    <i class="fa fa-user icon"></i>
                    <div
                      className={`range-slider-container ${
                        isContainerVisible ? "" : "hidden"
                      }`}
                    >
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
                      <MdDeleteForever
                        className="fs-4"
                        onClick={handleDelete}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="row">
            <Carousel>
              {/* First Slide */}
              <Carousel.Item>
                <div className="row">
                  <div className="col-sm-4">
                    <span>
                      <h5>Minimalist</h5>
                    </span>
                    <img
                      src="https://resume4u.io/TemplatesImg/Minimalist.webp"
                      alt=""
                      style={{ height: "300px" }}
                    />{" "}
                    <br />
                    <br />
                    <br />
                    <button
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        height: "45px",
                        width: "100px",
                        border: "1px solid blue",
                        color: "white",
                        backgroundColor: "blue",
                        padding: "10px",
                        textAlign: "center",
                      }}
                    >
                      Select
                    </button>
                  </div>
                  <div className="col-sm-4">
                    <span>
                      <h4>Creative</h4>
                    </span>
                    <img
                      src="https://resume4u.io/TemplatesImg/Creative.webp"
                      alt=""
                      style={{ height: "300px" }}
                    />{" "}
                    <br />
                    <br />
                    <button
                      onClick={d}
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        height: "45px",
                        width: "100px",
                        border: "1px solid blue",
                        color: "white",
                        backgroundColor: "blue",
                        padding: "10px",
                        textAlign: "center",
                      }}
                    >
                      Select
                    </button>{" "}
                  </div>
                  <div className="col-sm-4">
                    <span>
                      <h5>Professional</h5>
                    </span>
                    <img
                      src="https://resume4u.io/TemplatesImg/Professional.webp"
                      alt=""
                      style={{ height: "300px" }}
                    />{" "}
                    <br />
                    <br />
                    <button
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        height: "45px",
                        width: "100px",
                        border: "1px solid blue",
                        color: "white",
                        backgroundColor: "blue",
                        padding: "10px",
                        textAlign: "center",
                      }}
                    >
                      Select
                    </button>{" "}
                    <Modals />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-sm-4">
                    <span>
                      <h5>Futuristic</h5>
                    </span>
                    <img
                      src="https://resume4u.io/TemplatesImg/Futuristic.webp"
                      alt=""
                      style={{ height: "300px" }}
                    />{" "}
                    <br />
                    <br />
                    <button
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        height: "45px",
                        width: "100px",
                        border: "1px solid blue",
                        color: "white",
                        backgroundColor: "blue",
                        padding: "10px",
                        textAlign: "center",
                      }}
                    >
                      Select
                    </button>
                  </div>
                  <div className="col-sm-4">
                    <span>
                      <h5>Advanced</h5>
                    </span>
                    <img
                      src="https://resume4u.io/TemplatesImg/Advanced.webp"
                      alt=""
                      style={{ height: "300px" }}
                    />{" "}
                    <br />
                    <br />
                    <button
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        height: "45px",
                        width: "100px",
                        border: "1px solid blue",
                        color: "white",
                        backgroundColor: "blue",
                        padding: "10px",
                        textAlign: "center",
                      }}
                    >
                      Select
                    </button>
                  </div>
                  <div className="col-sm-4">
                    <span>
                      <h5>Ordinary</h5>
                    </span>
                    <img
                      src="https://resume4u.io/TemplatesImg/Ordinary.webp"
                      alt=""
                      style={{ height: "300px" }}
                    />{" "}
                    <br />
                    <br />
                    <button
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        height: "45px",
                        width: "100px",
                        border: "1px solid blue",
                        color: "white",
                        backgroundColor: "blue",
                        padding: "10px",
                        textAlign: "center",
                      }}
                    >
                      Select
                    </button>{" "}
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="row" style={{ textAlign: "end" }}>
            <div className="col-sm-12">
              <button
                style={{
                  borderRadius: "5px",
                  color: "blue",
                  border: "0",
                  border: "1px solid blue",
                  padding: "8px",
                  textAlign: "left",
                }}
                className="m-3"
              >
                Preview
              </button>
              {/* <button style={{ borderRadius: "5px", color: "blue", border: "0", border: "1px solid blue", padding: "8px",height: "50px", width: "180px", }} className="m-1" onClick={toggleInputFieldgit}>
                                {showInputField ? <IoMdClose /> : '+'} Add Experience
                            </button> */}

              <button
                style={{
                  borderRadius: "5px",
                  color: "white",
                  border: "0",
                  border: "1px solid blue",
                  padding: "",
                  textAlign: "left",
                  height: "50px",
                  width: "100px",
                  backgroundColor: "#1d3fff",
                  textAlignLast: "center",
                }}
                className="m-3"
              >
                Download
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
