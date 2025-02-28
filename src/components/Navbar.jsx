import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { removeUser } from "../store/userSlice";

function Navbar() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/logout`,
        {},
        { withCredentials: true }
      );
      //if logged out successfully remove the user from store and redirect to login page
      dispatch(removeUser());
      navigate("/login");
    } catch {
      navigate("/error");
    }
  };

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl text-orange-400">
          👩‍💻 devTinder
        </Link>
      </div>
      {user && (
        <div className="flex-none gap-1 ">
          <div className="form-control md:font-bold">
            Welcome, {user.firstName}
          </div>
          <div className="dropdown dropdown-end md:mx-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="user profile" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>
              <li>
                <Link to="/requests">Requests</Link>
              </li>
              <li>
                <Link to="/premium">Premium</Link>
              </li>
              <li>
                <Link onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
