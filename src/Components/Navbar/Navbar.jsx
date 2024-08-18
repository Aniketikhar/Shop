import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Cart from "../Cart/Cart";

const Navbar = ({ handleTheme, handleUser, theme }) => {
  const token = sessionStorage.getItem("token");
  const [user, setUser] = useState();


  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `https://intern-task-api.bravo68web.workers.dev/api/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setUser(response.data);
          handleUser(response.data.user.sub);
        } else {
          console.error("Failed to fetch user data:", response.statusText);
        }
      } catch (error) {
        console.error("error in getting user", error);
      }
    };

    getUser();

  }, []);
  return (
    <div>
      <div className={theme ? " text-center sm:hidden text-white bg-slate-600" : "text-center sm:hidden bg-slate-100"}>
      <p className="py-2">Log in as {user?.user.sub}</p>
      </div>
      <div
        className={
          theme
            ? "text-white flex justify-between items-center  w-[93%] md:w-[90%] lg:w-[85%] mx-auto py-4"
            : "flex justify-between items-center  w-[97%] md:w-[94%] lg:w-[85%] mx-auto py-4"
        }
      >
        <div className="font-bold text-xl"><a href="/products">Shopping</a></div>
        <div className="text-center hidden sm:block">Log in as {user?.user.sub}</div>
        <div className="flex items-center">
          <div>
            <label className="switch">
              <input type="checkbox" onChange={handleTheme} />
              <span className="slider"></span>
            </label>
          </div>
          <div className="ps-4 text-3xl">
            <Cart userEmail={user?.user.sub} theme={theme} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
