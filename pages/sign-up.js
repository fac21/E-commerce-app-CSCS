import Link from "next/link";
import React, { useState } from "react";

//How do you access user values inside React Component?
// Working with multiple inputs

// export default function SignUpPage() {
// const registerUser = (event) => {
//   event.preventDefault();
//   console.log("Hello");
//   console.log(event);
// };
// const [name, setName] = useState("");
// const registerUser = (event) => {
//   console.log(event);
//   setName(event.target.value);
// };

function MyControlledInput({}) {
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
  });

  //Single input
  // const onChange = (event) => {
  //   setName(event.target.value);
  // };

  // const handleChange = ({ target }) => {
  //   setState({ [target.name]: target.value });
  // };

  return (
    <div className="sign-up__form">
      <h1>Sign up</h1>
      <form>
        {/* <div>Input value: {value}</div>
        <input value={value} onChange={onChange} /> */}

        <label htmlFor="name">
          Name <span aria-hidden="true"></span>
        </label>
        <input
          type="name"
          id="name"
          name="name"
          value={values.name}
          onChange={MyControlledInput}
          required
        />

        <label htmlFor="email">
          Email <span aria-hidden="true"></span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={MyControlledInput}
          required
        />

        <label htmlFor="password">
          Password <span aria-hidden="true">*</span>
        </label>
        {/* <div id="passwordRequirements">
          Passwords must contain at least one letter and one number, and contain
          at least 8 characters.
        </div> */}
        <input
          type="password"
          id="password"
          name="password"
          // aria-describedby="passwordRequirements"
          // pattern=".*\d.*"
          // minlength="8"
          // required
          value={values.password}
          onChange={MyControlledInput}
        />
        <button>Sign Up</button>
      </form>
      <br></br>
      <Link href="/">
        <a>Back to Homepage</a>
      </Link>
    </div>
  );
}

export default MyControlledInput;
