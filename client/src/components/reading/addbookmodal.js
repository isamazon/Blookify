import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { useSelector } from 'react-redux';
// Components
import Form from './form';
class BookModal extends React.Component {
  // Data values

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      show1: true,
      modal: '',
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
              modal: 'modal',
            });
          }}
        >
          Add your own book
        </button>
        <Fade opposite when={this.state.show}>
          <div className={this.state.modal}>
            <Slide up opposite when={this.state.show1}>
              <div className="modal-box">
                <div
                  onClick={() => {
                    this.setState({
                      show: false,
                      modal: '',
                    });
                  }}
                  className="closebutton"
                >
                  X
                </div>
                {/* Form inside modal */}
                <Form
                // closeModal={() => {
                //   this.setState({
                //     show: false,
                //     show1: true,
                //   });
                // }}
                />
              </div>
            </Slide>
          </div>
        </Fade>
      </div>
    );
  }
}

export default BookModal;
