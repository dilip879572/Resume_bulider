import React, { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./modal.css";

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

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("save.pdf");
    });
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
            <div className="modal-content">
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
                    minHeight: "500px",
                    color: "black",
                    textAlign: "left",
                  }}
                >
                  <div className="row">
                    <div className="col-sm-6 bg-dark" style={{ minHeight: "" }}>
                      <div className="row ">
                        <div className="col-sm-6">
                          <h5
                            className="ro"
                            style={{
                              color: "white",
                              textTransform: "uppercase",
                              letterSpacing: "1px",
                            }}
                          >
                            <b> {userData.advancedInfo.basicInfo.name} </b>{" "}
                            <br />
                          </h5>
                          <span className="ro1">
                            {userData.advancedInfo.basicInfo.jobPosition}
                          </span>
                        </div>
                        <div className="col-sm-6 mt-2">
                          <img
                            src={`http://localhost:6085/api/${userData.advancedInfo.basicInfo.image}`}
                            style={{
                              height: "160px",
                              width: "155px",
                              borderRadius: "3px",
                              textAlign: "end",
                              background: "white",
                              border: "1px solid white",
                            }}
                          />
                        </div>
                        <span
                          className="mt-5"
                          style={{
                            textTransform: "uppercase",
                            fontFamily: "fantasy",
                            color: "white",
                          }}
                        >
                          <img
                            src="https://cdn-icons-png.freepik.com/256/12482/12482837.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                            style={{ height: "30px" }}
                          />{" "}
                          &nbsp;
                          <b className="fw-bold fs-5"> Profile summary</b>
                        </span>
                        <div className="mt-0 text-light">
                          <p
                            style={{
                              textAlign: "justify",
                              fontSize: "15px",
                            }}
                          >
                            {userData.advancedInfo.basicInfo.bio}
                          </p>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col-sm-12  text-light mt-4">
                          {userData.educations.length ? (
                            <div>
                              <img
                                src="https://cdn-icons-png.freepik.com/256/566/566438.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                                className="gollss"
                                style={{ height: "30px" }}
                              />
                              <span style={{ textTransform: "uppercase" }}>
                                {" "}
                                &nbsp; <b> EDucations</b>
                              </span>

                              <div>
                                <i style={{ fontWeight: "bold" }}>
                                  2014 - 2024
                                </i>
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
                                <i style={{ fontWeight: "bold" }}>
                                  2019 - 2023
                                </i>
                                <br />
                                <span
                                  style={{
                                    textTransform: "uppercase",
                                  }}
                                >
                                  {userData.educations[0].institute}
                                  <span>
                                    * Dr.M.C Saxena College of Engineering &
                                    Technology| 2022 present
                                  </span>
                                  B.tech (C, S)
                                </span>
                              </div>
                            </div>
                          ) : null}
                          <div></div>
                        </div>
                      </div>

                      <div className="mt-4">
                        {userData.addLanguages.length ? (
                          <div>
                            <img
                              src="https://cdn-icons-png.freepik.com/256/8293/8293584.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                              style={{ height: "30px" }}
                            />
                            <span
                              className="m-2"
                              style={{
                                color: "white",
                                textTransform: "uppercase",
                              }}
                            >
                              &nbsp; <b>Languages</b>
                            </span>
                            <div>
                              <span
                                style={{
                                  fontWeight: "bold",
                                  textTransform: "uppercase",
                                  fontFamily: "initial",

                                  color: "white",
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

                      {userData.addLanguages.length ? (
                        <div>
                          <img
                            src="https://cdn-icons-png.freepik.com/256/2306/2306236.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                            style={{ height: "30px" }}
                          />
                          <span
                            className="m-2"
                            style={{
                              fontWeight: "bold",
                              textTransform: "uppercase",
                              letterSpacing: "2px",
                              fontFamily: "serif",
                              fontSize: "px",
                              color: "white",
                            }}
                          >
                            technical skills <br />
                          </span>

                          <div style={{ textAlign: "center", color: "white" }}>
                            <span
                              style={{
                                fontWeight: "blod",
                                textTransform: "uppercase",
                                fontFamily: "initial",
                              }}
                            >
                              <center>★ Programming Skills ★ </center>
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
                    <div className="col-sm-6  text-start">
                      <div className="row ">
                        <div
                          className="col-sm-12  mb-2 mt-4"
                          style={{ marginLeft: "10px" }}
                        >
                          <img
                            src="https://cdn-icons-png.freepik.com/256/6997/6997481.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                            style={{ height: "34px" }}
                          />

                          <span
                            style={{
                              fontFamily: "sans-serif",
                              textTransform: "uppercase",
                              fontWeight: "bold",
                            }}
                          >
                            <b style={{ fontWeight: "bold", fontSize: "22px" }}>
                              {" "}
                              content
                            </b>{" "}
                          </span>

                          <div className="mb-0 mt-3">
                            <img
                              src="https://cdn-icons-png.freepik.com/256/295/295715.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                              style={{ height: "23px" }}
                            />{" "}
                            {userData.advancedInfo.basicInfo.address}
                          </div>
                        </div>
                      </div>
                      <div className="mx-2">
                        <span className="" style={{}}>
                          <img
                            src="https://cdn-icons-png.freepik.com/256/9946/9946342.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                            style={{ height: "20px" }}
                          />{" "}
                          &nbsp; {userData.advancedInfo.basicInfo.number} <br />
                        </span>
                      </div>
                      <div className="row ">
                        <div className="col-sm-12 mx-2">
                          {userData.advancedInfo.basicInfo.email ? (
                            <>
                              <span>
                                <img
                                  src="https://cdn-icons-png.freepik.com/256/9068/9068635.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                                  style={{ height: "20px" }}
                                />

                                <span>
                                  &nbsp; {userData.advancedInfo.basicInfo.email}
                                </span>
                                {<b className="m-1"></b>}
                              </span>
                            </>
                          ) : null}

                          <div>
                            {userData.advancedInfo.basicInfo.github ? (
                              <>
                                <span
                                  style={{ float: "left" }}
                                  className="me-2"
                                >
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
                                  style={{ height: "20px" }}
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
                                  style={{ height: "24px" }}
                                />
                                &nbsp; {userData.advancedInfo.basicInfo.github}
                                <br />
                              </>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-12">
                          <img
                            src="https://cdn-icons-png.freepik.com/256/566/566438.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                            className="gollss"
                            style={{ height: "34px" }}
                          />
                          <span style={{ textTransform: "uppercase" }}>
                            {" "}
                            &nbsp;{" "}
                            <b
                              style={{
                                fontWeight: "bold",
                                fontSize: "20px",
                                letterSpacing: "2px",
                              }}
                            >
                              {" "}
                              experince
                            </b>
                          </span>
                        </div>
                      </div>
                      {userData.experiences.length ? (
                        <div>
                          <div className="row">
                            <div
                              className="col-sm-12"
                              style={{ textAlign: "" }}
                            >
                              <b>{userData.experiences[0].date}</b>
                              <br />
                              Current working{" "}
                              <p
                                style={{
                                  textAlign: "justify",
                                }}
                              >
                                {userData.experiences[0].company}
                                {userData.experiences[0].yourPosition}
                                Current working: XTeam Consultants (India) Pvt
                                Ltd, Associate Software Engineer (MERN stack)
                                Current working: XTeam Consultants (India) Pvt
                                Ltd, Associate Software Engineer (MERN stack)
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : null}
                      <img
                        src="https://cdn-icons-png.freepik.com/256/752/752659.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                        style={{ height: "30px" }}
                      />
                      <span
                        style={{
                          marginLeft: "20px",
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          letterSpacing: "1px",
                          fontFamily: "serif",
                          fontSize: "20px",
                        }}
                      >
                        {" "}
                        <b> interest</b>
                      </span>
                      <br />
                      <span> &nbsp;&nbsp; Marathon Runing , criect</span>
                      <br />
                      <span style={{ fontWeight: "" }}>
                        {" "}
                        &nbsp; Travelling
                      </span>{" "}
                      <br />
                      <span style={{ fontWeight: "" }}>
                        {" "}
                        &nbsp;Exploring New thing
                      </span>{" "}
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
