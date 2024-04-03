import React from "react";
import "./Users.css";
import { UsersData } from "../Data/data";

const Users = () => {
  return (
    <div className="Users">
      {UsersData.map((user) => {
        return (
          <div className="user">
            <img src={user.img} alt="" />
            <div className="noti">
              <div>
                <span>{user.name}</span>
                <span> posted a job for {user.job}</span>
              </div>
              <span>{user.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
