import React from "react";
import "./Login.css";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Login = () => {
  return (
    <div className=" bg-[#6D9AC4] mx-auto flex flex-col justify-center h-screen ">
      <div className="w-[30vw] mx-auto border bg-white rounded-lg shadow-md">
        <h1 className="text-center text-3xl font-bold mt-5">Log In</h1>
        <form className="p-10 ">
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            className="w-full border border-gray-400 rounded-md mb-4 p-2 "
            placeholder="Email"
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            className="w-full border border-gray-400 rounded-md mb-1  p-2"
            placeholder="Password"
          />
          <br />
          <label htmlFor="">
            <input type="checkbox" name="remember" id="" className="mb-5" />
            <span> Remember me?</span>
          </label>
          <input
            type="submit"
            value="Submit"
            className="w-full font-semibold hover:scale-105 bg-orange-500 rounded-md p-2 mb-1 text-white cursor-pointer"
          />
          <p className="text-right text-sm mb-5 cursor-pointer">Forgot Password?</p>
          <hr />
          <div className="flex justify-center mt-5">
            <div className="hover:scale-110 rounded-full border-2 m-2 p-2 border-gray-700 hover:bg-orange-500 hover:text-white cursor-pointer hover:border-orange-500">
              <FaGoogle />
            </div>
            <div className="hover:scale-110 rounded-full border-2 m-2 p-2 border-gray-700 hover:bg-orange-500 hover:text-white cursor-pointer hover:border-orange-500">
              <FaFacebookF />
            </div>
            <div className="hover:scale-110 rounded-full border-2 m-2 p-2 border-gray-700 hover:bg-orange-500 hover:text-white cursor-pointer hover:border-orange-500">
              <FaLinkedinIn />
            </div>
          </div>
          <p className="text-center text-md">
            Need an account? <a href="/">SIGN UP</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
