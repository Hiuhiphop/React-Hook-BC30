import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login(props) {
  // lấy dữ liệu từ form
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object().shape({
      //check validation
      email: Yup.string().required("Email is not valid").email('Email is not valid'),

      password: Yup.string().required("Password is not valid").min(6,"Password to short").max(32,"Password to long"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className="container" onSubmit={form.handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          className="form-control"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        {form.errors.email ? (
          <span className="text-danger">{form.errors.email}</span>
        ) : (
          ""
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-control"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        {form.errors.password ? (
          <span className="text-danger">{form.errors.password}</span>
        ) : (
          ""
        )}
      </div>
      <button className="btn btn-success mt-4" type="submit">
        Submit
      </button>
    </form>
  );
}
