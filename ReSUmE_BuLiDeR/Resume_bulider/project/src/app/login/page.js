"use client";
import { useState } from "react";
import "./login.css";
import { FaInstagramSquare } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { GoogleLogin } from "react-google-login";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginWithGoogle = () => {
    window.open("http://localhost:6085/auth/google/callback", "_self");
    window.localStorage.setItem("");
  };

  const login = async () => {
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:6085/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        toast.success("Login Successful!");
        window.localStorage.setItem("token", token);
        console.log(token);
        console.log(email);
        setTimeout(() => {
          window.location.href = "/create";
        }, 2000);
      } else {
        const error = await response.json();
        toast.error(`Login failed: ${error.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const passworddikhao = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container-fluid hhy mt-5  p-4">
      <div className="container   mt-5 mb-5">
        <div className="screen mt-5">
          <div className="screen__content ">
            <form className="login">
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

              <div className="login__field">
                <i className="login__icon fas fa-lock">
                  <RiLockPasswordFill />
                </i>
                <input
                  type="password"
                  className="login__input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>

              <button
                type="button"
                className="button login__submit"
                onClick={login}
              >
                <span className="button__text">Log In Now</span>
              </button>
            </form>
            <div className="row">
              <center>
                <Link className="text-decoration-none  " href="/registration">
                  {" "}
                  Sign up &nbsp;
                </Link>
                Do You Have an account ?
              </center>
              <div className="col-sm-12">
                <Link
                  className="text-decoration-none text-white"
                  href="/Frogetpassword"
                >
                  <button
                    style={{ backgroundColor: "#4a4382" }}
                    className="btn  text-white btn-sm rounded-5   p-2 w-100"
                  >
                    Forgot Password
                  </button>
                </Link>
              </div>
            </div>

            <div className="row mb-4">
              <center>
                <div className="col-sm-12 w-90 mb-5">
                  {" "}
                  <button
                    className="login-with-google-btn form-control m-1 border-2 "
                    onClick={loginWithGoogle}
                  >
                    Sign With Google
                  </button>
                </div>
              </center>
            </div>
            <div className="social-login">
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram">
                  {" "}
                  {/* <img
                    src="https://cdn-icons-png.freepik.com/256/2111/2111463.png?ga=GA1.2.1007212485.1706766616&"
                    style={{ height: "20px" }}
                  /> */}
                </a>
                <a href="#" className="social-login__icon fab fa-facebook"></a>
                <a href="#" className="social-login__icon fab fa-twitter"></a>
              </div>
            </div>
          </div>
          <div className="screen__background mb-5">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
