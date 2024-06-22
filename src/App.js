import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import Albums from "./components/Albums";
import Photos from "./components/Photos";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<UserList />}
          />
          <Route
            path="/albums/:userId"
            element={<Albums />}
          />
          <Route
            path="/photos/:albumId"
            element={<Photos />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
