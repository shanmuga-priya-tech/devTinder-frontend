import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersCard from "../components/UsersCard";
import Loader from "../components/Loader";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../store/userSlice";

function EditProfile() {
  //getting user data to prefill the form
  const user = useSelector((store) => store.user);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const handleUpdate = async () => {
    setError("");
    try {
      const res = await axios.patch(
        `${BASE_URL}/profile/edit`,
        { firstName, lastName, age, gender, about, photoURL },
        { withCredentials: true }
      );

      dispatch(addUser(res?.data?.data));
      console.log(res.data.data);

      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (err) {
      setError(err?.response?.data?.message);
    }
  };

  if (!user) return <Loader />;
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex my-10 justify-center md:mx-10">
          <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title justify-center text-2xl font-bold">
                Edit Profile
              </h2>

              <label className="my-1 font-bold text-lg">FirstName:</label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>

              <label className="my-1 font-bold text-lg">LastName:</label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label className="my-1 font-bold text-lg">PhotoURL:</label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
              </label>
              <label className="my-1 font-bold text-lg">Age:</label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label className="my-1 font-bold text-lg">Gender:</label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </label>

              <label className="my-1 font-bold text-lg">About:</label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </label>

              {error && (
                <p className="flex justify-center font-bold text-red-600 my-4">
                  {error}
                </p>
              )}
              <div className="card-actions justify-center mt-4">
                <button className="btn btn-primary" onClick={handleUpdate}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10">
          <UsersCard
            user={{ firstName, lastName, age, gender, about, photoURL }}
          />
        </div>
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile updated successfully.</span>
          </div>
        </div>
      )}
    </>
  );
}

export default EditProfile;
