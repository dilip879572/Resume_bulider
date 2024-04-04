"use client"
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserAlt } from "react-icons/fa";
import "./page.css";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);

  const handleSendPasswordLink = async () => {
    if (email.trim() === "") {
      toast.error("Email is required!", {
        position: "top-center"
      });
    } else if (!email.includes("@")) {
      toast.warning("Email must include @!", {
        position: "top-center"
      });
    } else {
      try {
        const res = await fetch("http://localhost:6085/sendpasswordlink", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        });
  
        console.log(email);
  
        const data = await res.json();
  
        if (data.status === 200) {
          setEmail("");
          setMessage(true);
          toast.success("Password reset link sent successfully!", {
            position: "top-center"
          });
  
        
        //   const { userId, token } = data; 
        //   window.location.href = `http://localhost:3000/Reset/${userId}/${token
        
        
        // }`;
        } else {
          toast.error("Invalid User", {
            position: "top-center"
          });
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.", {
          position: "top-center"
        });
      }
    }
  };
  

  return (
    
    <div className="container-fluid hhhh mt-5">
  
<div className="mt-4 "style={{marginTop:"200px"}}>
<div className="row mt-5 mb-5" >
        <div className="col-sm-4"></div>
        <div className="col-sm-3 mt-5 boxss rounded-1 mb-5" >
          <h5 className="mt-4" style={{ textAlign: "center", color: "red", textTransform: "uppercase" }}>Enter Your Email</h5>
          <p className="text-center">Enter your registered email to reset your password.
</p>
          <hr />
          <label className="text-inverse m-2" htmlFor="validationCustomName">

          </label>
          <div className="login__field">
                <i className="login__icon fas fa-user">
                  {" "}
                  <FaUserAlt />
                </i>
                <input
                  type="text"
                  className="login__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="User name / Email"
                />
              </div>
          <button className='form-control mt-2 btn btn-dark mb-4' onClick={handleSendPasswordLink}>Send To Gmail</button>
        </div>
        <div className="col-sm-4"></div>
      </div>
</div>
<ToastContainer/>
    </div>
  );
}

export default ForgotPassword;
