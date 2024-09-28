function UsersCard({ user }) {
  const { firstName, lastName, gender, age, about, skills, photoURL } = user;
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
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
}

export default UsersCard;
