import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../store/feedSlice";

function UsersCard({ user }) {
  const { _id, firstName, lastName, gender, age, about, photoURL } = user;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFeed = async (status, userId) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.log(err.message);
      navigate("/error");
    }
  };

  return (
    <div className="card h-[500px] bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photoURL} className="h-[280px] w-full" alt="Shoes" />
      </figure>
      <div className="card-body h-[300px]">
        <h2 className="card-title ">{`${firstName} ${lastName}`}</h2>
        {age && gender && <p>{`${gender} (${age})`}</p>}
        <p>{about}</p>

        <div className="card-actions justify-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => handleFeed("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleFeed("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default UsersCard;
