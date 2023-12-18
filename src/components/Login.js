import React, { useState, useRef } from "react";
import Header from "./Header";
import background from "../images/background.jpg";
import { ValidateForm } from "../utils/ValidateForm";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { photoURL } from "./constants";


const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const validateSignIn = () => {
    const message = ValidateForm(emailRef.current.value, passwordRef.current.value);

    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          const displayName = nameRef.current.value || emailRef.current.value.split("@")[0];

          return updateProfile(user, {
            displayName,
            photoURL: photoURL
          });
        })
        .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL,
            })
          );
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .catch((error) => {
          setErrorMessage(`${error.code} - ${error.message}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute opacity-100">
        <img src={background} alt="background" />
      </div>
      <form
        className="absolute text-white w-3/12 my-56 mx-auto right-0 left-0 bg-black opacity-80 rounded-lg flex items-center flex-col h-1/2 justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <p className="font-extrabold text-2xl self-start ml-4 mb-4">
          {isSignInForm ? "Sign in" : "Sign up"}
        </p>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Your Name"
            className="p-3 m-2 w-4/5 rounded-md text-black"
            ref={nameRef}
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Enter Your Email"
          className="p-3 m-2 w-4/5 rounded-md text-black"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter Your Password"
          className="p-3 m-2 w-4/5 rounded-md text-black"
        />
        <p className="text-red-600 font-bold text-lg">{errorMessage}</p>
        <button
          className="w-4/5 p-2 m-2 bg-red-700 rounded-md"
          onClick={validateSignIn}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="font-bold cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New To Netflix? Signup Now"
            : "Already A User Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
