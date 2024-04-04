"use client";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
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
import Modal from "./modal/modalsm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiImageAddFill } from "react-icons/ri";
import { useRouter } from "next/router";

import "./page.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";

export default function professional() {
  const [showInputField, setShowInputField] = useState(false);
  const [showInputFielg, setShowInputFielg] = useState(false);
  const [github, setGithub] = useState("");
  const [showstackoverflow, setShowstackoverflow] = useState(false);
  const [showstack, setShowstack] = useState("");
  const [showgithubs, setShowgithub] = useState(false);
  const [linkedin, setLinkedin] = useState("");
  const [skype, setSkype] = useState("");

  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [bio, setBio] = useState("");

  const [image, setImage] = useState(
    "https://resume4u.io/images/profileNew.webp"
  );
  const [p, setP] = useState();

  const handleInputChange = (e) => {
    setLinkedin(e.target.value);
  };

  const toggleInputField = () => {
    setShowInputField(!showInputField);
    setLinkedin("");
  };

  const handleskype = (e) => {
    setSkype(e.target.value);
  };

  const toggleInputFieldg = () => {
    setShowInputFielg(!showInputFielg);
    setSkype("");
  };

  const toggleInputFields = (e) => {
    setGithub(e.target.value);
  };

  const handleGithub = () => {
    setShowgithub(!showgithubs);
    setGithub("");
  };

  const togglestackoverflow = (e) => {
    setShowstack(e.target.value);
  };

  const handlstack = () => {
    setShowstackoverflow(!showstackoverflow);
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

  useEffect(() => {
    const email = window.localStorage.getItem("record");
    setEmail(email);
  }, []);

  const postData = {
    basicInfo: {
      name,
      image,
      email,
      number,
      address,
      linkedin,
      skype,
      showstack,
      github,
      jobPosition,
      bio,
    },
  };

  async function demo() {
    const email = window.localStorage.getItem("record");

    const formData = new FormData();
    const basicInfo = postData.basicInfo;

    formData.append("name", basicInfo.name || "");
    formData.append("email", email || "");
    formData.append("number", basicInfo.number || "");
    formData.append("address", basicInfo.address || "");
    formData.append("linkedin", basicInfo.linkedin || "");
    formData.append("skype", basicInfo.skype || "");
    formData.append("showstack", basicInfo.showstack || "");
    formData.append("github", basicInfo.github || "");
    formData.append("jobPosition", basicInfo.jobPosition || "");
    formData.append("bio", basicInfo.bio || "");
    formData.append("image", p); 

    try {
      const response = await fetch(`http://localhost:6085/uploads`, {
        method: "POST",
        body: formData,
      });

      console.log(formData);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Result:", result);
      toast.success("Upload successful");
      const router = useRouter();
      setTimeout(() => {
        router.push("/advanced/experience");
      }, 9000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Upload failed. Please try again.");
    }
  }

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setP(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  function dataURLtoFile(dataURL, filename) {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  return (
    <div className="container-fluid mt-5">
      <br /> <br />
      <div className="row mt-5">
        <div className="col-sm-2">
          <div>
            <span style={circleStyle}>1</span> &nbsp; &nbsp;
            <Link href="/minimalist">
              {" "}
              <span style={headingStyle}>Basic Info</span>{" "}
            </Link>{" "}
            <FaChevronRight className="fs-5 m-2" />
          </div>
        </div>
        <div className="col-sm-2">
          <span style={circleStyle}>2</span> &nbsp; &nbsp;
          <Link href="/minimalist/experience">
            {" "}
            <span style={headingStyle}>Experiences </span>{" "}
            <FaChevronRight className="fs-5 m-2" />
          </Link>
        </div>
        <div className="col-sm-2">
          <span style={circleStyle}>3</span> &nbsp; &nbsp;
          <Link href="/minimalist/education">
            <span style={headingStyle}> Education</span>{" "}
          </Link>{" "}
          <FaChevronRight className="fs-5 m-3" />
        </div>

        <div className="col-sm-2">
          <span style={circleStyle}>5</span> &nbsp; &nbsp;
          <Link href="/minimalist/others">
            {" "}
            <span style={headingStyle}>Expertise</span>{" "}
          </Link>
          <FaChevronRight className="fs-5 m-2" />
        </div>
        <div className="col-sm-2">
          <span style={circleStyle}>6</span> &nbsp; &nbsp;
          <Link href="/minimalist/downloads">
            {" "}
            <span style={headingStyle}>Download</span>{" "}
          </Link>{" "}
          <FaChevronRight className="fs-5 m-2" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-2">
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <img
                src={image}
                style={{
                  height: "100px",
                  width: "100px",
                  cursor: "pointer",
                  borderRadius: "100%",
                }}
                onClick={handleImageClick}
                alt="Profile"
              />
              <RiImageAddFill
                onClick={handleImageClick}
                className="fs-3"
                style={{ marginLeft: "-30px", marginTop: "40px" }}
              />
            </div>
          </div>
          <div className="row m-2">
            <label>Name</label>
            <div className="col-sm-12 mt-2">
              <InputGroup className="mb-3 h-100">
                <InputGroup.Text id="basic-addon1">
                  {" "}
                  <MdContacts className="fs-4" />{" "}
                </InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            </div>
          </div>

          <div className="row m-2">
            <label>Email</label>
            <div className="col-sm-12">
              <InputGroup className="mb-3 h-100">
                <InputGroup.Text id="basic-addon1">
                  {" "}
                  <MdOutlineMail className="fs-4" />{" "}
                </InputGroup.Text>
                <Form.Control
                  aria-describedby="basic-addon1"
                  type="text"
                  value={email}
                />
              </InputGroup>
            </div>
          </div>

          <div className="row m-2">
            <label>Phone Number</label>
            <div className="col-sm-12 mt-2 ">
              <PhoneInput
                className="form-control"
                country={"us"}
                placeholder="+91:"
                value={number}
                onChange={(value) => setNumber(value)}
              />
            </div>
          </div>
          <div className="row m-2">
            <label>Address</label>
            <div className="col-sm-12 mt-2">
              <InputGroup className="mb-3 h-100">
                <InputGroup.Text id="basic-addon1">
                  {" "}
                  <TfiLocationPin className="fs-4" />{" "}
                </InputGroup.Text>
                <Form.Control
                  placeholder="Locknow"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </InputGroup>
            </div>
          </div>
          <div className="row m-2">
            <div className="col-sm-12">
              {showInputField && (
                <InputGroup className="mb-3 h-100">
                  <InputGroup.Text id="basic-addon1">
                    {" "}
                    <FaLinkedin className="fs-4" />{" "}
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="dilip.879572@gmail.com"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={linkedin}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              )}
            </div>
          </div>

          <div className="row m-2">
            <div className="col-sm-12">
              {showInputFielg && (
                <InputGroup className="mb-3 h-100 w-100">
                  <InputGroup.Text id="basic-addon1">
                    {" "}
                    <FaSkype className="fs-4" />{" "}
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="dilip.879572@gmail.com"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={skype}
                    onChange={handleskype}
                  />
                </InputGroup>
              )}
            </div>
          </div>

          <div className="row m-2">
            <div className="con-sm-12">
              {showgithubs && (
                <InputGroup className="mb-3 h-100 w-100">
                  <InputGroup.Text id="basic-addon1">
                    {" "}
                    <FaGithub className="fs-4" />{" "}
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="dilip.879572@gmail.com"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={github}
                    onChange={toggleInputFields}
                  />
                </InputGroup>
              )}
            </div>
          </div>

          <div className="row m-2">
            <div className="con-sm-12">
              {showstackoverflow && (
                <InputGroup className="mb-3 h-100 w-100">
                  <InputGroup.Text id="basic-addon1">
                    {" "}
                    <FaStackOverflow className="fs-4" />{" "}
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="dilip.879572@gmail.com"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={showstack}
                    onChange={togglestackoverflow}
                  />
                </InputGroup>
              )}
            </div>
          </div>
          <div className="row m-2">
            <label>Job Position</label>
            <div className="col-sm-12 mt-2">
              <InputGroup className="mb-3 h-100">
                <InputGroup.Text id="basic-addon1">
                  {" "}
                  <IoMdContacts className="fs-4" />{" "}
                </InputGroup.Text>
                <Form.Control
                  placeholder="XYZ manager"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={jobPosition}
                  onChange={(e) => setJobPosition(e.target.value)}
                />
              </InputGroup>
            </div>
          </div>

          <div className="row m-2">
            <label>Bio</label>
            <div className="col-sm-12 mt-2">
              <InputGroup className="mb-3 h-0">
                <InputGroup.Text id="basic-addon1">
                  {" "}
                  <IoMdContacts className="fs-4" />{" "}
                </InputGroup.Text>
                <textarea
                  className="form-control input-field"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Ipsum sit amet Lorem Ipsum sit amet Lorem Ipsum sit amet Lorem Ipsum sit amet Lorem Ipsum sit amet Lorem Ipsum sit amet.."
                ></textarea>
              </InputGroup>
            </div>
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
                onClick={toggleInputField}
              >
                {showInputField ? <IoMdClose /> : "+"} LinkedIn
              </button>
              <button
                style={{
                  borderRadius: "5px",
                  color: "blue",
                  border: "0",
                  border: "1px solid blue",
                  padding: "8px",
                }}
                className="m-3"
                onClick={toggleInputFieldg}
              >
                {showInputFielg ? <IoMdClose /> : "+"} Skype
              </button>

              <button
                style={{
                  borderRadius: "5px",
                  color: "blue",
                  border: "0",
                  border: "1px solid blue",
                  padding: "8px",
                }}
                className="m-1"
                onClick={handleGithub}
              >
                {showInputField ? <IoMdClose /> : "+"} GitHub
              </button>

              <button
                style={{
                  borderRadius: "5px",
                  color: "blue",
                  border: "0",
                  border: "1px solid blue",
                  padding: "8px",
                }}
                className="m-1"
                onClick={handlstack}
              >
                {showInputField ? <IoMdClose /> : "+"} Stack Overflow
              </button>
            </div>
          </div>
          <div className="row" style={{ textAlign: "" }}>
            <div className="col-sm-8"></div>
            <div
              className="col-sm-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Modal style={{ marginRight: "0px" }} />

              <Link href="/advanced/experience" style={{ marginRight: "10px" }}>
                <button
                  style={{
                    borderRadius: "5px",
                    color: "white",
                    border: "1px solid blue",
                    padding: "10px",
                    textAlign: "center",
                    height: "50px",
                    width: "80px",
                    backgroundColor: "#1d3fff",
                  }}
                  onClick={demo}
                >
                  Next
                </button>
              </Link>
            </div>
            <div className="col-sm-1"></div>
          </div>
          <br />
        </div>
        <div className="col-sm-2"></div>
        <ToastContainer />
      </div>
    </div>
  );
}
