function ConnectionCard({ user }) {
  const { firstName, lastName, photoURL, gender, age, about } = user;
  return (
    <div className="flex bg-base-300 rounded-xl shadow-xl mx-auto w-1/2 my-5 items-center">
      <figure>
        <img
          src={photoURL}
          className="w-32 h-32 rounded-lg  ml-3 "
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
        <p>{about}</p>
      </div>
    </div>
  );
}

export default ConnectionCard;
