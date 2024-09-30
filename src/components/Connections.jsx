import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addConnections } from "../store/connectionSlice";
import ConnectionCard from "./ConnectionCard";
import Loader from "./Loader";

function Connections() {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  console.log(connections);

  useEffect(() => {
    const fetchConnections = async () => {
      const res = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });

      dispatch(addConnections(res.data.data));
    };
    fetchConnections();
  }, [dispatch]);
  if (!connections) {
    return <Loader />;
  }

  if (connections.length === 0) {
    <div className="flex justify-center my-10">
      <h1 className="text-3xl font-extrabold text-gray-300">
        No connection found!
      </h1>
    </div>;
  }
  return (
    <div className=" my-10">
      <h1 className="text-3xl  text-center font-extrabold">Connections</h1>
      <div>
        {connections.map((user, i) => (
          <ConnectionCard key={i} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Connections;
