import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addConnections } from "../store/connectionSlice";

function Connections() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchConnections = async () => {
      const res = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });

      dispatch(addConnections(res.data.data));
    };
    fetchConnections();
  }, []);

  return (
    <div className="flex justify-center my-10">
      <h1 className="text-3xl font-extrabold">Connections</h1>
    </div>
  );
}

export default Connections;
