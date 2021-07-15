import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProfiles, setAdults } from "../redux/actions/profiles.js";
import { setGetUsers } from "../redux/actions/user";
import Users from "./UserBlock";
import { Redirect } from "react-router-dom";
function ProfileUsers() {
  const dispatch = useDispatch();
  const profiles = useSelector((store) => store.profilesReducer.profiles);
  const users = useSelector((store) => store.user);
  const user = useSelector(({ user }) => user.user);

  useEffect(() => {
    dispatch(fetchAllProfiles());
    dispatch(setGetUsers());
  }, []);
  // if (!user) {
  //   return <Redirect to="/registration"></Redirect>;
  // }
  if (user && user.roles && user.roles !== "ADMIN") {
    return <Redirect to="/profiles"></Redirect>;
  }

  return (
    <div className="app">
      <Header />
      <h1>Users</h1>

      <div className="users">
        {users &&
          users.users.map((user, index) => {
            return (
              <Users profiles={profiles} user={user} key={`profile_${index}`} />
            );
          })}
      </div>
    </div>
  );
}

export default ProfileUsers;