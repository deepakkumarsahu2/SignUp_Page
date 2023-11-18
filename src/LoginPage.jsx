import React, { useState } from "react";
import "./App.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export default function LoginPage() {
  const [move, setMove] = useState("Sign Up");
  const initialValue = { text: "", email: "", password: "" };
  const [formValue, setFormValue] = useState(initialValue);
  const validateForm = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    // console.log(formValue);
    console.log(JSON.stringify(formValue, undefined, 2));
  };
  return (
    <form action="./php" onSubmit={formSubmit}>
      <div className="main">
        <div className="container">
          <div className="header">
            <div className="text">{move}</div>
            <div className="underline"></div>
          </div>

          <div className="input-field">
            {move === "Log In" ? (
              <div></div>
            ) : (
              <div className="input">
                <div className="logo">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Name"
                  autoComplete="off"
                  value={formValue.text}
                  onChange={validateForm}
                />
              </div>
            )}

            <div className="input">
              <div className="logo">
                <MdEmail />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formValue.email}
                onChange={validateForm}
              />
            </div>
            <div className="input">
              <div className="logo">
                <RiLockPasswordFill />
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formValue.password}
                onChange={validateForm}
              />
            </div>

            {move === "Sign Up" ? (
              <div></div>
            ) : (
              <div className="f-pass">
                Forget Password? <span>Click Here</span>
              </div>
            )}
          </div>
          <div className="submit-section">
            <button
              className={move === "Log In" ? "submit grey" : "submit"}
              onClick={() => {
                setMove("Sign Up");
              }}
              onSubmit={formSubmit}
            >
              SignUp
            </button>
            <button
              className={move === "Sign Up" ? "submit grey" : "submit"}
              onClick={() => {
                setMove("Log In");
              }}
            >
              LogIn
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
