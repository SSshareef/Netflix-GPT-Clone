import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const HandleButtonClick = () => {
    // form validation
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    // sign-in sign-up form login
    if (!isSignInForm) {
      // signUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}=>${errorMessage}`);
        });
    } else {
      // signIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} => ${errorMessage}`);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
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
            ref={name}
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
