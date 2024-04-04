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
import Modal from "../modal/modalss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./page.css";

import Link from "next/link";
export default function page() {
  const [showInputField, setShowInputField] = useState(false);
  const [showInputFielg, setShowInputFielg] = useState(false);

  const [showstackoverflow, setShowstackoverflow] = useState(false);
  const [showstack, setShowstack] = useState("");
  const [showgithubs, setShowgithub] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [skype, setSkype] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [date, setDate] = useState();
  const [addexpriences, setAddexpriences] = useState("");
  const [company, setComapny] = useState("");
  const [yourPosition, setYourPostion] = useState("");
  const [companyAddress, setComapnyAddress] = useState("");
  const [positionYour, setPositionYour] = useState("");

  const [currently, setCurrently] = useState("");

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.value);
    setIsChecked(!isChecked);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleInputField = () => {
    setShowInputField(!showInputField);
    setInputValue("");
  };

  const toggleInputFieldgit = (e) => {
    setAddexpriences(e.target.value);
  };

  const handlegithub = () => {
    setShowgithub(!showgithubs);
    setAddexpriences("");
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

  function demo() {
    const email = window.localStorage.getItem("record");
    const PostData = {
      addexpriences: addexpriences,
      date: date,
      company: company,
      yourPosition: yourPosition,
      companyAddress: companyAddress,
      positionYour: positionYour,
      email: email,
    };
    if (
      !date ||
      !company ||
      !yourPosition ||
      !companyAddress ||
      !positionYour
    ) {
      toast.error("Please fill in all fields 😓 😓.");
      return;
    }

    try {
      fetch(`http://localhost:6085/experience`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(PostData),
      })
        .then((response) => {
          console.log("Response:", response);
          if (response.status === 201) {
            toast.success("Experience add successful 👌");
          } else {
            toast.error("Upload failed. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Fetch Error:", error);
          toast.error("Upload failed. Please try again.");
        });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Upload failed. Please try again.");
    }
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
            <span style={headingStyle}>Expertise</span>{" "}
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
          <div className="row ">
            <div className="con-sm-12">
              {showgithubs && (
                <div className="input-icons">
                  <i className="fa fa-user icon"></i>
                  <label className="text-inverse" htmlFor="validationCustom01">
                    Add Experience
                  </label>
                  <div class="input-icons">
                    <i class="fa fa-user icon"></i>
                    <input
                      class="input-field"
                      type="text"
                      placeholder="dilip.879572@gmail.com"
                      value={addexpriences}
                      onChange={toggleInputFieldgit}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-4">
              <label className="text-inverse" htmlFor="validationCustomFrom">
                From
              </label>
              <input
                type="month"
                className="form-control h-100"
                id="validationCustomFrom"
                placeholder="Select a month"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="col-md-6 col-sm-12 mb-4">
              <label className="text-inverse" htmlFor="validationCustomTo">
                To &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <span>
                  <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={isChecked}
                  />
                  &nbsp; &nbsp; &nbsp; &nbsp; Currently working here
                </span>
              </label>
              <input
                type="datetime-local"
                className="form-control h-100"
                id="validationCustomTo"
                placeholder="Select a date and time"
                required
                value={currently}
                onChange={(e) => setCurrently(e.target.value)}
                disabled={isChecked}
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-12 col-sm-12 mb-4">
              <label className="text-inverse" htmlFor="validationCustomFrom">
                Company Name
              </label>
              <input
                type="text"
                className="form-control h-100"
                id="validationCustomFrom"
                placeholder="ABC Comapny"
                required
                value={company}
                onChange={(e) => setComapny(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-12 col-sm-12 mb-4">
              <label className="text-inverse" htmlFor="validationCustomFrom">
                Your Postion
              </label>
              <input
                type="text"
                className="form-control h-100"
                id="validationCustomFrom"
                placeholder="XYZ Manager"
                required
                value={yourPosition}
                onChange={(e) => setYourPostion(e.target.value)}
              />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-12 col-sm-12 mb-4">
              <label className="text-inverse" htmlFor="validationCustomFrom">
                Company Address
              </label>
              <input
                type="text"
                className="form-control h-100"
                id="validationCustomFrom"
                placeholder="8 Lorem Ipsum Sit Amet 415121"
                required
                value={companyAddress}
                onChange={(e) => setComapnyAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-12 col-sm-12 mb-4">
              <label className="text-inverse" htmlFor="validationCustomFrom">
                Your Postion
              </label>
              <label className="text-inverse mt-3" htmlFor="validationCustom01">
                Your Experience
              </label>
              <textarea
                className="form-control h-50 "
                value={positionYour}
                onChange={(e) => setPositionYour(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="row" style={{ textAlign: "end" }}>
            <div
              className="col-sm-12"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Modal onClick={demo} style={{ marginRight: "0px" }} />
              <button
                style={{
                  borderRadius: "5px",
                  color: "blue",
                  border: "0",
                  border: "1px solid blue",
                  padding: "8px",
                  height: "50px",
                  width: "180px",
                }}
                className="m-1"
                onClick={handlegithub}
              >
                {showInputField ? <IoMdClose /> : "+"} Add Experience
              </button>
              <Link href="/advanced/experience">
                <button
                  style={{
                    borderRadius: "5px",
                    color: "white",
                    border: "0",
                    border: "1px solid blue",
                    padding: "",
                    textAlign: "left",
                    height: "50px",
                    width: "80px",
                    backgroundColor: "#1d3fff",
                    textAlignLast: "center",
                  }}
                  className="m-3"
                  onClick={demo}
                >
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <ToastContainer />
      <br />
      <br />
      <br />
    </div>
  );
}
