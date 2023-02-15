import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    city: "",
  });
  const [gender, setGender] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
  };
  const handleGenderChange = () => {};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...user, [name]: value };
    });
  };
  return (
    <div className="col-lg-6 mx-auto pt-5 p-5 mt-5 border">
      <h2 className="text-center">Register</h2>
      <form
        className="row g-3 needs-validation"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username :
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password :
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email :
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="city" className="form-label">
            City :
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 d-flex">
          <label htmlFor="city" className="form-label pe-5">
            Gender :
          </label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="male"
              checked={gender === "male"}
              onChange={handleGenderChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="female"
              checked={gender === "female"}
              onChange={handleGenderChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Female
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-success" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
