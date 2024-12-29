import { useState } from "react";
import axios from "axios";

const GreetUser = ({ sayHello }) => {
  const [name, setName] = useState("");

  // Handle input change
  const handleOnChange = (event) => {
    // Update the 'name' state with the input field's value as user types
    setName(event.target.value);
  };

  // Handle form submission
  const handleOnSubmit = (event) => {
    // Prevents the default form submission behavior (page reload)
    event.preventDefault();

    // Call the 'sayHello' function passed as a prop with the 'name' value
    // sayHello(name);
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
        sayHello(response.data); // Set the greeting text from the server
      })
      .catch((error) => {
        console.error("Error during submit ...", error);
        sayHello("An error occurred, try again later...");
      });

    setName("");
  };

  return (
    <section className="input-container">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="user"
          placeholder="Your name"
          id="user"
          value={name}
          onChange={handleOnChange}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default GreetUser;
