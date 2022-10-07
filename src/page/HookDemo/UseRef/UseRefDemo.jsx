import React, { useRef, useState } from "react";

export default function UseRefDemo() {
  const userLoginRef = useRef({
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    console.log(userLoginRef.current);
    let { id, value } = e.target;
    userLoginRef.current[id] = value;
  };

  const handleSubmit = (e) => {
    console.log(userLoginRef.current);
    e.preventDefault();
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>login</h3>
      <div className="form-group">
        <p>name</p>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>password</p>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success mt-2" type="submit">
          submit
        </button>
      </div>
    </form>
  );
}
