import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Chat() {
  const receiverId = useParams();
  const user = useSelector((store) => store.user);
  const userId = user?._id;
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex flex-col w-96 h-[600px] border  rounded-lg ">
        <div className="flex-1 p-4 overflow-y-auto border-b ">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">I hate you!</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        </div>

        <div className="flex items-center p-4 border-t border-gray-300">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
