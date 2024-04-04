import React, { useState, useRef, useEffect } from "react";
import { GiVibratingSmartphone } from "react-icons/gi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./modal.css";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const [userData, setUserData] = useState(null);
  const [data, setData] = useState([]);
  const contentRef = useRef(null);

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
      const iconStyles = `
        .downloaded-icon {
          background: #fff;
          color: #000;
          border-radius: 100%;
          padding: 25px;
    
        
        }
      `;

      pdf.text(iconStyles, 20, 30);

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
        onClick={() => {
          openModal();
          showData();
        }}
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
                  className="col-sm-5"
                  style={{
                    background: "#090909",
                    minHeight: "600px",
                    color: "white",
                    textAlign: "left",
                  }}
                >
                  {userData.advancedInfo.basicInfo.name && (
                    <span
                      className="display-0 m-3 mt-5 fs-"
                      style={{
                        fontWeight: "bold",
                        wordSpacing: "1px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        textAlign: "center",
                        fontFamily: "fantasy",
                        fontSize: "22px",
                      }}
                    ></span>
                  )}
                  <center>
                    <img
                      src={`http://localhost:6085/api/${userData.advancedInfo.basicInfo.image}`}
                      style={{
                        height: "150px",
                        width: "150px",
                        borderRadius: "100%",
                        border: "1px groove red",
                      }}
                    />
                  </center>
                  <h4
                    className=""
                    style={{
                      fontFamily: "initial",
                      textTransform: "uppercase",
                      letterSpacing: "4px",
                      textAlign: "center",
                    }}
                  >
                    Contact
                  </h4>
                  <hr />

                  <div className="m-1">
                    <img
                      src="https://cdn-icons-png.freepik.com/256/11553/11553633.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                      style={{ height: "30px" }}
                    />

                    <span>
                      {" "}
                      &nbsp; {userData.advancedInfo.basicInfo.number}{" "}
                    </span>
                  </div>

                  <div className="m-1">
                    {userData.advancedInfo.basicInfo.email ? (
                      <>
                        <span>
                          <img
                            src="https://cdn-icons-png.freepik.com/256/888/888853.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                            style={{ height: "20px" }}
                          />

                          <span>
                            &nbsp; {userData.advancedInfo.basicInfo.email}
                          </span>
                          {<b className="m-1"></b>}
                        </span>
                      </>
                    ) : null}
                  </div>

                  <span>
                    <div className="m-1">
                      <img
                        src="https://cdn-icons-png.freepik.com/256/1483/1483336.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                        style={{ height: "20px" }}
                      />
                      <b className="m-1">
                        &nbsp; {userData.advancedInfo.basicInfo.address}
                      </b>
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
                          &nbsp; {userData.advancedInfo.basicInfo.showstack}
                          <br />
                        </>
                      ) : null}
                    </div>

                    <div>
                      {userData.advancedInfo.basicInfo.github ? (
                        <>
                          <span style={{ float: "left" }} className="me-2">
                            <img
                              src="https://cdn-icons-png.freepik.com/256/10090/10090288.png?ga=GA1.1.1007212485.1706766616&semt=ais"
                              style={{ height: "20px" }}
                            />
                          </span>
                          <span
                            style={{
                              wordWrap: "break-word",
                            }}
                          >
                            {userData.advancedInfo.basicInfo.github}
                          </span>
                          <br />
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
                  </span>

                  {userData.educations.length ? (
                    <div>
                      <h4
                        className="mt-1"
                        style={{
                          fontFamily: "initial",
                          textTransform: "uppercase",
                          letterSpacing: "4px",
                          textAlign: "center",
                        }}
                      >
                        EDUCATION
                      </h4>
                      <hr />
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

                  {userData.addLanguages.length ? (
                    <div>
                      <h5
                        className="mt-1"
                        style={{
                          fontFamily: "initial",
                          textTransform: "uppercase",
                          letterSpacing: "4px",
                          textAlign: "center",
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
                          }}
                        >
                          <center>➖ Programming Skills ➖</center>
                        </span>
                        <p
                          style={{
                            textTransform: "uppercase",
                          }}
                        >
                          {userData.addLanguages[0].programming}
                        </p>
                        <br />
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

                  <br />
                </div>

                <div
                  className="col-sm-7"
                  style={{
                    background: "white",
                    minHeight: "800px",

                    textAlign: "left",
                  }}
                >
                  <div>
                    <br />
                    <div
                      style={{
                        minHeight: "40px",
                        width: "260px",
                        backgroundColor: "yellow",
                        borderRadius: "0 20px 20px 0",
                        marginLeft: "-12px",
                      }}
                    >
                      {userData.advancedInfo.basicInfo.name && (
                        <span
                          className="display-0 m-3 mt-5 fs-"
                          style={{
                            fontWeight: "bold",
                            wordSpacing: "1px",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            textAlign: "center",
                            fontFamily: "fantasy",
                            fontSize: "22px",
                          }}
                        >
                          {userData.advancedInfo.basicInfo.name}
                        </span>
                      )}

                      <br />
                      <span
                        className="m-3"
                        style={{
                          fontFamily: "",
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          letterSpacing: "0px",
                          wordSpacing: "0px",
                        }}
                      >
                        {" "}
                        {userData.advancedInfo.basicInfo.jobPosition}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="mt-3">
                    <span
                      style={{
                        fontFamily: "inherit",
                        textTransform: "uppercase",
                        textAlign: "",
                        letterSpacing: "3px",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      <h4>PROFILE</h4>
                    </span>

                    <b>
                      {" "}
                      <hr className="new4" />
                    </b>

                    <span>
                      {userData.advancedInfo.basicInfo.bio}

                      <br />
                      <br />
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: "inherit",
                      textTransform: "uppercase",
                      textAlign: "",
                      letterSpacing: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    <h5>experince</h5>
                  </span>
                  {userData.experiences.length ? (
                    <div>
                      <hr className="new2" />
                      <div className="row">
                        <div className="col-sm-5" style={{ textAlign: "" }}>
                          <b>{userData.experiences[0].date}</b>
                          <br />
                          Current working{" "}
                          <p
                            style={{ fontWeight: "bold", textAlign: "justify" }}
                          >
                            {userData.experiences[0].company}
                          </p>
                        </div>

                        <div className="col-sm-7 ">
                          <div class="vl  p-2">
                            <p style={{ textAlign: "justify" }}>
                              {userData.experiences[0].yourPosition}
                              <br />
                              Current working: XTeam Consultants (India) Pvt
                              Ltd, Associate Software Engineer (MERN stack)
                              Current working: XTeam Consultants (India) Pvt
                              Ltd, Associate Software Engineer (MERN stack)
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <br />

                  <hr className="new2" />
                  <div className="row">
                    {userData.addLanguages.length ? (
                      <div>
                        <h4
                          className="mt-2"
                          style={{
                            fontFamily: "initial",
                            textTransform: "uppercase",
                            letterSpacing: "4px",
                            textAlign: "center",
                          }}
                        >
                          Languages
                        </h4>
                        <hr />
                        <div>
                          <br />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
