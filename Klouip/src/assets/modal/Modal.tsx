import { ModalProps } from "../../types/component.types";
import CloseIcon from "../icons8-close-50.png";
import "./Modal.scss";

const Modal = (props: ModalProps) => {
  return (
    <>
      {props.isOpen && (
        <div className="modal">
          <div className="popup">
            <img
              className="close"
              src={CloseIcon}
              onClick={() => {
                props.onClick();
              }}
            />
            <div className="content">
              <h1>This is our model</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum'{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
