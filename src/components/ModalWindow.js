import { Component } from "react";

class ModalWindow extends Component {
  render() {
    return (
      <>
        <div hidden={this.props.hidden} className="popup-black">
          <div className="popup">
            <button
              className="wrap-article_btn popup-close"
              onClick={() => {
                this.props.changeTitleJsonplaceholder(this.props.id);
                this.props.closeModalWindow();
              }}
            >
              Save
            </button>
            <input
              className="popup-info"
              value={this.props.title}
              onChange={(event) => {
                this.props.changeInputTitle(event);
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default ModalWindow;
