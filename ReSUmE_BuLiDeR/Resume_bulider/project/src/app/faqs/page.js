"use client";
import React, { useState } from "react";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqsData = [
    {
      question: "Yes, Resume4U.io .",
      answer: "You can click on this to register / sign-up.",
    },
    {
      question: "How to request a new template?",
      answer:
        "We offer a variety of templates, but if you are looking for something specific, go to contact, select subject 'Select A Template', and in the message share the URL of your desired template.",
    },
    {
      question: "Can we download the resume as a PDF?",
      answer:
        "Yes, you can download your resume. After filling the required information, you can proceed to Section #6 Download, where you can download your resume as a PDF.",
    },
    {
      question: "How to download resume with different font families?",
      answer:
        "In our resume builder Section #6 Download, we offer 20+ font families that you can choose from. If you haven't found your required font family/style, you can contact us and let us know about your required font style/family.",
    },
    {
      question: "How to feature your feedback on the home page?",
      answer:
        "Yes, Resume4U.io is absolutely free, offering 20+ resume templates with a free and easy-to-use resume builder where you can edit your resumes.",
    },
  ];

  return (
    <div className="container-fluid mt-5">
      <br />
      <br /> <br />
      <div className="row mt-5">
        <div className="col-sm-2"></div>
        <div className="col-sm-8 mt-5">
          <span className="display-6 mt-5" style={{ fontWeight: "bold", color: "#0055ff" }}>
            Faq's
          </span>
          <br />
          <span>How can we help you?</span>
          <br />
          {faqsData.map((faq, index) => (
            <div key={index} className="mt-5">
              <span>
                <button className="border-0 " onClick={() => handleButtonClick(index)} style={{fontWeight:"bold"}}>
                  {faq.question}
                </button>
              </span>
              <br />
              <hr/>
              {activeIndex === index && (
                <span className="" style={{ transition: " max-height 1s ease-out " }}>
                  {faq.answer}
                </span>
                
              )}
            </div>
          
          ))}
        </div>
        <div className="col-sm-2"></div>
      </div>
      <br/>
      <br/><br/> <br/><br/>
      <br/>
    </div>
  );
}
