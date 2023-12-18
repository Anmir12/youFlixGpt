import React, { useEffect } from "react";
import logo from "../images/logo.png";
import avatar from "../images/Netflix-avatar.png";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { showGptSearchView } from "../utils/gptSlice";
const Header = () => {
  const dispatch =useDispatch()
  const user = useSelector(store =>store.user)
  const gptview =useSelector((store) => store.gpt.GptSearchView)
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
       navigate("/error")
      });
  };
  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
          );
          navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  const gptHandleButton = ()=>{
    dispatch(showGptSearchView());
  }
  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-full overflow-x-hidden grid grid-cols-2 items-center">
      <div className="col-span-1">
        <img src={logo} alt="logo" className="w-24 md:w-32 lg:w-40 xl:w-48" />
      </div>
      {user && (
        <div className="col-span-1 flex items-center justify-end">
          <button className="bg-purple-500 text-white rounded-md m-2 p-2" onClick={gptHandleButton}>{gptview ? "HomePage" : "GPTSearch" }</button>
          <img src={avatar} alt="avatar" className="w-10 h-10 m-2" />
          <button className="text-white font-bold" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
  
};

export default Header;
