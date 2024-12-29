import { useState } from "react";
import "./App.scss";
import axios from "axios";
import GreetUser from "./components/greet-user/GreetUser.component";

const App = () => {
  const [greeting, setGreeting] = useState("");

  // name is the user input received from FormInput
  const handleSayHello = (name) => {
    // Data to be sent to the Backend
    const data = {
      user: name,
    };

    // Send data to the server
    axios
      .post("http://shop.localhost:80/server.php", data, {
        headers: {
          "Content-Type": "application/json", // Specify that we're sending JSON data
        },
      })
      .then((response) => {
        setGreeting(response.data); // Set the greeting text from the server
      })
      .catch((error) => {
        console.error("Error during submit ...", error);
        setGreeting("An error occurred, try again later...");
      });
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
