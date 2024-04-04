"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./reset.css";

function ResetPassword({ id, token }) {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!id || !token) {
        setMessage("Error: ID or token is undefined");
        return;
      }

      try {
        const res = await fetch(
          `http://localhost:6085/forgotpassword/${id}/${token}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.json();

        if (res.status === 200) {
          console.log("User is valid");
        } else {
          console.log("User not found");
          setMessage("User not found");
        }
      } catch (error) {
        console.error("Error:", error);
        setMessage("Error occurred while fetching user data");
      }
    };

    fetchData();
  }, [id, token]);

  const sendPassword = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:6085/${id}/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setMessage("Password updated successfully!");
      } else {
        setMessage("Failed to update password");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error occurred while updating password");
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4 mt-5 mb-5">
          <div className="mainDiv mt-5" style={{ marginTop: "400px" }}>
            <div className="cardStyle">
              <form onSubmit={sendPassword}>
                <h3 className="formTitle">CREATE NEW PASSWORD</h3>

                <div className="inputDiv">
                  <label className="inputLabel fw-bold" htmlFor="password">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="buttonWrapper">
                  <button
                    type="submit"
                    id="submitButton"
                    className="submitButton pure-button pure-button-primary"
                  >
                    <span>Continue</span>
                  </button>
                </div>
              </form>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
        <div className="col-sm-4"> </div>
      </div>
    </div>
  );
}

export default ResetPassword;
