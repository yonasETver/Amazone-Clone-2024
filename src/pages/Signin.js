import React, { useState } from "react";
import logo from "../assets/logo2.png";
import { login, signup } from "../firebase";

export const Signin = () => {

  // const [signState, setSignState] = useState("Sign In");
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [loading, setLoading] = useState(false)

  // const user_auth = async (event) => {
  //   event.preventDefault();
  //   setLoading(true)
  //   if (signState === "Sign In") {
  //     await login(email, password);
  //   } else {
  //     await signup(name, email, password);
  //   }
  //   setLoading(false);
  // };
  // return loading ? (
  //   <div className="login-spinner">
  //     <img alt="" />
  //   </div>
  // ) : (
  //   <div className="flex justify-center h-screen">
  //     <div className="">
  //       <img src={logo} className="w-[100px] h-[70px" alt="" />
  //       <div className="">
  //         <h1>{signState}</h1>
  //         <form>
  //           {signState === "Sign Up" ? (
  //             <input
  //               value={name}
  //               onChange={(e) => {
  //                 setName(e.target.value);
  //               }}
  //               type="text"
  //               placeholder="Your name"
  //             />
  //           ) : (
  //             <></>
  //           )}
  //           <label></label>Email or mobile phone number
  //           <br />
  //           <input
  //             value={email}
  //             onChange={(e) => {
  //               setEmail(e.target.value);
  //             }}
  //             type="email"
  //           />
  //           <br />
  //           <button onClick={user_auth} type="submit">
  //             {signState}
  //           </button>
  //           <div className="form-help">
  //             <input type="checkbox" />
  //             <label htmlFor="">Remember Me</label>
  //             <p>Need Help?</p>
  //           </div>
  //         </form>
  //         <div className="form-switch">
  //           {signState === "Sign In" ? (
  //             <p>
  //               New to Netflix?{" "}
  //               <span
  //                 onClick={() => {
  //                   setSignState("Sign Up");
  //                 }}
  //               >
  //                 Sign Up Now
  //               </span>
  //             </p>
  //           ) : (
  //             <p>
  //               Already have an account?{" "}
  //               <span
  //                 onClick={() => {
  //                   setSignState("Sign In");
  //                 }}
  //               >
  //                 Sign In Now
  //               </span>
  //             </p>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex items-center justify-center h-screen font-bold h-[300px]">
      This page will come soon
    </div>
  );
}
