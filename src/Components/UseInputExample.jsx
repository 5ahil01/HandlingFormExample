import React from "react";
import { useInput } from "../Hooks/useInput";
import { isNotEmpty, hasMinLength, isEmail } from "../Validation";
import InputComponent from "./InputComponent";

const UseInputExample = () => {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleOnBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleOnBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log("Login-Submitted");
    console.log("User-Email : ", emailValue);
    console.log("User-Password : ", passwordValue);
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
          error={emailHasError && "Enter a vaild email !"}
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />

        <InputComponent
          label="Password"
          id="password"
          type="password"
          name="password"
          error={passwordHasError && "Enter a vaild password !"}
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />
      </div>

      <p>
        <button>Reset</button>
        <button onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
};

export default UseInputExample;
