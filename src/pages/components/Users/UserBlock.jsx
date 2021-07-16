import React from "react";
import "../../../scss/components/users.scss";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {
  fetchOtherProfiles,
  fetchProfiles,
} from "../../../redux/actions/profiles";

export const Users = ({ profiles, user }) => {
  const history = useHistory();

  const handleRoute = () => {
    history.push(`/profiles/${user.user_id}`);
  };
  const dispatch = useDispatch();
  const profileFilter = () =>
    profiles.filter((x) => x.user_id === user.user_id).length;

  return (
    <div
      className="users_block"
      onClick={() => {
        dispatch(fetchOtherProfiles(user.user_id));
        handleRoute();
        dispatch(fetchProfiles(user.user_id));
      }}
    >
      <span>{user.username}</span>
      <span>{user.email}</span>
      <span>{profileFilter()} profiles</span>
    </div>
  );
};

export default Users;
