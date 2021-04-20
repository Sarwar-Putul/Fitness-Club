import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddClass from "./Componants/Admin/AddClass/AddClass";
import AddTrainer from "./Componants/Admin/AddTrainer/AddTrainer";
import Dashboard from "./Componants/Admin/Dashboard/Dashboard";
import Book from "./Componants/Book/Book";
import BookingList from "./Componants/BookingList/BookingList";
import ClassesManager from "./Componants/ClassesManager/ClassesManager";
import AddReview from "./Componants/Home/AddReview/AddReview";
import Classes from "./Componants/Home/Classes/Classes";
import Home from "./Componants/Home/Home/Home";
import Login from "./Componants/Login/Login";
import PrivateRoute from "./Componants/PrivateRoute/PrivateRoute";




export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});



  return (

    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          
          <Route exact path="/">
            <Home></Home>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path='/book/:id'>
            <Book></Book>
          </PrivateRoute>

          <PrivateRoute path='/addReview'>
            <AddReview></AddReview>
          </PrivateRoute>
          <Route path='/classes'>
            <Classes></Classes>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <PrivateRoute path='/addClass'>
            <AddClass></AddClass>
          </PrivateRoute>

          <PrivateRoute path='/bookingList'>
            <BookingList></BookingList>
          </PrivateRoute>
          
          <PrivateRoute path='/classManager'>
            <ClassesManager></ClassesManager>
          </PrivateRoute>

          <PrivateRoute path='/addTrainer'>
            <AddTrainer></AddTrainer>
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
