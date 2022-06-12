import "./Modal.css";

export default function Modal({ modalClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="Email">
          <h2>Email :</h2>
          <h3>ryanbarcebal0698@gmail.com</h3>
        </div>

        <div className="mobile-number">
          <h2>Mobile-Number :</h2>+639684373009
        </div>

        <button className="c-button" onClick={modalClose}>
          Close
        </button>
      </div>
    </div>
  );
}
