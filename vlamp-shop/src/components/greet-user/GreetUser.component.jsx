import { useState } from "react";

const GreetUser = ({ sayHello }) => {
  const [name, setName] = useState("");

  // Handle input change
  const handleOnChange = (event) => {
    setName(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    sayHello(name);

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
