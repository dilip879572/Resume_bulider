"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Suggestion");
  const [message, setMessage] = useState("");
  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, delay: 5000 });
  }, []);

  useEffect(() => {
    // Check if all input fields are filled
    setIsFormFilled(name !== "" && email !== "" && message !== "");
  }, [name, email, message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormFilled) {
      // Your submission logic here

      // Reset form fields after submission
      setName("");
      setEmail("");
      setSubject("Suggestion");
      setMessage("");

      // Show toast upon successful submission
      toast.success("Message sent successfully!");
    } else {
      toast.error("Please fill in all input fields!");
    }
  };

  return (
    <div className="container-fluid mt-5" data-aos="zoom-in-up">
      <div className="row mt-5">
        <div className="col-sm-2"></div>
        <div className="col-sm-8 mt-5">
          <span
            className="display-6"
            style={{
              fontWeight: "bold",
              color: "#0055ff",
              textTransform: "uppercase",
            }}
          >
            Contact Us
          </span>
          <br />
          <b className="">
            Our 24/7 support is available. Find a solution to any of your query
            and we would love a feedback regarding our services.
          </b>
          <form onSubmit={handleSubmit}>
            <div className="row mt-5 m-2">
              <div className="col-sm-6 mb-4">
                <label className="text-inverse" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control h-100"
                  id="name"
                  placeholder="First name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="col-sm-6 mb-4">
                <label className="text-inverse" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control h-100"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row m-2 mt-3">
              <div className="col-sm-12">
                <label className="text-inverse" htmlFor="subject">
                  Subject
                </label>
                <select
                  className="form-control h-100"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option>Suggestion</option>
                  <option>Request A Template</option>
                  <option>Found A Bug</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="row m-2 mt-4">
              <div className="col-sm-12 mb-4">
                <label className="text-inverse mt-3" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="form-control h-100"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center m-5">
              <button
                type="submit"
                className="px-7 py-3 bg-primary text-white font-medium rounded-sm mt-2 p-5"
                disabled={!isFormFilled}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-sm-2"></div>
      <ToastContainer />
    </div>
  );
}
