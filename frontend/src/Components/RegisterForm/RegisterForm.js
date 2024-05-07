import axios from "axios";
import React, { useState } from "react";
import { CiLock, CiMail, CiUser } from "react-icons/ci";
import { message } from "react-message-popup";
import "./RegisterForm.css";
import { validateForm } from "./RegisterValidation";

function RegistrationForm({ toggleForm }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); // State to track password visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData); // Validate form data
    if (Object.values(errors).some((error) => error !== "")) {
      setFormErrors(errors);
      message.error("Ein Fehler ist bei der Registrierung aufgetreten", 4000);
      return;
    }
    try {
      const headers = {
        "Content-Type": "application/json",
      };

      const response = await axios.post(
        "http://localhost:8080/api/users/register",
        formData,
        { headers: headers }
      );
      console.log("User registered successfully:", response.data);
      console.log(response);
      console.log(response.status);
      if (response.status === 201) {
        message.success(
          "Registrierung ist erfolgreich, Sie können sich jetzt anmelden",
          4000
        );
      }

      // Reset form data and errors
      setFormData({
        username: "",
        email: "",
        password: "",
      });
      setFormErrors({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error registering user:", error);
      if (error.response && error.response.status === 409) {
        message.error("Benutzername oder E-Mail bereits registriert", 4000);
      }
    }
  };

  return (
    <div className="wrapper">
      <h1>Registrieren</h1>
      <form onSubmit={handleSubmit} className="">
        <div className={`input-box ${formErrors.username && "error-message"}`}>
          <input
            type="text"
            name="username"
            placeholder="Benutzername"
            value={formData.username}
            onChange={handleChange}
            maxLength={100}
          />
          <CiUser className="icon" />
          {formErrors.username && (
            <p className="error-message">{formErrors.username}</p>
          )}
        </div>

        <div className={`input-box ${formErrors.email && "error-message"}`}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            maxLength={100}
          />
          <CiMail className="icon" />
          {formErrors.email && (
            <p className="error-message">{formErrors.email}</p>
          )}
        </div>

        <div className={`input-box ${formErrors.password && "error-message"}`}>
          <input
            type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
            name="password"
            placeholder="Passwort"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
            maxLength={100}
          />
          <CiLock
            className="password-icon icon"
            onClick={togglePasswordVisibility}
          />{" "}
          {formErrors.password && (
            <p className="error-message">{formErrors.password}</p>
          )}
        </div>
        <button type="submit" className="button">
          Registrieren
        </button>
        <div className="login-link">
          <p>
            Bereits registriert? <a href="login">Anmelden</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
