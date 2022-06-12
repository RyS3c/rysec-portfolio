import React, { useState } from "react";
import Modal from "../Contact modal/Modal";
import "./Contact.css";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const modalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="contact-form" id="contact">
        <div className="w-left">
          <div className="awesome">
            {/* darkMode */}
            {/* <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
            <span>Contact me</span> */}
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
            {showModal && <Modal modalClose={modalClose} />}

            <div className="items-center">
              {!showModal && (
                <button onClick={() => setShowModal(true)}>Contact me</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
