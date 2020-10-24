import { Avatar } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchOutlined />
        <input
          placeholder="Search for song, artist or podcast"
          type="text"
        ></input>
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0].url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
