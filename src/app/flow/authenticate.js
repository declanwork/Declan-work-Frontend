// // authenticate.js
// import React, { useState, useEffect } from "react"
// import * as fcl from "@blocto/fcl"
// import { fclConfig } from "../../app/flow/config";
// fclConfig()

// // const SignInOutButton = ({ user: { loggedIn } }) => {
// //   const signInOrOut = async (event) => {
// //     event.preventDefault()

// //     if (loggedIn) {
// //       fcl.unauthenticate()
// //     } else {
// //       fcl.authenticate()
// //     }
// //   }

// //   return (
// //     <div className="absolute space-x-3 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
// //       <button className="rounded-full text-sm font-semibold bg-[#00EF7C] p-2 px-5 text-[#00360C]  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#ADFFC8]" onClick={signInOrOut}>
// //         {loggedIn ? 'Sign Out' : 'Sign In/Up'}
// //       </button>
// //     </div>
// //   )
// // }

// const CurrentUser = () => {

//   const [user, setUser] = useState({ loggedIn: null })
//   useEffect(() => fcl
//     .currentUser
//     .subscribe(setUser), [])
//   const AuthenticatedState = () => {
//     return (
//       <div>
//         <div>Address: {user?.addr ?? "No Address"}</div>
//         <button onClick={fcl.unauthenticate}>Log Out</button>
//       </div>
//     )
//   }

//   const UnauthenticatedState = () => {
//     return (
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <button style={{ padding: "16px" }} onClick={fcl.logIn}>Log In</button>
//         <button onClick={fcl.signUp}>Sign Up</button>
//       </div>
//     )
//   }
//   return (
//     <div>
//       {user ? (
//         <div>
//           <span className="text-lg text-white">
//             {user?.address.substr(0, 10)}...
//           </span>
//         </div>
//       ) : (
//         <div
//         >
//           {user.loggedIn
//             ? <AuthedState />
//             : <UnauthenticatedState />
//           }
//         </div>
//       )}
//     </div>
//   )
// }

// export default CurrentUser

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import * as fcl from "@blocto/fcl";
import { fclConfig } from "../../app/flow/config";

fclConfig();

const CurrentUser = () => {

  const [user, setUser] = useState({ loggedIn: null })

  const router = useRouter();

  useEffect(() => fcl
    .currentUser
    .subscribe(setUser), [])

  const signInOrOut = async () => {
    if (user?.loggedIn) {
      await fcl.unauthenticate();
    } else {
      await fcl.authenticate();
      router.push("./dashboard");
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
      <div>Address: {renderAddress(user?.addr)}</div>
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
          <span className="text-lg text-white">
            {renderAddress(user?.addr)}
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
