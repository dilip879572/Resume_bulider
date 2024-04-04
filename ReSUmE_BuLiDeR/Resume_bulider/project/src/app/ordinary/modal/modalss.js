import React, { useState, useRef, useEffect } from "react";
import { GiVibratingSmartphone } from "react-icons/gi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./modal.css";

import go from "../../advanced/modalas/images/signature_1378407.png";
export default function Modalss() {
  const [showModal, setShowModal] = useState(false);
  const contentRef = useRef(null);
  const [userData, setUserData] = useState(null);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();

    handleCapture();
  };

  async function showData() {
    try {
      const email = window.localStorage.getItem("record");
      const response = await fetch(
        `http://localhost:6085/user/${encodeURIComponent(email)}`
      );
      const userData = await response.json();
      setUserData(userData);
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  }

  useEffect(() => {
    showData();
  }, []);

  const handleCapture = () => {
    if (!contentRef.current) return;

    const options = {
      scrollY: -window.scrollY,
      windowWidth: contentRef.current.scrollWidth,
      windowHeight: contentRef.current.scrollHeight,
      useCORS: true,
    };

    html2canvas(contentRef.current, options).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      const iconStyles = `
        .downloaded-icon {
          background: #fff;
          color: #000;
          border-radius: 100%;
          padding: 20px;
    
        
        }
      `;

      pdf.text(iconStyles, 20, 30);

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("save.pdf");
    });
  };

  return (
    <div className="container-fluid" onContextMenu={handleContextMenu}>
      <button
        onClick={openModal}
        style={{
          borderRadius: "5px",
          color: "blue",
          border: "1px solid blue",
          padding: "10px",
          textAlign: "left",
        }}
      >
        Preview
      </button>

      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog " role="document">
            <div className="modal-content m-2">
              <div className="modal-header">
                <button type="button" className="close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div ref={contentRef} className="row m-2">
                <div
                  className="col-sm-12"
                  style={{
                    background: "white",
                    minHeight: "600px",
                    color: "black",
                    textAlign: "left",
                  }}
                >
                  <div className="row m-2">
                    <div className="col-sm-6">
                      <span
                        style={{
                          fontWeight: "bold",
                          letterSpacing: "2px",
                          wordSpacing: "2px",
                          fontFamily: "serif",
                          textTransform: "",
                          textAlign: "",
                          fontSize: "35px",
                        }}
                      >
                        {userData.advancedInfo.basicInfo.name}
                      </span>{" "}
                      <br />
                      <span
                        style={{
                          fontWeight: "bold",
                          letterSpacing: "2px",
                          wordSpacing: "1px",
                          fontFamily: "initial",
                          textTransform: "uppercase",
                          fontSize: "18px",
                        }}
                      >
                        {userData.advancedInfo.basicInfo.jobPosition}
                      </span>
                    </div>

                    <div className="col-sm-6" style={{ textAlign: "end" }}>
                      <img
                        src={`http://localhost:6085/api/${userData.advancedInfo.basicInfo.image}`}
                        style={{
                          height: "150px",
                          width: "150px",
                          borderRadius: "100%",
                          border: "1px groove red",
                        }}
                      />
                    </div>
                  </div>
                  <hr style={{ border: "1px solid black" }} />
                  <span
                    style={{
                      fontWeight: "blod",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontSize: "25px",
                      fontFamily: "serif",
                    }}
                  >
                    profile summary
                  </span>{" "}
                  <br />
                  <div className="mt-2">
                    <span
                      className=""
                      style={{ textAlign: "justify", fontSize: "15px" }}
                    >
                      {userData.advancedInfo.basicInfo.bio}
                    </span>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-5">
                      <h4
                        style={{
                          fontWeight: "bold",
                          textTransform: "uppercase",
                          letterSpacing: "3px",
                          fontFamily: "serif",
                        }}
                      >
                        Contact
                        <hr />
                      </h4>
                      <div className="">
                        <div className="mb-1">
                          <img
                            src="https://cdn-icons-png.freepik.com/256/6933/6933387.png?ga=GA1.1.745759975.1697784671&semt=ais"
                            style={{ height: "25px" }}
                            className=" text-light"
                          />{" "}
                          <span>{userData.advancedInfo.basicInfo.number} </span>{" "}
                        </div>

                        <div className="mb-1">
                          <img
                            src="https://cdn-icons-png.freepik.com/256/14025/14025559.png?ga=GA1.1.745759975.1697784671&semt=ais"
                            style={{ height: "25px" }}
                            className=" text-light"
                          />
                          &nbsp; {userData.advancedInfo.basicInfo.address}{" "}
                          <br />
                        </div>
                        <div className="mb-1">
                          {userData.advancedInfo.basicInfo.email ? (
                            <>
                              <span>
                                <img
                                  src="https://cdn-icons-png.freepik.com/256/14034/14034280.png?ga=GA1.1.745759975.1697784671&semt=ais"
                                  style={{ height: "25px" }}
                                  className=" text-light"
                                />{" "}
                                <span>
                                  {userData.advancedInfo.basicInfo.email}
                                </span>
                              </span>
                            </>
                          ) : null}
                        </div>
                        <div>
                          {userData.advancedInfo.basicInfo.linkedin ? (
                            <>
                              <span style={{ float: "left" }} className="me-2">
                                <img
                                  src="https://cdn-icons-png.freepik.com/256/145/145807.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                                  style={{ height: "20px" }}
                                />
                              </span>
                              <span
                                style={{
                                  wordWrap: "break-word",
                                }}
                              >
                                {userData.advancedInfo.basicInfo.linkedin}
                              </span>
                              <br />
                            </>
                          ) : null}
                        </div>

                        <div>
                          {userData.advancedInfo.basicInfo.skype ? (
                            <>
                              <img
                                src="https://cdn-icons-png.freepik.com/256/3670/3670039.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                                style={{ height: "20px" }}
                              />
                              &nbsp; {userData.advancedInfo.basicInfo.skype}
                              <br />
                            </>
                          ) : null}
                        </div>
                        <div>
                          {userData.advancedInfo.basicInfo.showstack ? (
                            <>
                              <img
                                src="https://cdn-icons-png.freepik.com/256/10180/10180798.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                                style={{ height: "27px" }}
                              />
                              {userData.advancedInfo.basicInfo.showstack}
                              <br />
                            </>
                          ) : null}
                        </div>
                        <div>
                          {userData.advancedInfo.basicInfo.github ? (
                            <>
                              <img
                                src="https://cdn-icons-png.freepik.com/256/10090/10090288.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                                style={{ height: "20px" }}
                              />
                              &nbsp; {userData.advancedInfo.basicInfo.github}
                              <br />
                            </>
                          ) : null}
                        </div>
                      </div>
                      <hr />
                      <h4
                        style={{
                          fontWeight: "bold",
                          textTransform: "uppercase",
                          letterSpacing: "4px",
                          fontFamily: "serif",
                        }}
                      >
                        education
                        <hr />
                      </h4>
                      {userData.educations.length ? (
                        <div>
                          <div>
                            <i style={{ fontWeight: "bold" }}>2014 - 2024</i>
                            <br />
                            <span
                              style={{
                                fontWeight: "",
                                textTransform: "uppercase",
                              }}
                            >
                              {userData.educations[0].degree}
                            </span>{" "}
                            <br />
                            <i style={{ fontWeight: "bold" }}>2019 - 2023</i>
                            <br />
                            <span
                              style={{
                                textTransform: "uppercase",
                              }}
                            >
                              {userData.educations[0].institute}
                            </span>
                          </div>
                        </div>
                      ) : null}
                      <span></span>

                      <div className="mt-2">
                        <h5
                          style={{
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            letterSpacing: "px",
                            fontFamily: "serif",
                            fontSize: "px",
                          }}
                        >
                          technical skills <br />
                          <hr />
                        </h5>
                        {userData.addLanguages.length ? (
                          <div>
                            <div style={{ textAlign: "center" }}>
                              <h5
                                style={{
                                  fontWeight: "blod",
                                  textTransform: "uppercase",
                                  fontFamily: "initial",
                                }}
                              ></h5>

                              <span
                                style={{
                                  fontWeight: "bold",
                                  textTransform: "uppercase",
                                  fontFamily: "initial",
                                }}
                              >
                                <center> ➖ Programming Skills ➖</center>
                              </span>

                              <p
                                style={{
                                  textTransform: "uppercase",
                                }}
                              >
                                {userData.addLanguages[0].programming}
                              </p>

                              <span
                                style={{
                                  fontWeight: "bold",
                                  textTransform: "uppercase",
                                  fontFamily: "initial",
                                }}
                              >
                                <center>⇒ Databases Skills ⇐</center>
                              </span>
                              <span
                                style={{
                                  fontWeight: "",
                                  textTransform: "uppercase",
                                  fontFamily: "initial",
                                }}
                              >
                                {userData.addLanguages[0].expertise}
                              </span>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <hr />
                    </div>

                    <div className="col-sm-7 ">
                      <div class="vl">
                        <img
                          src="https://cdn-icons-png.freepik.com/256/9343/9343953.png?ga=GA1.1.745759975.1697784671&semt=ais"
                          style={{ height: "20px" }}
                          className="gol"
                        />
                        <span
                          style={{
                            marginLeft: "20px",
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            letterSpacing: "2px",
                            fontFamily: "serif",
                          }}
                        >
                          experience
                        </span>
                        <br />
                        <div className="p-2">
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "revert",
                              fontWeight: "bold",
                            }}
                          >
                            mern stack developer | XTeam Consultants India Pvt.
                            Ltd.
                          </span>
                          <br />
                          <span> From 2023- 20024 | New work</span> <br />
                          <p
                            style={{
                              textAlign: "justify",
                            }}
                          >
                            Associate Full Stack Developer, HP Palo Alto,
                            CaliforniaJune 2012 – November 2012 Developing
                            back-end components to improve responsiveness and
                            back-end components to improve responsiveness and
                            <br />
                          </p>
                        </div>
                      </div>

                      <div class="vls mt-5">
                        <img
                          src="https://cdn-icons-png.freepik.com/256/5804/5804835.png?ga=GA1.1.745759975.1697784671&semt=ais"
                          style={{ height: "30px", width: "30px" }}
                          className="gol"
                        />
                        <span
                          style={{
                            marginLeft: "29px",
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            letterSpacing: "2px",
                            fontFamily: "serif",
                          }}
                        >
                          interest
                        </span>
                        <div className="p-2">
                          <br />
                          <span style={{ fontWeight: "bold" }}>
                            *Playping Game
                          </span>{" "}
                          <br />
                          <span>Marathon Runing , criect</span>
                          <br />
                          <span style={{ fontWeight: "" }}>Travelling</span>
                          <br />
                          <span style={{ fontWeight: "" }}>
                            Exploring New thing
                          </span>
                        </div>
                        <div className="row">
                          {userData.addLanguages.length ? (
                            <div>
                              <h4
                                className="mt-2"
                                style={{
                                  textTransform: "uppercase",
                                  letterSpacing: "4px",
                                  textAlign: "center",
                                }}
                              >
                                Languages
                              </h4>
                              <hr />
                              <div className="p-1">
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    fontFamily: "initial",
                                    fontSize: "19px",
                                  }}
                                >
                                  {userData.addLanguages[0].language}
                                </span>{" "}
                                <br />
                                <br />
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    fontFamily: "initial",
                                    fontSize: "19px",
                                  }}
                                ></span>
                              </div>
                            </div>
                          ) : null}
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                  {/* 
                  <h4 style={{ fontFamily: "initial", textTransform: "uppercase", letterSpacing: "4px", textAlign: "center" }}>Contact</h4>
                  <hr />

                  <div className="m-1">
                    <span >
                      
                      <GiVibratingSmartphone style={{ borderRadius: "100%", transform: "rotate(-0deg)", margin: "-2px -1px" }} className="fs-2  bg-light text-dark   downloaded-icon p-1" /> <b>8795720084</b>
                    </span>
                  </div>


                  <div className="m-1">
                    <span >
                      <MdOutlineAttachEmail style={{ borderRadius: "100%" }} className="fs-3 bg-light text-dark  downloaded-icon p-1  " /> <b>dilip12@gmail.com</b>
                    </span>
                  </div>


                  <span>
                    <AiTwotoneHome style={{ borderRadius: "100%", transform: "rotate(-0deg)", textAlign: "justify" }} className="fs-3 bg-light text-dark  p-1 downloaded-icon " /> <b>Lucknow chow clock tower Mohnipurwa</b>
                  </span>
                  <br />
                  <h3 className="mt-2" style={{ fontFamily: "initial", textTransform: "uppercase", letterSpacing: "4px", textAlign: "center" }}>EDUCATION</h3>
                  <hr />
                  <span style={{ fontWeight: "bold" }}>2014 2024</span><br />
                  <span style={{ fontWeight: "bold", textTransform: "uppercase", fontFamily: "initial", fontSize: "19px" }}>sorvady inter college mihinpurwa Bahraich</span> <br />
                  <span style={{ fontWeight: "bold" }}> 2019 2023</span><br />
                  <span style={{ fontWeight: "bold", textTransform: "uppercase", fontFamily: "initial", fontSize: "19px" }}>government polytechnic mohammadi kheri</span>
                  <h3 className="mt-1" style={{ fontFamily: "initial", textTransform: "uppercase", letterSpacing: "4px", textAlign: "center" }}>SKILLS</h3>
                  <hr />
                  <span style={{ fontWeight: "bold", textTransform: "uppercase", fontFamily: "initial", }}>Talent Acguistion $ Re tentions</span> <br />
                  <div className="m-1" style={{ height: "10px", width: "100px", backgroundColor: "yellow", borderRadius: "0px 10px 0px 0px" }}></div>
                  <span>REACT JS,  NEXT JS </span>
                  <div className="m-1" style={{ height: "10px", width: "160px", backgroundColor: "yellow", borderRadius: "0px 10px 0px 0px" }}></div>
                  <h3 className="mt-2" style={{ fontFamily: "initial", textTransform: "uppercase", letterSpacing: "4px", textAlign: "center" }}>Languages</h3>
                
                  <div class="wrappers">
                    <div class="ranges">
                      <b>English</b>
                      <input type="range" />
                    </div>
                  </div>
                  <b>Hindi</b>
                  <div className="m-1" style={{ height: "14px", width: "190px", backgroundColor: "yellow", borderRadius: "0px 10px 0px 0px" }}></div>
              
              <br/>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
