import React, { useState } from "react";
import "./SignUp.css";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log(email);
  console.log(password);

  const SignUp = async (e) => {
    e.preventDefault();
    try {
      if (email && password) {
        const response = await axios.post(`https://intern-task-api.bravo68web.workers.dev/auth/signup`, { email, password });

        console.log("SignUp successful", response);

        if (response) {
          alert("SignUp successful");
          navigate("/login")
        } else {
          alert("SignUp failed");
        }
      } else {
        console.log("fill the required email and password");
      }
    } catch (e) {
      console.error("Error in sign up:", error);
    }
  };

  return (
    <div className=" bg-[#6D9AC4] mx-auto flex flex-col justify-center h-screen ">
      <div className="w-[100%] md:w-[50%] lg:w-[35%] xl:w[30%] h-screen md:h-auto mx-auto border bg-white md:rounded-lg shadow-md">
        <h1 className="text-center text-3xl font-bold mt-5">Sign Up</h1>
        <form className="p-10 " onSubmit={SignUp}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            className="w-full border border-gray-400 rounded-md mb-4 p-2 "
            placeholder="Name"
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            className="w-full border border-gray-400 rounded-md mb-4 p-2 "
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            className="w-full border border-gray-400 rounded-md mb-1  p-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />

          <input
            type="submit"
            value="Submit"
            className="w-full font-semibold hover:scale-105 bg-orange-500 rounded-md p-2 my-5 text-white cursor-pointer"
          />

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
            Already a user? <a href="/login">Log In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
