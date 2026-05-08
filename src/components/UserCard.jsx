import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about, skills } = user;

  return (
    <div className="flex justify-center items-center my-4">
      <div className="card bg-base-200 w-96 shadow-sm my-4  h-[300px]">
        <figure>
          <img src={photoUrl} alt="user photo" />
        </figure>

        <div className="card-body">
          <h2 className="card-title">
            {firstName} {lastName}
          </h2>

          {age && gender && (
            <p>
              Age: {age}, Gender: {gender}
            </p>
          )}

          <p>{about}</p>

          <div className="card-actions justify-center">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
