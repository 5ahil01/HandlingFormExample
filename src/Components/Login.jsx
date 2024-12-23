import React, { useState } from "react";
import InputComponent from "./InputComponent";

const Login = () => {
  const [enteredValue, setEneterdValue] = useState({
    email: "",
    password: "",
  });

  const [edit, setEdit] = useState({
    email: false,
    password: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Login-Submitted");
    console.log("User-Email", enteredValue.email);
    console.log("User-password", enteredValue.password);
    setEneterdValue({
      email: "",
      password: "",
    });
  }

  const isEmailInvalid = edit.email && !enteredValue.email.includes("@");

  function handleInputChange(identifier, event) {
    setEneterdValue((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));

    setEdit((prev) => ({ ...prev, [identifier]: false }));
  }

  function handleOnBlur(identifier) {
    setEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div>
        <InputComponent
          label="Email"
          id="email"
          type="email"
          name="email"
          error={isEmailInvalid && "Enter a vaild email !"}
          value={enteredValue.email}
          onChange={(e) => handleInputChange("email", e)}
          onBlur={() => {
            handleOnBlur("email");
          }}
        />
        {/* <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => handleInputChange("email", e)}
            onBlur={() => handleOnBlur("email")}
            value={enteredValue.email}
          />
          <div>{isEmailInvalid && <p>Email is Invalid</p>}</div>
        </div> */}

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => handleInputChange("password", e)}
            value={enteredValue.password}
          />
        </div>
      </div>
      <p>
        <button>Reset</button>
        <button onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
};

export default Login;
