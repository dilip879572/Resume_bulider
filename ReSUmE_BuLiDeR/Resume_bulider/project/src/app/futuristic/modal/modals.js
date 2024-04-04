// components/Modal.js
import React, { useState,useEffect } from "react";
import { MdAddBox } from "react-icons/md";
import Row from 'react-bootstrap/Row';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const contentRef = useRef(null);
  const [userData, setUserData] = useState(null);
  const [data, setData] = useState([]);
  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };


  const handleCapture = (isPDF) => {
    if (!contentRef.current) return;
  
    const options = {
      scrollY: -window.scrollY,
      windowWidth: contentRef.current.scrollWidth,
      windowHeight: contentRef.current.scrollHeight,
      useCORS: true,
    };
  
    if (isPDF) {
      html2canvas(contentRef.current, options).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
  
        const scaleFactor = 1; 
  
      
        const pdf = new jsPDF({
          unit: 'px',
          format: [canvas.width * scaleFactor, canvas.height * scaleFactor],
        });
  
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width * scaleFactor, canvas.height * scaleFactor);
        pdf.save("save.pdf");
      });
    } else {
      const htmlContent = contentRef.current.outerHTML;
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = "save.html";
      link.click();
    }
  };

  useEffect(() => {
    showData();
}, []);

function showData() {
    let email = window.localStorage.getItem('dil');

    // Check if email exists and remove quotes
    if (email) {
        email = email.replace(/^"(.*)"$/, '$1');
        console.log('Email:', email);

        fetch(`http://localhost:6085/show/${encodeURIComponent(email)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched Data:', data);

                if (data && data.basicInfo) {
                    setUserData(data); // Update state with fetched data
                } else {
                    console.error('Invalid data format:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error.message);
            });
    } else {
        console.error('Email not found in localStorage');
    }
}

  return (
    <div className="container-fluid">
      <button onClick={openModal}  style={{ borderRadius: "5px", color: "blue", border: "0", border: "1px solid blue", padding: "10px", textAlign: "left" }} >
    Preview
      </button>

      {/* The Modal */}
      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog " role="document">
            <div className="modal-content m-2 " style={{ width: "700px", height:"900px",backgroundColor:"black",overflow:"auto"}}>
              <div className="modal-header">
                <button type="button" className="close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="row m-2" ref={contentRef}>
      <div
        className="col-sm-4"
        style={{
          background: "#4d557f",
          height: "800px", // Set a fixed height for the blue section
          color: "white",
          textAlign: "left",
       
        }}
      >
        <br />
      
        <span className="display-0 mt-5" style={{fontWeight:"bold",}}> <h4>Contact</h4> </span>
    
        <hr />
      <span style={{fontWeight:"bold"}}><h5>Phone</h5></span>
      <span>{userData.basicInfo.number}</span><br/>
      <span>{userData.basicInfo.linkedin}</span><br/>
      <span>{userData.basicInfo.skype}</span>
        <br />
     
        <span style={{fontWeight:"bold",fontSize:"20px"}}><b>Email</b></span><br/>
        <span><b>  {userData.basicInfo.email} </b></span>
        <br />
        <span style={{fontWeight:"bold",fontSize:"20px"}}><b>Address</b></span><br/>
        <span><b> {userData.basicInfo.address}</b></span>
        <br />
      </div>
      <div
        className="col-sm-8"
        style={{
          background: "white",
          height: "800px",
          overflow: "auto", 
          textAlign: "left",
        }}
      >
    <div>
        <br/>
        <span className="display-0 mt-5" style={{fontWeight:"bold",wordSpacing:"2px", letterSpacing:"1px",textTransform:"uppercase"}}>  
      {userData.basicInfo.name}
    </span>
     
    <span style={{fontFamily:"monospace",fontWeight:"bold",letterSpacing:"1px", wordSpacing:"2px"}}><h5>{userData.basicInfo.jobPosition}</h5>  </span>
    </div>
      </div>
    
    </div>
    <button onClick={() => handleCapture(true)}>Save as PDF</button>
              <br/>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
