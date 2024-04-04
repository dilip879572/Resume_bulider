"use client"
import Link from "next/link";
import "./page.module.css";
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';

import 'aos/dist/aos.css';
export default function page() {


  useEffect(() => {
    AOS.init({ duration: "1000", delay: "1000" })
  }, [])

 

  return (
    <div className="container-fluid mt-5">
      <div className="row ">
        <div className="col-sm-1"></div>
        <div className="col-sm-5 mt-5" data-aos="fade-right">
          <div className="mt-5" style={{

            marginTop: "60px"


          }}>
            <span className="display-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" style={{ transform: 'translate(-1.1rem, -1ex)' }} viewBox="0 0 43 43" fill="none">
                <path d="M0 21.3417C0 9.55503 9.55503 0 21.3417 0C33.1285 0 42.6835 9.55503 42.6835 21.3417C42.6835 33.1285 33.1285 42.6835 21.3417 42.6835C9.55503 42.6835 0 33.1285 0 21.3417Z" fill="#1A66B0" fill-opacity="0.22"></path>
              </svg>
              <br />
              <br />
              <span style={{ fontWeight: "bold" }}>

                Create a <span style={{ color: "#0055ff" }}>Free Resume</span>  that  <br /> secures your <span style={{ color: "#0055ff" }}>dream job</span>
              </span>
            </span>
          </div>
          <span>
            Build a resume thats piques the interest of recruiters and gets you hired. It’s fast and easy to use.
          </span>
          <center>

            <div className="mt-4">
              <Link href="https://www.youtube.com/watch?v=n7WXasouPYg">              <button style={{ height: "45px", width: "230px", marginLeft: "px", borderRadius: "4px", backgroundColor: "#0055ff", color: "white", border: "none" }} className="m-1">Try for free</button>     <button style={{ height: "45px", width: "270px", marginLeft: "10px", borderRadius: "4px", backgroundColor: "#55ff7f", color: "white", border: "none" }}>Watchs Video</button>
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="69" height="81" viewBox="0 0 69 83" style={{ transform: 'translate(-.100rem, 3ex)' }} fill="none"><rect x="0.659668" y="0.330261" width="52.7634" height="49.2818" fill="#1A66B0" fill-opacity="0.22"></rect><rect x="16.4209" y="33.7501" width="48.1882" height="47.7065" stroke="#1A66B0" stroke-width="1.57528" stroke-dasharray="3.15 3.15"></rect></svg>
            </div>
          </center>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-3 webss mt-5" data-aos="zoom-in-down">
          <svg xmlns="http://www.w3.org/2000/svg" width="67" height="45" style={{ transform: 'translate(28rem, 5ex)' }} viewBox="0 0 67 45" fill="none"><path d="M33.5079 0L66.8568 44.5393H0.159084L33.5079 0Z" fill="#1A66B0" fill-opacity="0.47"></path></svg>
          <img src="
      
     https://resume4u.io/images/landigPageFirst.webp" alt="" style={{ width: "100%", height: "450px", border: "1px solid #aaffff", borderRadius: "10px" }} />
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" style={{ transform: 'translate(26rem, -2ex)' }} viewBox="0 0 43 43" fill="none"><path d="M0 21.3417C0 9.55503 9.55503 0 21.3417 0C33.1285 0 42.6835 9.55503 42.6835 21.3417C42.6835 33.1285 33.1285 42.6835 21.3417 42.6835C9.55503 42.6835 0 33.1285 0 21.3417Z" fill="#1A66B0" fill-opacity="0.22"></path></svg>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12 display-5">
          <span style={{ fontWeight: "bold" }}>
            <center>
              Build your <span style={{ color: "#0055ff" }}>Resume </span> in 3 steps
            </center>
          </span>
        </div>

      </div>
      <div className="row mt-5">
        <div className="col-sm-1"></div>
        <div className="col-sm-2" data-aos="zoom-in-lift">
          <img src="https://resume4u.io/images/fillYourInfo.webp" alt="" style={{ height: "250px" }} />
        </div>
        <div className="col-sm-3 mt-5" data-aos="zoom-in-right" style={{ textAlign: "start" }}>
          <span>
            <span style={{ fontSize: "28px", color: "#0055ff" }}>
              1 . Fill out your info <br />
            </span>
            &nbsp;    &nbsp;    &nbsp;   &nbsp;  Fill in the blanks and see results in real-time.
          </span>
        </div>
        <div className="col-sm-6 ">



          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none"><path d="M0 21.3417C0 9.55503 9.55503 0 21.3417 0C33.1285 0 42.6835 9.55503 42.6835 21.3417C42.6835 33.1285 33.1285 42.6835 21.3417 42.6835C9.55503 42.6835 0 33.1285 0 21.3417Z" fill="#1A66B0" fill-opacity="0.22"></path></svg>

        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-6">
          <svg className="savg22" style={{ transform: 'translate(28rem, 10ex)' }} xmlns="http://www.w3.org/2000/svg" width="69" height="83" viewBox="0 0 69 83" fill="none"><rect x="0.659668" y="0.330261" width="52.7634" height="49.2818" fill="#1A66B0" fill-opacity="0.22"></rect><rect x="16.4209" y="33.7501" width="51.1882" height="47.7065" stroke="#1A66B0" stroke-width="1.57528" stroke-dasharray="3.15 3.15"></rect></svg>

        </div>

        <div className="col-sm-2" data-aos="zoom-in-left">
          <img src="https://resume4u.io/images/previewYourResume.webp" alt="" style={{ height: "350px" }} />
        </div>
        <div className="col-sm-3 mt-5" style={{ textAlign: "start" }}>
          <span>
            <span style={{ fontSize: "28px", color: "#0055ff" }}>
              2.
              Preview your  <br />
            </span>
            &nbsp;    &nbsp;    &nbsp;   &nbsp;  Give your document a professional and elegant look.
          </span>
        </div>
        <div className="col-sm-1"></div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-1"></div>
        <div className="col-sm-2" data-aos="zoom-out-up">
          <img src="https://resume4u.io/images/hitDownload.webp" alt="" style={{ height: "250px" }} />
        </div>
        <div className="col-sm-3 mt-5" style={{ textAlign: "start" }}>
          <span>
            <span style={{ fontSize: "28px", color: "#0055ff" }}>
              3 . Fill out your info <br />
            </span>
            &nbsp;    &nbsp;    &nbsp;   &nbsp;  Fill in the blanks and see results in real-time.
          </span>
        </div>
        <div className="col-sm-6 ">



          <svg xmlns="http://www.w3.org/2000/svg" width="67" height="45" viewBox="0 0 67 45" fill="none"><path d="M33.5079 0L66.8568 44.5393H0.159084L33.5079 0Z" fill="#1A66B0" fill-opacity="0.47"></path></svg>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2"> </div>
        <div className="col-sm-8 ">
          <center>
            <span className="" style={{ textAlign: "center", fontSize:"40px", fontFamily: "blod" ,textTransform:"uppercase" }}>
                 About  <span style={{ color: "#0055ff" }}> Resume</span>
            </span>
          </center>
          <div className="row mt-4">
            <div className="col-sm-6" data-aos="zoom-out-up">
              <img src="https://resume4u.io/images/aboutCompany.webp" alt="" style={{ height: "360px", width: "100%" }} />


            </div>
            <div className="col-sm-6 mt-3" data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500">
              <p className="" style={{ fontFamily: " system-ui", fontSize: "17px" ,textAlign:"justify"}}>
                Resume4u is owned by a single person. Resume4u is focused on providing the premium services free of coast all around the internet while other agencies are charging for these services. Resume4u provides his user's a free resume builder , editor where user can create , edit free premium resume templates. Our main motive is to give best user experience free of coast so the can do something practical in their life. Share you thoughts with us about our <br />

                In an effort to deliver more value to our users, we decided to specialize in just resume-building. Knowing that hiring managers nowadays are stricter than ever; we devoted countless hours to studying job-winning resumes, getting resume templates critiqued by experts and testing our resume content through the grueling process of trial & error.

                <span style={{ fontWeight: "bold" }}>Unlock Your Potential, Unleash Your Future - For Free!</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>

      </div>

      <div className="row mt-5">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="row">
            <div className="col-sm-4 zoom" style={{ textAlign: "center" }} >
              <img src="https://www.paradigmyouthnetwork.org/img/icons/f1.png" alt="" style={{ height: "80px" }} />
              <br />
              <span style={{ color: "blue" }} className="mt-2"><h5> Resume Objectives</h5>  </span>
              <p>
                Resume objectives are used to show employers <br /> what you’re looking for in
                your next role:  <br /> take a look at our samples today  <br />
                to hone in on what   you want  <br />in a job.
              </p>
            </div>
            <div className="col-sm-4 zoom " style={{ textAlign: "center" }} >

              <img src="https://www.paradigmyouthnetwork.org/img/icons/f2.png" alt="" style={{ height: "80px" }} />
              <span style={{ color: "blue" }}><h5>Resume Examples</h5></span>
              <p>
                Sometimes having an example to work from can <br />  give you the boost you need to write a <br /> great
                resume. Check out our resume  <br /> examples today.
              </p>
            </div>
            <div className="col-sm-4 zoom " style={{ textAlign: "center" }} >
              <img src="https://www.paradigmyouthnetwork.org/img/icons/f3.png" style={{ height: "80px" }} />
              <span style={{ color: "blue" }}><h5>Job Description Examples</h5></span>
              <p>
                Customizing your resume to the job description  <br />  can increase your chances of success. <br />
                Review our library of job <br /> descriptions today.
              </p>

            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-sm-4 zoom " style={{ textAlign: "center" }} >
              <img src="https://www.paradigmyouthnetwork.org/img/icons/f4.png" alt="" style={{ height: "80px" }} />
              <br />
              <span style={{ color: "blue" }} className="mt-2"><h5> Cover Letter Samples</h5>  </span>
              <p>
                A great cover letter can help distinguish you from <br /> the competition! Check out our cover <br />   letter samples  to make yours shine.              </p>
            </div>
            <div className="col-sm-4 zoom " style={{ textAlign: "center" }} >

              <img src="https://www.paradigmyouthnetwork.org/img/icons/f5.png" alt="" style={{ height: "80px" }} />
              <span style={{ color: "blue" }}><h5>Sample Letters</h5></span>
              <p>
                Need a template for writing various work-related  <br />   letters or emails? We have curated 100s of <br />
                business-focused sample letters for <br />    you to use in a variety <br />   of scenarios.              </p>
            </div>
            <div className="col-sm-4 zoom " style={{ textAlign: "center" }} >
              <img src="https://www.paradigmyouthnetwork.org/img/icons/f6.png" style={{ height: "80px" }} />
              <span style={{ color: "blue" }}><h5>Professional Resume Writing Service</h5></span>
              <p>
                Need a professionally written resume? Our  <br />
                partner MyCVCreator provides options  <br />for resume-   writing services <br />  for every budget.              </p>

            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
      <br />
      <br />



      <div className="momom">





        <div className="row mt-5">
          <span style={{ fontWeight: "bold" }}>
            <center>
              <div className="display-6">
                Benefits Of Using Our Product
              </div>            <br />
              <span style={{ color: "#0055ff", fontSize: "30px" }}>    Why Choose Us?</span>
            </center>
          </span>
          <div className="col-sm-4">
            <div className="row mt-5">
              <div className="col-sm-1"></div>
              <div className="col-sm-3">
                <img src="https://resume4u.io/images/easyToUse.webp" alt="" style={{ height: "150px", }} />
              </div>
              <div className="col-sm-8" style={{ textAlign: "start" }}>
                <span className="fs-5" style={{ fontWeight: "bold" }}>
                  Easy to use <br />
                  &nbsp; &nbsp;
                </span>
                <span className="m-1">
                  Craft Your Professional <br /> <span className="m-3">Story with Ease - Simplicity is</span>   <br /> <span className="m-3">our Specialty.</span>
                </span>
              </div>
            </div>

          </div>
          <div className="col-sm-4">
            <div className="row mt-5">
              <div className="col-sm-1"></div>
              <div className="col-sm-3">
                <img src="https://resume4u.io/images/secure.webp" alt="" style={{ height: "150px", }} />
              </div>
              <div className="col-sm-8" style={{ textAlign: "start" }}>
                <span className="fs-5" style={{ fontWeight: "bold" }}>
                  Secure <br />
                  &nbsp; &nbsp;
                </span>
                <span className="m-1">
                  Craft Your Professional <br /> <span className="m-3">Story with Ease - Simplicity is</span>   <br /> <span className="m-3">our Specialty.</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row mt-5">
              <div className="col-sm-1"></div>
              <div className="col-sm-4">
                <img src="https://resume4u.io/images/sleekDesign.webp" alt="" style={{ height: "150px", }} />
              </div>
              <div className="col-sm-7" style={{ textAlign: "start" }}>
                <span className="fs-5" style={{ fontWeight: "bold" }}>
                  Sleek Design <br />
                  &nbsp; &nbsp;
                </span>
                <span className="m-1">
                  Craft Your Professional <br /> <span className="m-3">Story with Ease - Simplicity is</span>   <br /> <span className="m-3">our Specialty.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">

          <div className="col-sm-4">
            <div className="row mt-5">
              <div className="col-sm-1"></div>
              <div className="col-sm-4">
                <img src="https://resume4u.io/images/intelligentDesign.webp" alt="" style={{ height: "130px", }} />
              </div>
              <div className="col-sm-7" style={{ textAlign: "start" }}>
                <span className="fs-5" style={{ fontWeight: "bold" }}>
                  Customizable <br />
                  &nbsp; &nbsp;
                </span>
                <span className="m-1">
                  Craft Your Professional <br /> <span className="m-3">Story with Ease - Simplicity is</span>   <br /> <span className="m-3">our Specialty.</span>
                </span>
              </div>
            </div>

          </div>
          <div className="col-sm-4">
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-4">
                <img src="https://resume4u.io/images/secureNew.webp" alt="" style={{ height: "150px", }} />
              </div>
              <div className="col-sm-7" style={{ textAlign: "start" }}>
                <span className="fs-5" style={{ fontWeight: "bold" }}>
                  Mobile-Friendly<br />
                  &nbsp; &nbsp;
                </span>
                <span className="m-1">
                  Craft Your Professional <br /> <span className="m-3">Story with Ease - Simplicity is</span>   <br /> <span className="m-3">our Specialty.</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-3">
                <img src="https://resume4u.io/images/noHiddenCharges.webp" alt="" style={{ height: "150px", }} />
              </div>
              <div className="col-sm-8" style={{ textAlign: "start" }}>
                <span className="fs-5" style={{ fontWeight: "bold" }}>
                  No Charges<br />
                  &nbsp; &nbsp;
                </span>
                <span className="m-1">
                  Craft Your Professional <br /> <span className="m-3">Story with Ease - Simplicity is</span>   <br /> <span className="m-3">our Specialty.</span>
                </span>
              </div>
            </div>
          </div>
        </div>





      </div>

      <div className="row mt-5 d-md-none interval={1000}">
        <div className="col-12 text-center">
          <span style={{ fontWeight: "bold" }}>
            <div className="display-2">
              Benefits Of Using Our Product
            </div>
            <br />
            <span style={{ color: "#0055ff", fontSize: "30px" }}>Why Choose Us?</span>
          </span>
        </div>

        {/* Use Carousel for smaller screens */}
        <Carousel className="col-sm-12 ">
          {/* First Slide */}
          <Carousel.Item>
            <div className="row ">
              <div className="col-sm-12 text-center">
                <img src="https://resume4u.io/images/easyToUse.webp" alt="" style={{ height: "130px", marginLeft: "-30px" }} />

                <span className="display-6" style={{ fontWeight: "bold", marginLeft: "0px" }}>
                  No Charges<br />

                </span>
                <div style={{ transform: 'translate(40px, -40px)' }}>
                  <span className="mb-5">
                    Craft Your Professional <br />
                    <span className="m">Story with Ease - Simplicity is</span> <br />
                    <span className="">our Specialty.</span>
                  </span>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row ">
              <div className="col-sm-12 text-center">
                <img src="https://resume4u.io/images/noHiddenCharges.webp" alt="" style={{ height: "170px" }} />

                <span className="display-6" style={{ fontWeight: "bold" }}>
                  No Charges<br />

                </span>
                <div style={{ transform: 'translate(50px, -60px)' }}>
                  <span className="mb-5">
                    Craft Your Professional <br />
                    <span className="m">Story with Ease - Simplicity is</span> <br />
                    <span className="">our Specialty.</span>
                  </span>
                </div>
              </div>
            </div>
          </Carousel.Item>       <Carousel.Item>
            <div className="row ">
              <div className="col-sm-12 text-center">
                <img src="https://resume4u.io/images/secure.webp" alt="" style={{ height: "170px" }} />

                <span className="display-6" style={{ fontWeight: "bold" }}>

                  Secure<br />

                </span>
                <div style={{ transform: 'translate(50px, -60px)' }}>
                  <span className="mb-5">
                    Craft Your Professional <br />
                    <span className="m">Story with Ease - Simplicity is</span> <br />
                    <span className="">our Specialty.</span>
                  </span>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="row ">
              <div className="col-sm-12 text-center">
                <img src="https://resume4u.io/images/sleekDesign.webp" alt="" style={{ height: "120px" }} />

                <span className="display-6" style={{ fontWeight: "bold" }}>
                  Sleek Design<br />

                </span>
                <div style={{ transform: 'translate(50px, -40px)' }}>
                  <span className="mb-5">
                    Craft Your Professional <br />
                    <span className="m">Story with Ease - Simplicity is</span> <br />
                    <span className="">our Specialty.</span>
                  </span>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="row ">
              <div className="col-sm-12 text-center">
                <img src="https://resume4u.io/images/sleekDesign.webp" alt="" style={{ height: "130px" }} />

                <span className="display-6" style={{ fontWeight: "bold" }}>
                  Sleek Design<br />

                </span>
                <div style={{ transform: 'translate(50px, -60px)' }}>
                  <span className="mb-5">
                    Craft Your Professional <br />
                    <span className="m">Story with Ease - Simplicity is</span> <br />
                    <span className="">our Specialty.</span>
                  </span>
                </div>
              </div>
            </div>
          </Carousel.Item>


        </Carousel>


      </div>
      <div className="row" style={{ height: "100px", backgroundColor: "white" }}>
        <div className="col-sm-12"></div>
      </div>
      <div className="resumess">


        <div className="row ">
          <div className="col-sm-1  mt-5"></div>
          <div className="col-sm-3 mt-5">
            <span className="display-6 mt-5" style={{ fontWeight: "bold", textAlign: "start" }}>
              Testimonials From <br /> Our Previous Users
            </span><br />
            <span style={{ fontWeight: "bold", color: "#0055ff", fontSize: "20px" }}>
              <center>
                What People Say About Us
              </center>
            </span>
          </div>
          <div className="col-sm-3 mt-5" style={{ boxShadow: "0px 0px 10px 0px black", height: "250px", borderRadius: "10px" }}>
            <img src="https://resume4u.io/images/profileNew.webp" alt="" style={{ height: "80px" }} />   <span className="" style={{ fontWeight: "bold", fontSize: "23px" }}>
         Dilip Kumar</span><br />
            <span>
  
            </span>
            <span style={{ fontSize: "20px", marginLeft: "56px" }}>
              Dropping my honest feedback this  website help me to create my resume within  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; minutes  and save my time as
            </span>
    
          </div>
          <div className="col-sm-4"></div>



        </div>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-3 mt-5 m-2" style={{ boxShadow: "0px 0px 2px 0px white", height: "250px", backgroundColor: "white", borderRadius: '10px' }}>
            <img src="https://resume4u.io/images/profileNew.webp" alt="" style={{ height: "80px" }} />   <span className="" style={{ fontWeight: "bold", fontSize: "23px" }}>
              Vijay Sharma</span><br />
            <span>
   
            </span>
            <span style={{ fontSize: "20px", marginLeft: "56px" }}>
              I recently used this website to create my and ease of use. The  &nbsp; &nbsp; resume, and I was truly impressed by the efficiency    minutes  and save
            </span>
            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;

          </div>

          <div className="col-sm-4"></div>
          <div className="col-sm-3   mt-5 m-2" data-aos="zoom-out-up" style={{ boxShadow: "0px 0px 10px 0px black", height: "250px", zIndex: "0", backgroundColor: "white", borderRadius: '10px' }}>
            <img src="https://resume4u.io/images/profileNew.webp" alt="" style={{ height: "80px" }} />   <span className="" style={{ fontWeight: "bold", fontSize: "23px" }}>

              Manish kumar</span><br />
            <span>
  
            </span>
            <span style={{ fontSize: "20px", marginLeft: "56px" }}>
              Dropping my honest feedback this  website help me to create my resume within   minutes  and save my time as
            </span>
            <span className="font-bold text-20xl px-1 leading-none self-end display-6 mt-5">”</span>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <div className="row mt-5 d-md-none">


          {/* Use Carousel for smaller screens */}
          <Carousel className="col-sm-12 interval={1000}">
            {/* First Slide */}
            <Carousel.Item>
              <div>

                <div className="m-4 mt-5" data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom" style={{ boxShadow: "0px 0px 10px 0px black", height: "250px", zIndex: "0", backgroundColor: "white", borderRadius: '10px' }}>
                  <img src="https://resume4u.io/images/profileNew.webp" alt="" style={{ height: "80px" }} />   <span className="" style={{ fontWeight: "bold", fontSize: "23px" }}>

                    Kenneth Paul</span><br />
                  <span>
                    <span className="font-bold text-10xl leading-none display-6">“</span>
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "56px" }}>
                    Dropping my honest feedback this   website help me to create my resume within  minutes  and save my time as
                  </span>
                  <span className="font-bold text-20xl px-1 leading-none self-end display-6 mt-5">”</span>
                </div>
              </div>
            </Carousel.Item>

            {/* Second Slide */}
            <Carousel.Item>
              <div>
                <div className="m-4 mt-5" style={{ boxShadow: "0px 0px 10px 0px black", height: "250px", zIndex: "0", backgroundColor: "white", borderRadius: '10px' }}>
                  <img src="https://resume4u.io/images/profileNew.webp" alt="" style={{ height: "80px" }} />   <span className="" style={{ fontWeight: "bold", fontSize: "23px" }}>

                    Kenneth Paul</span><br />
                  <span>
                    <span className="font-bold text-10xl leading-none display-6">“</span>
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "56px" }}>
                    Dropping my honest feedback this    website help me to create my resume within  minutes  and save my time as
                  </span>
                  <span className="font-bold text-20xl px-1 leading-none self-end display-6 mt-5">”</span>
                </div>
              </div>
            </Carousel.Item>

            {/* Third Slide */}
            <Carousel.Item>
              <div>
                <div className="m-4 mt-5" style={{ boxShadow: "0px 0px 10px 0px black", height: "250px", zIndex: "0", backgroundColor: "white", borderRadius: '10px' }}>
                  <img src="https://resume4u.io/images/profileNew.webp" alt="" style={{ height: "80px" }} />   <span className="" style={{ fontWeight: "bold", fontSize: "23px" }}>

                    Kenneth Paul</span><br />
                  <span>
                    <span className="font-bold text-10xl leading-none display-6">“</span>
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "56px" }}>
                    Dropping my honest feedback this     website help me to create my resume within  minutes  and save my time as
                  </span>
                  <span className="font-bold text-20xl px-1 leading-none self-end display-6 mt-5">”</span>
                </div>
              </div>
            </Carousel.Item>


            <Carousel.Item>
              <div>
                <div className=" m-4 mt-5" style={{ boxShadow: "0px 0px 10px 0px black", height: "350px", zIndex: "0", backgroundColor: "white", borderRadius: '10px' }}>
                  <img src="https://resume4u.io/images/profileNew.webp" alt="" style={{ height: "80px" }} />   <span className="" style={{ fontWeight: "bold", fontSize: "23px" }}>

                    Kenneth Paul</span><br />
                  <span>
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "56px" }}>
                    Droppings my honest feedback this    website help me to create my resume within  minutes  and save my time as
                  </span>
           
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

      </div>



    </div>
  )
}

