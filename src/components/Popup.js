import React, { Component } from 'react';
import '../Image.css';

class Popup extends  Component {
  render() {
    return (
      <div className="popupParent">
        <div className="popupImage">
          <button
            className="imageColisingButton"
            onClick={this.props.closePopup}
          >
          X
          </button>
          <img src={this.props.popImageUrl} alt="image" />
        </div>
      </div>
    );
  }
}
export default Popup;
