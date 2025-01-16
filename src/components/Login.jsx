import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import FooterMini from "./FooterMini";

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/signup`,
        { firstName, lastName, email, password },
        { withCredentials: true }
      );
      if (res.status === 200) {
        dispatch(addUser(res.data.data));
        navigate("/profile");
      }
    } catch (err) {
      setError(err?.response?.data?.message || "⚠️ Something went wrong!");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/login`,
        {
          email,
          password,
        },
        { withCredentials: true } //allow you to send the cookie back for further request
      );
      if (res.status === 200) {
        dispatch(addUser(res.data.data));
        navigate("/");
      }
    } catch (err) {
      setError(err?.response?.data?.message || "⚠️ Something went wrong!");
    }
  };

  return (
    <>
      <div className="flex my-4 justify-center pb-10">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            {error && (
              <p className="flex justify-center font-bold text-red-600 my-4">
                {error}
              </p>
            )}
            <h2 className="card-title justify-center text-2xl font-bold text-orange-500">
              {isLogin ? "Login" : "SignUp"}
            </h2>

            {!isLogin && (
              <>
                {" "}
                <label className=" font-bold text-lg">FirstName:</label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className=" font-bold text-lg">LastName:</label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </>
            )}

            <label className=" font-bold text-lg">Email ID:</label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className=" font-bold text-lg">Password:</label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {isLogin && (
              <p
                className="flex justify-end mb-2 underline cursor-pointer "
                onClick={() => navigate("/forgotpassword")}
              >
                Forget password?click here
              </p>
            )}

            <div className="card-actions justify-center mt-4">
              <button
                className="btn btn-primary"
                onClick={isLogin ? handleLogin : handleSignUp}
              >
                {isLogin ? "Login" : "SignUp"}
              </button>
            </div>
            <p
              className=" justify-center underline cursor-pointer mx-auto"
              onClick={() => setIsLogin((value) => !value)}
            >
              {isLogin ? "New user? SignUp" : "Already registered ? Login"}
            </p>
          </div>
        </div>
      </div>
      <FooterMini />
    </>
  );
}

export default Login;
