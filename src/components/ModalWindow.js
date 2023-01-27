import { Component } from "react";

class ModalWindow extends Component {
  render() {
    return (
      <>
        <div
          hidden={this.props.hidden}
          className="popup-black"
          onMouseUp={(event) => {
            if (event.target.className === "popup-black") {
              this.props.closeModalWindow();
            }
          }}
        >
          <div className="popup">
            <input
              className="popup-info"
              value={this.props.title}
              onChange={(event) => {
                this.props.changeInputTitle(event);
              }}
            />
            <button
              className="wrap-article_btn popup-close"
              onClick={() => {
                this.props.changeTitleJsonplaceholder(this.props.id);
                this.props.closeModalWindow();
              }}
            >
              Save
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ModalWindow;
