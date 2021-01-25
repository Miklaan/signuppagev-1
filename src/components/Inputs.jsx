import React, { useState } from "react";

function Inputs() {
  const [inputValue, setInputValue] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setInputValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function preventForm(event) {
    event.preventDefault();
  }

  return (
    <div className="s-form">
      <div className="bckg-form">
        <form onSubmit={preventForm}>
          {inputValue.fName !== "" && <label>First Name</label>}
          <input
            style={{
              borderBottomColor: inputValue.fName !== "" && "#0083b0"
            }}
            autoComplete="off"
            onChange={handleChange}
            name="fName"
            type="text"
            placeholder="First Name"
            value={inputValue.fName}
          />
          {inputValue.lName !== "" && <label>Last Name</label>}
          <input
            style={{
              borderBottomColor: inputValue.lName !== "" && "#0083b0"
            }}
            autoComplete="off"
            onChange={handleChange}
            name="lName"
            type="text"
            placeholder="Last Name"
            value={inputValue.inputValuelName}
          />
          {inputValue.email !== "" && <label>Email</label>}
          <input
            style={{
              borderBottomColor: inputValue.email !== "" && "#0083b0"
            }}
            autoComplete="off"
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="Email"
            value={inputValue.email}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Inputs;
