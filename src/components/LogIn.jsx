import { useState } from "react";
import { useAuth } from "../AuthProvider";

const LogIn = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const auth = useAuth()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      //    TODO: where submit to? what's hapening?
      auth.loginAction(input)
    }
    alert("Please provide valid input");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="user-email">Email: </label>
        <input
          type="email"
          id="user-email"
          name="email"
          placeholder="EmailAddress@email.com"
          aria-describedby="user-email"
          aria-invalid="false"
          onChange={handleInput}
        />
        <div id="user-email" className="sr-only">
          Please enter a valid username that contains at least 6 characters.
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          aria-describedby="user-password"
          aria-invalid="false"
          onChange={handleInput}
        />
        <div id="user-password" className="sr-only">
          Your password must be at least 7 characters
        </div>
      </div>
      <button className="btn-submit">Submit</button>
    </form>
  );
};


export default LogIn