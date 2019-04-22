import React from "react";
import UserList from "../../User/UserList";
import updateUser from "./updateUser";
import Header from "../../Layout/Header";
function User() {
  return (
    <React.Fragment>
      <updateUser/>
      <UserList />
    </React.Fragment>
  )
}

export default User
