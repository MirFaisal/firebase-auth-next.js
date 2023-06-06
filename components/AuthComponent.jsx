"use client";

import firebase_App from "@/util/firebase.init";
import { AtSymbolIcon } from "@heroicons/react/24/solid";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

// user state

const AuthComponent = () => {
  const [user, setUser] = useState({});
  // google auth
  const auth = getAuth(firebase_App);

  // auth provider
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  // singIn handel
  const singIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const provideuser = result.user;
        setUser(provideuser);
        console.log(provideuser);
      })
      .catch((error) => console.log(error));
  };

  // github singin handel

  const singInWithGit = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const gitProvideUser = result.user;
        setUser(gitProvideUser);
        console.log(gitProvideUser);
      })
      .catch((error) => console.log(error));
  };

  // singOut handel
  const singOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        console.log("Confirm singOut to your account");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1 className=" text-3xl font-extrabold flex justify-center items-center">
        Singin with Firebase Auth
      </h1>
      <div className="flex justify-center mt-14">
        {/* 
        singin && singout button 
        */}

        {!user.displayName ? (
          <button
            onClick={() => singIn()}
            className="flex bg-blue-400 px-5 py-2 rounded-md text-white font-bold hover:bg-blue-300"
          >
            <AtSymbolIcon className="h-6 me-2" />
            Google
          </button>
        ) : (
          <button
            onClick={() => singOut()}
            className="flex bg-blue-400 px-5 py-2 rounded-md text-white font-bold hover:bg-blue-300"
          >
            <AtSymbolIcon className="h-6 me-2" />
            singout
          </button>
        )}
        {/* gitHub singin button */}

        {!user.displayName ? (
          <button
            onClick={() => singInWithGit()}
            className="flex bg-blue-400 ms-5 px-5 py-2 rounded-md text-white font-bold hover:bg-blue-300"
          >
            <AtSymbolIcon className="h-6 me-2" />
            GitHub
          </button>
        ) : null}
      </div>

      {user.displayName ? (
        <div className="flex place-content-center mt-10">
          <div className="flex bg-slate-200 justify-center w-fit rounded-md">
            <div className=" mr-3 rounded-md overflow-hidden">
              <img
                className=" w-20 h-20"
                src={user.photoURL}
                alt=""
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col justify-center space-y-1">
              <p className="font-semibold">{user.displayName}</p>
              <p className=" mr-1">{user.email}</p>

              {/* emain verified componenet  */}
              <div>
                {user.emailVerified ? (
                  <p className="text-green-400"> Verifide </p>
                ) : (
                  <p className={user ? ` hidden` : `block text-red-400`}>
                    unverifide
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AuthComponent;
