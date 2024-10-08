import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice";
import { useEffect } from "react";
import UserCard from "./UsersCard";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getFeed = async () => {
      // if (feed) return;
      try {
        const res = await axios.get(
          import.meta.env.VITE_BASE_URL + "/user/feed",
          {
            withCredentials: true,
          }
        );

        dispatch(addFeed(res?.data?.data));
      } catch {
        navigate("/error");
      }
    };
    getFeed();
  }, [dispatch, navigate]);

  if (!feed) return <Loader />;

  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10">No new users founds!</h1>;

  return (
    feed && (
      <div className="flex justify-center my-10">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};
export default Feed;
