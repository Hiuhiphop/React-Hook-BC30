import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderHome() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="#">
          Project Hook
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="#" aria-current="page">
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="antd" aria-current="page">
                Antd Demo <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="login" aria-current="page">
                Login (token) <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hook
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to={"/usestatedemo"}>
                  UseState Demo
                </NavLink>
                <NavLink className="dropdown-item" to={"/useeffectdemo"}>
                  UseEffect Demo
                </NavLink>
                <NavLink className="dropdown-item" to={"/baitapchonxe"}>
                  B??i T???p Ch???n Xe
                </NavLink>
                <NavLink className="dropdown-item" to={"/usecallbackdemo"}>
                  UseCallBack Demo
                </NavLink>
                <NavLink className="dropdown-item" to={"/usememodemo"}>
                  UseMemo Demo
                </NavLink>
                <NavLink className="dropdown-item" to={"/userefdemo"}>
                  UseRef Demo
                </NavLink>
                <NavLink className="dropdown-item" to={"/numberdemo"}>
                  UseRedux - NumberDemo
                </NavLink>
                <NavLink className="dropdown-item" to={"/facebookdemo"}>
                  Facebook Demo
                </NavLink>
                <NavLink className="dropdown-item" to={"/logindemo"}>
                  Login Demo
                </NavLink>
                <NavLink className="dropdown-item" to={"/usesearchparam"}>
                  Use Param Demo
                </NavLink>
                <NavLink className="dropdown-item" to={"/useroutescustomhook"}>
                  Use Routes Demo (custom Hook)
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
