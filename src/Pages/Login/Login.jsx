import React, { useContext, useState } from "react";
import "./Login.css";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { shopContext } from "../../Context/Context";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log(email);
  console.log(password);

  const Login = async (e) => {
    e.preventDefault();
    try {
      if (email && password) {
        const response = await axios.post(
          `https://intern-task-api.bravo68web.workers.dev/auth/login`,
          { email, password }
        );

        console.log("Log in successful", response.data.token);

        if (response.data.token) {
          sessionStorage.setItem("token", response.data.token);
          toast.success("Log In successful");
          navigate("/products");
        } else {
          toast.error("Email or password incorrect");
          
        }
      } else {
        console.log("fill the required email and password");
      }
    } catch (error) {
      console.error("Error in Login:", error);
    }
  };
  return (
    <>
    
      <div className="login mx-auto flex flex-col justify-center h-screen ">
        <div className="w-[100%] md:w-[50%] lg:w-[35%] xl:w[30%] h-screen md:h-auto mx-auto border bg-white  md:rounded-lg shadow-md">
          <h1 className="text-center text-3xl font-bold mt-5">Log In</h1>
          <form className="p-10 " onSubmit={Login}>
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
            <label htmlFor="">
              <input
                type="checkbox"
                name="remember"
                required
                className="mb-5"
              />
              <span> Remember me?</span>
            </label>
            <input
              type="submit"
              value="Submit"
              className="w-full font-semibold hover:scale-105 bg-orange-500 rounded-md p-2 mb-1 text-white cursor-pointer"
            />
            <p className="text-right text-sm mb-5 cursor-pointer">
              Forgot Password?
            </p>
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
    </>
  );
};

export default Login;
