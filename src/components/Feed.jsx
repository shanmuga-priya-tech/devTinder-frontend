import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice";

import { useNavigate } from "react-router-dom";
import UsersCard from "./UsersCard";
import Loader from "./Loader";

function Feed() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const feed = useSelector((store) => store.feed);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        if (feed) return;
        const res = await axios.get(`${BASE_URL}/user/feed`, {
          withCredentials: true,
        });
        if (res.status === 200) {
          dispatch(addFeed(res.data.data));
        }
      } catch (err) {
        console.log(err);
        navigate("/error");
      }
    };
    fetchFeed();
  }, [dispatch, feed, navigate]);

  if (!feed) {
    return <Loader />;
  }
  return (
    <div className="flex justify-center my-6">
      {feed.map((user) => (
        <UsersCard key={user._id} user={user} />
      ))}
      {/* <UsersCard user={feed[0]} /> */}
    </div>
  );
}

export default Feed;
