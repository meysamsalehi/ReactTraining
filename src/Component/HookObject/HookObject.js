import { useState } from "react";

const HookObject = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  const firstNameHandlerChange = (e) => {
    setUser({ ...user, firstName: e.target.value });
  };

  const lastNameHandlerChange = (e) => {
    setUser({ ...user, lastName: e.target.value });
  };

  return (
    <div>
      <h2>
        {"$user.firstName"} {"$user.lastName"}
      </h2>
      <form>
        <input
          type="text"
          value={user.firstName}
          onChange={firstNameHandlerChange}
        />
        <input
          type="text"
          value={user.lastName}
          onChange={lastNameHandlerChange}
        />
        <div>{JSON.stringify(user)}</div>
      </form>
    </div>
  );
};

export default HookObject;
