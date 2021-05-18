import Link from "next/link";

export default function SignUpPage() {
  const registerUser = (event) => {
    event.preventDefault();
    console.log("Hello");
    console.log(event);
  };

  return (
    <div className="sign-up__form">
      <h1>Sign up</h1>
      <form>
        <label htmlFor="name">
          Name <span aria-hidden="true"></span>
        </label>
        <input type="name" id="name" name="name" required />

        <label htmlFor="email">
          Email <span aria-hidden="true"></span>
        </label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">
          Password <span aria-hidden="true">*</span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          // aria-describedby="passwordRequirements"
          // pattern=".*\d.*"
          // minlength="8"
          // required
        />
        <button onClick={registerUser}>Sign Up</button>
      </form>
      <br></br>
      <Link href="/">
        <a>Back to Homepage</a>
      </Link>
    </div>
  );
}
