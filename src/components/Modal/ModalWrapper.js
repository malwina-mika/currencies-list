import React from 'react';
import Modal from './Modal';
import PropTypes from 'prop-types';

class ModalWrapper extends React.Component {
  constructor() {
	  super();
	  this.state = {
      showPopup: false,
	  };
  }

	static propTypes = {
    onclick: PropTypes.func,
    column: PropTypes.any,
	}
	
  togglePopup() {
   this.setState({
     showPopup: !this.state.showPopup,
   });
 }

 render() {
   return (
     <div>
       <button onClick={this.togglePopup.bind(this)}>Delete</button>
       {this.state.showPopup ? 
       <Modal
          text='Close'
          closePopup={this.togglePopup.bind(this)}
          onclick={this.props.onclick}
          column={this.props.column} /> : null }
    </div>
	  );
  }
}

export default ModalWrapper;