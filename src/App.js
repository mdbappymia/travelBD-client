import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import AppBar from "./components/AppBar/AppBar";
import BookingService from "./components/BookingService/BookingService";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import InsertItem from "./components/InsertItem/InsertItem";
import Login from "./components/Login/Login";
import ManageAllOrder from "./components/ManageAllOrder/ManageAllOrder";
import MyOrder from "./components/MyOrder/MyOrder";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import PrivetRoute from "./components/PrivetRoute/PrivetRoute";
import Profile from "./components/Profile/Profile";
import AllProvider from "./contexts/AllProvider";

const App = () => {
  return (
    <AllProvider>
      <BrowserRouter>
        <AppBar></AppBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivetRoute path="/insert-item">
            <InsertItem></InsertItem>
          </PrivetRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivetRoute path="/booking/:id">
            <BookingService></BookingService>
          </PrivetRoute>
          <PrivetRoute path="/my-orders">
            <MyOrder></MyOrder>
          </PrivetRoute>
          <PrivetRoute path="/manage-all-orders">
            <ManageAllOrder></ManageAllOrder>
          </PrivetRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivetRoute path="/profile">
            <Profile></Profile>
          </PrivetRoute>
          <Route path="*">
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AllProvider>
  );
};

export default App;
