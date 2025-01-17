import { Link } from "react-router-dom";

function ConnectionCard({ user }) {
  const { _id, firstName, lastName, photoURL, gender, age, about } = user;
  return (
    <div className="flex bg-base-300 rounded-xl shadow-xl mx-auto w-1/2 md:1/2 my-5 items-center">
      <figure>
        <img
          src={photoURL}
          className="w-36 md:w-24 md:h-24 h-36 rounded-lg  ml-3 "
          alt="user-img"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        {age && gender && (
          <h2>
            {age},{gender}
          </h2>
        )}
        <p className="text-sm hidden md:block md:text-l">{about}</p>
      </div>
      <Link to={`/message/${_id}`}>
        <button className="btn btn-secondary mr-2">Message</button>
      </Link>
    </div>
  );
}

export default ConnectionCard;
