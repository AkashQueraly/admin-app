import React from "react";
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import AQ from "./AQ.png";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin-App</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge1"></span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={AQ} alt="Akash" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
