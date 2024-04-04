"use client";
import { FaChevronRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { IoMdContacts } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Choices from "choices.js";
import "choices.js/public/assets/styles/choices.min.css";
import { FaStackOverflow } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../modalas/modalas";
import axios from "axios";

import "./page.css";
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

  const [addeducation, setAddeducation] = useState("");
  const [date, setDate] = useState("");
  const [currently, setCurrently] = useState("");

  const [institute, setInstitute] = useState("");

  const handleCheckboxChange = (e) => {
    setCurrently(e.target.checked);
    console.log(isChecked); // This will log the current value of isChecked
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

  const toggleInputFieldgit = (e) => {
    setAddeducation(e.target.value);
  };

  const handlegithub = () => {
    setShowgithub(!showgithubs);
    setAddeducation("");
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

  function demo() {
    const email = window.localStorage.getItem("record");
    const postData = {
      addeducation: addeducation,
      date: date,
      currently: currently,
      degree: degree,
      institute: institute,
      email: email,
    };

    // Validate if any field is empty
    if (!date || !currently || !degree || !institute) {
      toast.error("Please fill in all fields 😓 😓.");
      return; // Exit the function if any field is empty
    }

    fetch("http://localhost:6085/education", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        toast.success("Education  Add successful 👌👌");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        toast.error({ message: "Error during request" });
      });
  }

  const [universities, setUniversities] = useState([]);
  const [degree, setDegree] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://universities.hipolabs.com/search?country=United+States"
        );
        setUniversities(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setDegree(event.target.value);
    console.log(handleChange);
  };

  return (
    <div className="container-fluid mt-5">
      <br /> <br />
      <div className="row mt-5">
        <div className="col-sm-2">
          <div>
            <span style={circleStyle}>1</span> &nbsp; &nbsp;
            <Link href="/advanced">
              {" "}
              <span style={headingStyle}>Basic Info</span>{" "}
            </Link>{" "}
            <FaChevronRight className="fs-5 m-3" />
          </div>
        </div>
        <div className="col-sm-2">
          <span style={circleStyle}>2</span> &nbsp; &nbsp;
          <Link href="/advanced/experience">
            {" "}
            <span style={headingStyle}>Experiences </span>{" "}
            <FaChevronRight className="fs-5 m-3" />
          </Link>
        </div>
        <div className="col-sm-2">
          <span style={circleStyle}>3</span> &nbsp; &nbsp;
          <Link href="/advanced/education">
            <span style={headingStyle}> Education</span>{" "}
          </Link>{" "}
          <FaChevronRight className="fs-5 m-3" />
        </div>

        <div className="col-sm-2">
          <span style={circleStyle}>5</span> &nbsp; &nbsp;
          <Link href="/advanced/others">
            {" "}
            <span style={headingStyle}>Expertise</span>{" "}
          </Link>
          <FaChevronRight className="fs-5 m-3" />
        </div>
        <div className="col-sm-2">
          <span style={circleStyle}>6</span> &nbsp; &nbsp;
          <Link href="/advanced/downloads">
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
                    Add Education
                  </label>
                  <div class="input-icons">
                    <i class="fa fa-user icon"></i>
                    <input
                      class="input-field"
                      type="text"
                      placeholder="dilip.879572@gmail.com"
                      value={addeducation}
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
                className="form-control h-75 "
                id="validationCustomFrom"
                placeholder="Select a month"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="col-md-6 col-sm-12 mb-4">
              <label className="text-inverse" htmlFor="validationCustomTo">
                To
                <span>
                  {" "}
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                </span>
                <span>
                  <input
                    type="checkbox"
                    value={currently}
                    onChange={handleCheckboxChange}
                    checked={isChecked}
                  />
                  &nbsp; &nbsp; &nbsp; Currently working here
                </span>
              </label>
              <input
                type="datetime-local"
                className="form-control h-75 "
                id="validationCustomTo"
                placeholder="Select a date and time"
                required
                disabled={isChecked}
              />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-12 col-sm-12">
              <label className="text-inverse" htmlFor="validationCustomFrom">
                Degree
              </label>

              <select
                value={degree}
                onChange={handleChange}
                className="form-select college h-75 "
              >
                <option value="">Select...</option>
                {universities.map((university, index) => (
                  <option key={index} value={university.name}>
                    {university.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-12 col-sm-12">
              <label className="text-inverse " htmlFor="validationCustomFrom">
                Institute
              </label>
              <select
                className="form-select h-75"
                value={institute}
                onChange={(e) => setInstitute(e.target.value)}
              >
                <option></option>
                <option>Kharkiv National University</option>
                <option>Universidad Técnica Federico Santa María</option>
                <option>Applied Cognitive Psychology (ACP)</option>
                <option>IÉSEG School of Management</option>
                <option>University of Portsmouth</option>
                <option>Académie de Créteil</option>
                <option>Marywood University</option>
                <option>Académie d'Aix-Marseille</option>
              </select>
            </div>
          </div>
          <div className="row my-4"></div>

          <div className="row" style={{ textAlign: "end" }}>
            <div
              className="col-sm-12"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Modal style={{ marginRight: "0px" }} />
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
                {showInputField ? <IoMdClose /> : "+"} Add Education
              </button>

              <Link href="/advanced/education">
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
                  className="m-3 "
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
