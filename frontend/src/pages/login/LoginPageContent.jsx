import axios from "axios";
import { useState } from "react";

const LoginPageContent = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleOnFormSubmit = (event) => {
    event.preventDefault();
    login();
  };

  const login = async () => {
    const formData = {
      user: user,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://app.localhost:80/api/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { message } = response.data;
      setMessage(message);
      // console.log("SERVER : ", response.data);
    } catch (error) {
      console.log("could not log in ...", error);
    }
  };

  const handleOnUserChange = (event) => {
    console.log(event.target.value);
    const { value } = event.target;
    setUser(value);
  };

  const handleOnPasswordChange = (event) => {
    console.log(event.target.value);
    const { value } = event.target;
    setPassword(value);
  };

  return (
    <>
      <form className="login-form" onSubmit={handleOnFormSubmit}>
        <label htmlFor="user">user: </label>
        <input
          type="text"
          id="user"
          value={user}
          name="user"
          onChange={handleOnUserChange}
          required
        />
        <br />
        <label htmlFor="pass">password: </label>
        <input
          type="password"
          id="pass"
          name="password"
          value={password}
          onChange={handleOnPasswordChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <br />
      <div>
        <h2>{message}</h2>
      </div>
    </>
  );
};

export default LoginPageContent;
