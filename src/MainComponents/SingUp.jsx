import React from "react";
import "../MainComponents/SingUp.css";
import Singup from "../assets/login.png";

function SingUp() {
    return (
        <div className="SingUp-wrapper">

            <div className="singup-img">
                <img src={Singup} alt="signup visual" />
            </div>

            <div className="SingUp-container">
                <div className="singup-header">
                    <h2 className="text">Register</h2>
                    <p className="form-subtitle">Manage all your inventory efficiently</p>
                    <p className="form-description">
                        Let's get you all set up so you can verify your personal account and begin setting up your work profile
                    </p>
                </div>

                <div className="Singup-inputs">
                    <div className="input-row">
                        <div className="input-group">
                            <input type="text" placeholder="First name" />
                        </div>
                        <div className="input-group">
                            <input type="text" placeholder="Last name" />
                        </div>
                    </div>

                    <div className="input-row">
                        <div className="input-group">
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="input-group">
                            <input type="text" placeholder="Phone number" />
                        </div>
                    </div>

                    <div className="input-group full-width">
                        <input type="password" placeholder="Enter your password" />
                    </div>

                    <div className="terms">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">
                            I agree to all terms, <a href="#">privacy policies</a>, and <a href="#">fees</a>
                        </label>
                    </div>

                    <div className="submit-container">
                        <button className="submit">Sign up</button>
                    </div>

                    <p className="login-link">Already have an account? <a href="#">Log in</a></p>
                </div>
            </div>
        </div>
    );
}

export default SingUp;