import React, { useEffect } from "react";
import UserItem from "./UserItem";
import AverageAge from "./AverageAge";
import data from "./users.json";

const UserList = () => {
  const admins = data.filter((it) => it.role == "admin");

  const total = admins.reduce((acc, curr) => acc + curr.age, 0);
  const avg = total / admins.length;

  return (
    <div>
      {data
        .filter((it) => it.role == "user")
        .map((it, i) => (
          <UserItem name={it.name} key={i} />
        ))}

      {<AverageAge average={avg} />}
    </div>
  );
};

export default UserList;
