import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { useSelector } from "react-redux";
// Components
import Form from "./form";
class BookModal extends React.Component {
  // Data values
  // Redux
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      modal: " ",
    };
  }

  render() {
    return (
      <div className="modal-btn-cnt">
        <button
          className="modal-button"
          type="button"
          onClick={() => {
            this.setState({
              show: true,
              modal: "modal",
            });
          }}
        >
          <p>Add your own book</p>
        </button>
        <Fade when={this.state.show}>
          <div className={this.state.modal}>
            <Slide up opposite when={this.state.show}>
              <div className="modal-box">
                <div
                  onClick={() => {
                    this.setState({
                      show: false,
                      modal: "",
                    });
                  }}
                  className="closebutton"
                >
                  X
                </div>
                {/* Form inside modal */}
                <Form />
              </div>
            </Slide>
          </div>
        </Fade>
      </div>
    );
  }
}

export default BookModal;
