import axios from "axios";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const token = sessionStorage.getItem("token");
  const [user , setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `https://intern-task-api.bravo68web.workers.dev/api/me`,{
            headers: {
              Authorization:
                `Bearer ${token}`,
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
      <div className="flex justify-between w-[95%] md:w-[90%] lg:w-[80%] mx-auto py-5">
        <div>Shop</div>
        <div>Log in as {user?.user.sub}</div>
        <div>cart</div>
      </div>
    </div>
  );
};

export default Navbar;
