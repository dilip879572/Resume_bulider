"use client";
import Link from "next/link";
import "./pages.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
export default function create() {
  useEffect(() => {
    AOS.init({ duration: "1000", delay: "5000" });
  }, []);

  const fetchData = async () => {
    const url =
      "https://universities-and-colleges1.p.rapidapi.com/rest_api/univ/search?q=Bandung";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "685d69f8d1mshc31b67c3b74c78cp173304jsnb474001d47dd",
        "X-RapidAPI-Host": "universities-and-colleges1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  // Call the fetchData function to retrieve and display the data
  fetchData();

  return (
    <div className="container-fluid mt-5">
      <div className="row mt-5">
        <div className="col-sm-12 mt-5">
          <span
            className="display-6 mt-5"
            style={{
              fontWeight: "bold",
              marginTop: "150px",
              textTransform: "uppercase",
            }}
          >
            <br />
            <br />
            <center>
              We have variety of{" "}
              <span style={{ color: "#0055ff" }}> Free Templates </span> <br />{" "}
              for you. Select the eye-catching <br />{" "}
              <span style={{ color: "#0055ff" }}> Template.</span>
            </center>
          </span>
        </div>
      </div>
      <div
        className="row m-1 mt-5"
        style={{ boxShadow: "0px 10px 10px black" }}
      >
        <div className="col-sm-3 mt-4" data-aos="flip-right">
          <div class="image-container">
            <img
              src="https://shrifiles.b-cdn.net/templates/modern-contemporary-big.webp"
              alt="Forest"
              style={{ height: "600px", width: "100%" }}
            />
            <Link href="/minimalist">
              {" "}
              <button class="hover-button btn btn-primary">Select</button>
            </Link>
          </div>
          <span>
            <h5>Minimalist</h5>
          </span>
        </div>
        <div className="col-sm-3 mt-4" data-aos="flip-left">
          <div class="image-container">
            <img
              src="https://resume4u.io/TemplatesImg/Creative.webp"
              alt="Forest"
              style={{ height: "600px", width: "100%" }}
            />
            <Link href="/creative">
              {" "}
              <button class="hover-button btn btn-primary">Select</button>
            </Link>
          </div>
          <span>
            <h5>Creative</h5>
          </span>
        </div>
        <div className="col-sm-3 mt-4" data-aos="flip-right">
          <div class="image-container">
            <img
              src="https://resume4u.io/TemplatesImg/Advanced.webp"
              alt="Forest"
              style={{ height: "600px", width: "100%" }}
            />
            <Link href="/advanced">
              {" "}
              <button class="hover-button btn btn-primary">Select</button>
            </Link>
          </div>
          <span>
            <h5>Advanced</h5>
          </span>
        </div>
        <div className="col-sm-3 mt-4" data-aos="flip-up">
          <div class="image-container">
            <img
              src="https://resume4u.io/TemplatesImg/Ordinary.webp"
              alt="Forest"
              style={{ height: "600px", width: "100%" }}
            />
            <Link href="/ordinary">
              {" "}
              <button class="hover-button btn btn-primary">Select</button>
            </Link>
          </div>
          <span>
            <h5>Ordinary</h5>
          </span>
        </div>
        <div className="row mb-5">
          <div
            className="col-sm-3 mt-4"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div class="image-container">
              <img
                src="https://resume4u.io/TemplatesImg/Professional.webp"
                alt="Forest"
                style={{ height: "600px", width: "100%" }}
              />
              <Link href="/professional">
                {" "}
                <button class="hover-button btn btn-primary">Select</button>
              </Link>
            </div>
            <span>
              <h5>Professional</h5>
            </span>
          </div>
          <div className="col-sm-3 mt-4" data-aos="flip-left">
            <div class="image-container">
              <img
                src="https://resume4u.io/TemplatesImg/Futuristic.webp"
                alt="Forest"
                style={{ height: "600px", width: "100%" }}
              />
              <Link href="/futuristic">
                {" "}
                <button class="hover-button btn btn-primary">Select</button>
              </Link>
            </div>
            <span>
              <h5>Futuristic</h5>
            </span>
          </div>
        </div>
        <br /> <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
