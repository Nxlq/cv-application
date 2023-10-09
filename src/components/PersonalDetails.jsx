import { useState } from "react";
import "../styles/form.css";

export default function PersonalDetailsForm({ personalDetails, handleInput }) {
  const { fullName, email, phoneNumber, location } = personalDetails;

  return (
    <form action="">
      <h2>Personal Details</h2>
      <div className="form-inputs__wrapper">
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
    </form>
  );
}
