import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const Navbar = ({ handleTheme, theme }) => {
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
          console.log("User data:", response.data);
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
      <div
        className={
          theme
            ? "text-white flex justify-between items-center  w-[97%] md:w-[94%] lg:w-[85%] mx-auto py-4"
            : "flex justify-between items-center  w-[97%] md:w-[94%] lg:w-[85%] mx-auto py-4"
        }
      >
        <div>Shop</div>
        <div className="text-center">Log in as {user?.user.sub}</div>
        <div className="flex items-center">
          <div>
            <label class="switch">
              <input type="checkbox" onChange={handleTheme} />
              <span class="slider"></span>
            </label>
          </div>
          <div className="ps-4 text-3xl">
            <PiShoppingCartSimpleBold />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
