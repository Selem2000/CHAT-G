import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../../Redux/actions/user";

const SideBar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <ProSidebar>
      {pathname === "/admin" ||
      pathname === "/allposts" ||
      pathname === "/users" ? (
        <Menu iconShape="square">
          <MenuItem>
            <Link to="/admin">Profile</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/allposts">Posts</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/users">users</Link>
          </MenuItem>

          <MenuItem onClick={() => dispatch(logout())}>Log Out</MenuItem>
        </Menu>
      ) : (
        <Menu iconShape="square">
          <MenuItem>
            <Link to="/home">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/profile">Profile</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/posts">Posts</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/friends">Friends</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/invitation">Invitation</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/search">Search</Link>
          </MenuItem>
          <MenuItem>Chat</MenuItem>
          <MenuItem onClick={() => dispatch(logout())}>Log Out</MenuItem>
        </Menu>
      )}
    </ProSidebar>
  );
};

export default SideBar;
