// components/Modal.js
import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import Row from 'react-bootstrap/Row';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const contentRef = useRef(null);
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
      <span><b>8795720084</b></span>
        <br />
     
        <span style={{fontWeight:"bold",fontSize:"20px"}}><b>Email</b></span><br/>
        <span><b>dilip.879572@gmail.com</b></span>
        <br />
        <span style={{fontWeight:"bold",fontSize:"20px"}}><b>Address</b></span><br/>
        <span><b>Lucknow chow clock tover mohnipurwa</b></span>
        <br />
      </div>
      <div
        className="col-sm-8"
        style={{
          background: "white",
          height: "800px",
          overflow: "auto", // Add overflow to handle content scrolling
          textAlign: "left",
        }}
      >
    <div>
        <br/>
        <span className="display-6 mt-5" style={{fontWeight:"bold",wordSpacing:"1px", letterSpacing:"2px"}}>Dilip kumar</span><br/>
    <span style={{fontFamily:"monospace",fontWeight:"bold",letterSpacing:"3px", wordSpacing:"2px"}}><h5>Mern stack</h5>  </span>
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



