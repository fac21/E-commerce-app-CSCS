import React from "react";

function Login(props) {
    return (
    <form onSubmit={(event) => {
        event.preventDefault();
        console.log(event.username)
        }}>
        <fieldset>
            <legend>Log-in:</legend>
            <label htmlFor="username">
            Username:
            <input 
                type="text" 
                id="username" 
                placeholder="username..."
                aria-label="Input your username"
            /> 
            </label>
            <label htmlFor="password">
            Password:
            <input 
                type="password" 
                id="password" 
                placeholder="Password..."
                aria-label="Input your password"
            /> 
            </label>
            <label htmlFor="submit">
            <button 
                type="submit"
                id="submit" 
                aria-label="Submit username and password">
                    Submit
                </button>
            </label>
        </fieldset>
      </form>
    )
  }

export default Login;