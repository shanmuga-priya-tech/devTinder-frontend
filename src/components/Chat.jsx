import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";

function Chat() {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const { receiverId } = useParams();
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  //create socket connection as soon as the component loads
  useEffect(() => {
    if (!user) return;
    const socket = createSocketConnection();

    //emit a event to join a chat
    socket.emit("joinChat", { firstName: user?.firstName, userId, receiverId });

    //listening up the event got from backend
    socket.on("messageReceived", ({ firstName, profilepic, msg }) => {
      setMessages((msgs) => [...msgs, { firstName, profilepic, msg }]);
    });

    //disconnect the socket connection when there is not of  use
    return () => {
      socket.disconnect();
    };
  }, [userId, receiverId, user?.firstName, user]);

  //fn to send a msg
  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: user?.firstName,
      profilepic: user?.photoURL,
      userId,
      receiverId,
      msg,
    });
    setMsg("");
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex flex-col w-96 h-[600px] border  rounded-lg ">
        <div className="flex-1 p-4 overflow-y-auto border-b ">
          {messages.map((chat, i) => (
            <div key={i}>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src={chat.profilepic}
                    />
                  </div>
                </div>
                <div className="chat-header">{chat.firstName}</div>
                <div className="chat-bubble">{chat.msg}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center p-4 border-t border-gray-300">
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
