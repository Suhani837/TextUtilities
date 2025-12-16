// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert("Dark mode has beeen enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has beeen enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };
  const toggleBlue = () =>{
    if(mode!=="primary"){
      setMode("primary");
     
      document.body.style.backgroundColor = "#7fa6da";
      
      document.body.style.color = "black";
      showAlert("Green mode has been enabled","success");
    }
  }
  const toggleRed = () =>{
    if(mode!=="danger"){
      setMode("danger");
      document.body.style.backgroundColor = "#da7f91";
      document.body.style.color = "white";
      showAlert("Red mode has been enabled","success");
    }
  }
  const toggleYellow = () =>{
    if(mode!=="warning"){
      setMode("warning");
      document.body.style.backgroundColor = "#d8da7f";
      document.body.style.color = "white";
      showAlert("yellow mode has been enabled","success");
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        toggleBlue= {toggleBlue}
        toggleRed= {toggleRed}
        toggleYellow = {toggleYellow}
        aboutText="About"
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert}  mode={mode} heading="Enter the text to analyse" />} />
        </Routes> */}
        <TextForm showAlert={showAlert}  mode={mode} heading="Enter the text to analyse" />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
