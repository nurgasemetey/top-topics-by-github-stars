import React from "react";
import PropTypes from "prop-types";

const Modal = ({ show, toggleModal }) => {
  return show ? (
    <div className="modal is-active">
      <div className="modal-background" onClick={toggleModal}></div>
      <div className="modal-content">
        <div className="box">
          <p className="title is-5 has-text-centered">User doesn't exist!</p>
          <p className="subtitle has-text-centered">Please try another one.</p>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={toggleModal}
      />
    </div>
  ) : null;
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default Modal;
