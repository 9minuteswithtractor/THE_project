import { useState } from "react";
import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GreetUser from "./components/greet-user/GreetUser.component";
import NavBar from "./components/nav-bar/NavBar.component";

const App = () => {
  const [greeting, setGreeting] = useState("");

  // name is the user input received from GreetUser component
  const handleSayHello = (name) => {
    setGreeting(name);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="main-container">
        <GreetUser sayHello={handleSayHello} />
        <div className="result-container">
          {/* Display the result from the server */}
          <h1>{greeting}</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
