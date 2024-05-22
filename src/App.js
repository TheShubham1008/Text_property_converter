import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //wheather the dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode activated", "success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode activated", "success");
      document.title = "TextUtils-Light Mode";
    }
  };

  const toggleMode1 = () => {
    if (mode === "light") {
      setMode("Red");
      document.body.style.backgroundColor = "#9e1b32";
      showAlert("Red mode activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode activated", "success");
    }
  };

  const toggleMode2 = () => {
    if (mode === "light") {
      setMode("Yellow");
      document.body.style.backgroundColor = "#002D62";
      showAlert("Yellow mode activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode activated", "success");
    }
  };

  const toggleMode3 = () => {
    if (mode === "light") {
      setMode("Green");
      document.body.style.backgroundColor = "#1B4D3E";
      showAlert("Green mode activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode activated", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About Text Utils"
        mode={mode}
        toggleMode={toggleMode}
        toggleMode1={toggleMode1}
        toggleMode2={toggleMode2}
        toggleMode3={toggleMode3}
      />
      <Router>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
             exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter The Text To Analyze Below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
