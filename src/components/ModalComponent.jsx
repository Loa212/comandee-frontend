import React from "react";

const ModalComponent = ({ children, id, btnText, btnIcon }) => {
  return (
    <>
      {/* ------ MODAL PESCE ------- */}
      <div>
        <input type="checkbox" id={id} className="modal-toggle" />
        <label className="modal" htmlFor={id}>
          <div className="modal-box">{children}</div>
        </label>
      </div>

      <label htmlFor={id} className="btn modal-button">
        {btnText}
        <span className="ml-3 text-2xl">{btnIcon}</span>
      </label>
    </>
  );
};

export default ModalComponent;
