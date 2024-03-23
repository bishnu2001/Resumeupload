import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login";
import Teacher from "./pages/Teacher";
import Student from "./pages/Student";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/student" element={<Student />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
