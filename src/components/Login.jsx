import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const HandleButtonClick = () => {
    // form validation
    const message = checkValidation(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg"
          alt="Background"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl px-2 pb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 mx-0 my-2 w-full rounded-sm bg-gray-500 bg-opacity-30 border-2 focus:opacity-20 border-slate-700 outline-white placeholder-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3 mx-0 my-2 w-full rounded-sm bg-gray-500 bg-opacity-30 focus:opacity-20 border-2 border-slate-700 outline-white placeholder-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 mx-0 my-2 w-full rounded-sm bg-gray-500 bg-opacity-30 border-2 focus:opacity-20 border-slate-700 text-white outline-white placeholder-white"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-2 my-6 mx-0 w-full bg-red-500 contrast-200 rounded-sm"
          onClick={HandleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-sm cursor-pointer hover:text-red-500 contrast-200"
          onClick={toggleSignIn}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a user? Please Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
