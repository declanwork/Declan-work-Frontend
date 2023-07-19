"use client"

import React, { useEffect, useContext } from "react";
import { useRouter } from 'next/navigation';
import * as fcl from "@blocto/fcl";
import { fclConfig } from "../../app/flow/config";

import { Context } from "../context";

import { toast } from 'react-toastify';

fclConfig();

const CurrentUser = () => {

  const {user, setUser} = useContext(Context)

  const router = useRouter();

  // useEffect(() => fcl
  //   .currentUser
  //   .subscribe(setUser), [])

  useEffect(() => {
    fcl.currentUser.subscribe((stuff) => {
      setUser(stuff);
      console.log(stuff);
      // toast('Fetching User Date', { hideProgressBar: true, autoClose: 2000, type: 'success' })
    });
  }, [setUser]);

  const signInOrOut = async () => {
    if (user?.loggedIn) {
      await fcl.unauthenticate();
      toast('User Logged Out', { hideProgressBar: true, autoClose: 2000, type: 'success' })
    } else {
      await fcl.authenticate();
      toast('User Logged In', { hideProgressBar: true, autoClose: 2000, type: 'success' })
    }
  };

  const renderAddress = (address) => {
    if (address.length > 8) {
      return `${address.substr(0, 4)}...${address.substr(-4)}`;
    } else {
      return address;
    }
  };

  const AuthenticatedState = () => (
    <div>
      <div className="text-black">Address: {renderAddress(user?.addr)}</div>
      <button onClick={fcl.unauthenticate}>Log Out</button>
    </div>
  );

  const UnauthenticatedState = () => (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button className="text-[#ADFFC8] text-sm p-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        onClick={fcl.logIn}>
        Log In
      </button>
      <button className="rounded-full font-semibold text-sm bg-[#ADFFC8] p-2 text-[#00360C]  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#ADFFC8]"
        onClick={fcl.signUp}>
        Sign Up
      </button>
    </div>
  );

  return (
    <div>
      {user && user.loggedIn ? (
        <div>
          <span className="text-lg text-[#00EF7C]">
          <a href={`https://testnet.flowscan.org/account/${user?.addr}`} target="_blank">{user?.addr}</a>
          {/* {renderAddress(user?.addr)} */}
          </span>
          <button
            className="rounded-full text-sm ml-2 font-semibold bg-[#00EF7C] p-2 px-5 text-[#00360C]  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#ADFFC8]"
            onClick={signInOrOut}
          >
            {user?.loggedIn ? "Log Out" : "Log In / Sign Up"}
          </button>
        </div>
      ) : (
        <div>
          {user?.loggedIn ? (
            <AuthenticatedState />
          ) : (
            <UnauthenticatedState />
          )}
        </div>
      )}
    </div>
  );
};

export default CurrentUser;