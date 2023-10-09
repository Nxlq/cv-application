import { useState } from "react";
import "../styles/form.css";

export default function PersonalDetailsForm({ personalDetails, handleInput }) {
  return (
    <form action="">
      <h2>Personal Details</h2>
      <div className="form-inputs__wrapper">
        <label>
          Full name
          <input
            type="text"
            placeholder="First and last name"
            value={personalDetails.fullname}
            onChange={(e) => handleInput("fullName", e)}
          ></input>
        </label>
        <label>
          Email
          <input type="email" placeholder="Enter email"></input>
        </label>
        <label>
          Phone number
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="Enter phone number"
          ></input>
        </label>
        <label>
          Location
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="City, State"
          ></input>
        </label>
      </div>
    </form>
  );
}
