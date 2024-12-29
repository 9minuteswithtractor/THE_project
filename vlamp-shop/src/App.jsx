import { useState } from "react";
import "./App.scss";
import axios from "axios";
import GreetUser from "./components/greet-user/GreetUser.component";

const App = () => {
  const [greeting, setGreeting] = useState("");

  // name is the user input received from GreetUser component
  const handleSayHello = (name) => {
    setGreeting(name);
  };

  return (
    <div className="App">
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
