import React from "react";

export default function Modal(props) {
  if (!props.show) return null;
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={props.toggleModal}></div>
      <div className="modal-content">
        <div className="box">
          <p className="title is-5 has-text-centered">User doesn't exist!</p>
          <p className="subtitle has-text-centered">
            Please try another one.
          </p>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={props.toggleModal}
      ></button>
    </div>
  );
}
