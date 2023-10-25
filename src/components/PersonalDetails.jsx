import { useState } from "react";
import "../styles/form.css";

export default function PersonalDetailsForm({
  personalDetails,
  handleInput,
  handleFormToggle,
  formId,
  isActive,
}) {
  const { fullName, email, phoneNumber, location } = personalDetails;

  return (
    <form action="">
      <div className="form-header__wrapper">
        <h2>Personal Details</h2>
        <button
          className="btn-toggle-form"
          onClick={(e) => {
            e.preventDefault();
            handleFormToggle(formId);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>chevron-down</title>
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </button>
      </div>
      {!isActive ? null : (
        <div className="form-inputs__wrapper visible">
          <label>
            Full name
            <input
              type="text"
              placeholder="First and last name"
              value={fullName}
              onChange={(e) => handleInput("fullName", e)}
            ></input>
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => handleInput("email", e)}
            ></input>
          </label>
          <label>
            Phone number
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => handleInput("phoneNumber", e)}
            ></input>
          </label>
          <label>
            Location
            <input
              type="text"
              placeholder="City, State"
              value={location}
              onChange={(e) => handleInput("location", e)}
            ></input>
          </label>
        </div>
      )}
    </form>
  );
}
