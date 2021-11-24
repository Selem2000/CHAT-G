import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser } from "../../Redux/actions/user";
import Load from "../../Components/Load/Load";
import Errors from "../../Components/Errors/Error";
import AdminCard from "../../Components/AdminCard/AdminCard";

const Users = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const load = useSelector((state) => state.postReducer.load);
  const errors = useSelector((state) => state.postReducer.errors);
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  const usersAfterTheSearch = users.filter(
    (e) =>
      e._id !== user._id &&
      (e.firstName.includes(search) || e.lastName.includes(search))
  );
  const handleChange = (e) => setSearch(e.target.value);

  return (
    <div className="search-page">
      <input type="text" className="search-bar" onChange={handleChange} />
      {load ? (
        <Load />
      ) : errors.length ? (
        errors.map((err) => <Errors error={err} />)
      ) : usersAfterTheSearch.length ? (
        usersAfterTheSearch.map((e) => <AdminCard user={e} key={e._id} />)
      ) : (
        <h2>no users</h2>
      )}
    </div>
  );
};

export default Users;
