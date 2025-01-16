import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

import { addUser } from "../store/userSlice";

function Body() {
  //fetching the user whenever thw component mounts if there is no user ,redirect them to login page
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const fetchUser = async () => {
      const publicRoutes = [
        "/forgetpassword",
        "/privacypolicy",
        "/termsandcondition",
        "/contactus",
      ];
      try {
        if (user) return;
        // Only fetch if it's not the forget password route
        if (publicRoutes.includes(location.pathname)) return;

        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/profile/view`,
          {
            withCredentials: true,
          }
        );

        if (res.status === 200) {
          dispatch(addUser(res.data.data));
        }
      } catch {
        // Redirect to login only if it's not the forget password route
        if (!publicRoutes.includes(location.pathname)) {
          navigate("/login");
        }
      }
    };
    fetchUser();
  }, [dispatch, navigate, user]);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Body;
