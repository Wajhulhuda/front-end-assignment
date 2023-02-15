import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [logUser, setLogUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(logUser);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogUser((prev) => {
      return { ...logUser, [name]: value };
    });
  };
  return (
    <div className="col-lg-6 mx-auto pt-5 p-5 mt-5 border">
      <h2 className="text-center">Login</h2>
      <form
        className="row g-3 needs-validation"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-3">
          <label htmlFor="usename" className="form-label">
            User Name:
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <button className="btn btn-success" type="submit">
            Login
          </button>
        </div>
      </form>
      <div className="col-4 mx-auto">
        <Link to="/register" className="text-center my-3">
          Register Now
        </Link>
        <br />
        <Link to="/insight" className="text-center my-3">
          Insight Data
        </Link>
      </div>
    </div>
  );
};

export default Login;
