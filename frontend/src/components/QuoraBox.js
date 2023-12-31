
// ################################### new code ####################################

import { Avatar } from "@material-ui/core";
import React from "react";
// import { useSelector } from "react-redux";
import "./css/QuoraBox.css";

export default function QuorBox() {
  // const user = useSelector(selectUser);

  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar
          src={
            "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
          }
          className="quoraBox__infoAvatar"
        />
        {/* <h5>{user?.displayName ? user?.displayName : user?.email}</h5> */}
      </div>
      <div className="quoraBox__quora">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}

