import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../../../../redux/reducer/FacebookReducer";

export default function DemoFaceBookApp(props) {
  const commentRef = useRef({
    name: "",
    content: "",
  });
  const dispatch = useDispatch();
  const { arrComment } = useSelector((state) => state.FacebookReducer);
  console.log(arrComment);
  const renderComment = () => {
    return arrComment.map((cmt, index) => {
      return (
        <div className="row" key={index}>
          <div className="col-2">
            <img
              src={`https://i.pravatar.cc?u=${cmt.name}`}
              alt="avatar"
              width={50}
            />
          </div>
          <div className="col-10">
            <h3 className="text-danger">{cmt.name}</h3>
            <p>{cmt.content}</p>
          </div>
        </div>
      );
    });
  };
  const handleChange = (e) => {
    let { id, value } = e.target;
    commentRef.current[id] = value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const action = submitForm(commentRef.current);
    dispatch(action);
  };
  return (
    <div className="container">
      <h3>Demo Facebook App</h3>
      <div className="card w-25">
        <div className="card-header">{renderComment()}</div>
        <div className="card-body">
          <form classname="form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="name"
                aria-describedby="helpId"
                onChange={handleChange}
              />
              <small id="helpId" className="text-muted">
                Help text
              </small>
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">
                content
              </label>
              <input
                type="text"
                name="content"
                id="content"
                className="form-control"
                placeholder="content"
                aria-describedby="helpId"
                onChange={handleChange}
              />
              <small id="helpId" className="text-muted">
                Help text
              </small>
            </div>
            <div classname="mb-3">
              <button type="submit" classname="btn btn-success">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
}
