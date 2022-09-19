import React from "react";
import styles from "../styles/requestModal.module.css";

interface ModalProps {
  setIsOpen: (value: boolean) => void;
}
const Modal = ({ setIsOpen }: ModalProps) => {
  return (
    <section id="contact" className={`border round-pill  ${styles.requestModal}`}>
      <div className="container bg-light mt-5 border rounded-3 " style={{ width: "500px" }}>
        <form className=" ">
          <div className="mb-3 ms-2">
            <label className="form-label mt-3">Name</label>
            <input
              type="name"
              className="form-control w-75"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="name"
            />
          </div>
          <div className="mb-3 ms-2">
            <label className="form-label">Contact</label>
            <input
              type="contact"
              className="form-control w-75"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="contact"
            />
          </div>
          <div className="mb-3 ms-2">
            <label className="form-label">Current_Location</label>
            <input
              type="location"
              className="form-control w-75"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 ms-2">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control w-75"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 ms-2 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="mb-3 ms-2 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Female</label>
          </div>
          <button onClick={()=>setIsOpen(false)} className="btn btn-primary mb-2 ms-2">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
export default Modal;
