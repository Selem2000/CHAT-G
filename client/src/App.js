import "./App.css";
import Errors from "./Pages/Errors/Errors";
import Landpage from "./Pages/Landpage/Landpage";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import Friends from "./Pages/Friends/Friends";
import Bar from "./Components/Bar/Bar";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./router/PrivateRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "./Redux/actions/user";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Pages/Home/Home";
import Posts from "./Pages/posts/Posts";
import Search from "./Pages/Search/Search";
import Invitations from "./Pages/Invitation/Invitations";
import { getAllPosts } from "./Redux/actions/post";
import Admin from "./Pages/admin/Admin";
import AllPost from "./Pages/allPost/AllPost";
import Users from "./Pages/users/Users";
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  useEffect(() => {
    dispatch(current());
  }, []);

  return (
    <div>
      <Bar />
      {isAuth && <SideBar />}
      <Switch>
        <Route exact path="/" component={Landpage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/posts" component={Posts} />
        <PrivateRoute path="/friends" component={Friends} />
        <PrivateRoute path="/search" component={Search} />
        <PrivateRoute path="/invitation" component={Invitations} />
        <PrivateRoute path="/admin" component={Admin} />
        <PrivateRoute path="/allposts" component={AllPost} />
        <PrivateRoute path="/users" component={Users} />
        <Route path="/*" component={Errors} />
      </Switch>
    </div>
  );
}

export default App;
