import React, { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./modal.css";
import QRCode from "react-qr-code";

export default function Modalss() {
  const [showModal, setShowModal] = useState(false);
  const contentRef = useRef(null);
  const [userData, setUserData] = useState(null);
  const [url, setUrl] = useState("");
  const [imageDataUrl, setImageDataUrl] = useState(null);
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
      console.log(userData);
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  }

  useEffect(() => {
    showData();
  }, []);

  // Function to convert image data to Base64
  function convertToBase64(imageUrl) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        const reader = new FileReader();
        reader.onloadend = function () {
          resolve(reader.result);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.onerror = reject;
      xhr.open("GET", imageUrl);
      xhr.responseType = "blob";
      xhr.send();
    });
  }
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
            <div className="modal-content ">
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
                  <div className="row m-2 ">
                    <div
                      className="col-sm-3 mt-3"
                      style={{ textAlign: "start" }}
                    >
                      <img
                        src={`http://localhost:6085/api/${userData.advancedInfo.basicInfo.image}`}
                        style={{
                          height: "150px",
                          width: "150px",
                          border: "2px groove black",
                        }}
                      />
                    </div>

                    <div className="col-sm-9">
                      <div className="row">
                        <div className="col-sm-7">
                          <div>
                            <span
                              style={{ fontWeight: "bold", fontSize: "30px" }}
                            >
                              {userData.advancedInfo.basicInfo.name}
                            </span>{" "}
                            <br />
                            <span
                              style={{
                                fontWeight: "bold",
                                fontSize: "18px",
                                color: "blue",
                                textTransform: "uppercase",
                              }}
                            >
                              {userData.advancedInfo.basicInfo.jobPosition}
                            </span>
                            <p className="mb-1">
                              <img
                                src="https://cdn-icons-png.freepik.com/256/3687/3687004.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                                style={{ height: "23px" }}
                              />{" "}
                              {userData.advancedInfo.basicInfo.number}{" "}
                            </p>{" "}
                          </div>
                        </div>
                        <div className="col-sm-5 mt-1">
                          {userData && (
                            <QRCode
                              value={`Name: ${userData.advancedInfo.basicInfo.name}\n
                  Job: ${userData.advancedInfo.basicInfo.jobPosition}\n
                  Email: ${userData.advancedInfo.basicInfo.email}\n
                  Address: ${userData.advancedInfo.basicInfo.address}\n
                  LinkedIn: ${userData.advancedInfo.basicInfo.linkedin}\n
                  Skype: ${userData.advancedInfo.basicInfo.skype}\n
                  GitHub: ${userData.advancedInfo.basicInfo.github}\n
                  Show Stack: ${userData.advancedInfo.basicInfo.showstack}`}
                              size={100}
                              includeMargin={true}
                              renderAs="svg"
                              imageSettings={{
                                src: `data:image/jpeg;base64,${convertToBase64(
                                  userData.advancedInfo.basicInfo.image
                                )}`,
                                height: 30, // Adjust height as needed
                                width: 30, // Adjust width as needed
                              }}
                            />
                          )}
                        </div>
                      </div>
                      <div className="row"></div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="mb-3">
                            {userData.advancedInfo.basicInfo.email ? (
                              <>
                                <p className="mb-1">
                                  <img
                                    src="https://cdn-icons-png.freepik.com/256/3178/3178283.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                                    style={{ height: "23px" }}
                                  />

                                  <span>
                                    {" "}
                                    {userData.advancedInfo.basicInfo.email}
                                  </span>
                                </p>
                              </>
                            ) : null}

                            <p className="mb-1">
                              <img
                                src="https://cdn-icons-png.freepik.com/256/14025/14025841.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                                style={{ height: "23px" }}
                              />{" "}
                              {userData.advancedInfo.basicInfo.address}
                            </p>
                            <div className="mb-1">
                              {userData.advancedInfo.basicInfo.linkedin ? (
                                <>
                                  <img
                                    src="https://cdn-icons-png.freepik.com/256/145/145807.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                                    style={{ height: "23px" }}
                                  />
                                  <span>
                                    {" "}
                                    {userData.advancedInfo.basicInfo.linkedin}
                                  </span>
                                  <br />
                                </>
                              ) : null}
                            </div>

                            <div className="mb-1">
                              {userData.advancedInfo.basicInfo.skype ? (
                                <>
                                  <img
                                    src="https://cdn-icons-png.freepik.com/256/3670/3670039.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                                    style={{ height: "23px" }}
                                  />
                                  <span>
                                    {" "}
                                    {userData.advancedInfo.basicInfo.skype}
                                  </span>
                                  <br />
                                </>
                              ) : null}
                            </div>
                            <div className="mb-1">
                              {userData.advancedInfo.basicInfo.github ? (
                                <>
                                  <img
                                    src="https://cdn-icons-png.freepik.com/256/10090/10090288.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                                    style={{ height: "23px" }}
                                  />
                                  <span>
                                    {" "}
                                    {userData.advancedInfo.basicInfo.github}
                                  </span>
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
                                  />{" "}
                                  {userData.advancedInfo.basicInfo.showstack}
                                  <br />
                                </>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                  <span
                    style={{
                      textTransform: "uppercase",
                      fontFamily: "fantasy",
                      color: "blue",
                    }}
                  >
                    <h5 className="fw-bold"> Profile summary</h5>
                  </span>
                  <hr style={{ border: "1px solid blue" }} />
                  <span
                    style={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      fontSize: "18px",
                      fontFamily: "serif",
                    }}
                  ></span>{" "}
                  <div className="mt-0">
                    <span
                      className=""
                      style={{ textAlign: "justify", fontSize: "15px" }}
                    >
                      {userData.advancedInfo.basicInfo.bio}
                    </span>
                  </div>
                  <br />
                  <span
                    style={{
                      color: "blue",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontFamily: "fantasy",
                    }}
                  >
                    <h5 className="fw-bold"> EDUCATION</h5>
                  </span>
                  <hr style={{ border: "1px solid blue" }} />
                  <span>
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
                  </span>
                  <span style={{ textTransform: "uppercase" }}>
                    <b> b.tech</b>
                  </span>
                  <br />
                  <div className="row">
                    <div className="col-sm-6">
                      <span style={{ fontWeight: "", textTransform: "" }}>
                        * Dr.M.C Saxena College of Engineering & Technology
                      </span>
                    </div>
                    <div className="col-sm-6">| 2022 present B.tech (C, S)</div>
                  </div>
                  <hr style={{ border: "1px solid blue" }} />
                  <div className="row">
                    <div className="col-sm-5">
                      {userData.addLanguages.length ? (
                        <div>
                          <h5
                            className="mt-1"
                            style={{
                              fontFamily: "initial",
                              textTransform: "uppercase",
                              textAlign: "center",
                              color: "blue",
                              fontWeight: "bold",
                            }}
                          >
                            Technical Skills
                          </h5>
                          <hr />
                          <div style={{ textAlign: "center" }}>
                            <span
                              style={{
                                fontWeight: "blod",
                                textTransform: "uppercase",
                                fontFamily: "initial",
                                color: "red",
                                fontSize: "17px",
                              }}
                            >
                              ⇒ Programming Skills ⇐
                            </span>
                            <p
                              style={{
                                textTransform: "uppercase",
                                textAlign: "justify",
                              }}
                            >
                              {userData.addLanguages[0].programming}
                            </p>

                            <p
                              style={{
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                fontFamily: "initial",
                                color: "red",
                                fontSize: "20px",
                              }}
                            >
                              <center>⇒ Databases Skills ⇐</center>
                            </p>
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
                      <hr />
                      {userData.addLanguages.length ? (
                        <div>
                          <span
                            style={{
                              textTransform: "uppercase",
                              color: "blue",
                              fontFamily: "fantasy",
                              fontWeight: "bold",
                            }}
                          >
                            <h5>Languages</h5>
                          </span>{" "}
                          <p
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "initial",
                            }}
                          >
                            {userData.addLanguages[0].language}
                          </p>
                        </div>
                      ) : null}
                    </div>
                    <div className="col-sm-6 vl">
                      <div class="vssl">
                        <h5
                          className="fw-bold"
                          style={{
                            textTransform: "uppercase",
                            color: "blue",
                            fontFamily: "monospace",
                            textAlign: "justify",
                            letterSpacing: "2px",
                          }}
                        >
                          {" "}
                          experience
                        </h5>

                        {userData.experiences.length ? (
                          <div>
                            <hr className="new2" />
                            <div className="row">
                              <p
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
                                  his depends on how much is in your resume and
                                  the industry. There is so much in my resume
                                  that I can’t make it that creative and keep it
                                  within two pages. Prioritize information not
                                  creativity. However, if you have the space to
                                  make it creative, a resume that has some color
                                  can really help you stand out.
                                </p>
                              </p>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <span
                          style={{
                            textTransform: "uppercase",
                            color: "blue",
                            fontFamily: "fantasy",
                            fontWeight: "bold",
                          }}
                        >
                          <h5>interests</h5>
                        </span>{" "}
                        Running <br />
                        Cricket ,<br />
                        Travelling
                      </div>
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
