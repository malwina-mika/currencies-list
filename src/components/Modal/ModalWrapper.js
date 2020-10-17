import React from 'react';
import Modal from './Modal';
import PropTypes from 'prop-types';
import styles from './Modal.scss';

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
     <div className={styles.modalContainer} >
       <div className={styles.tooltip}><i onClick={this.togglePopup.bind(this)} className={`fas fa-trash-alt ${styles.trashIcon}`}></i>
       <span className={styles.tooltiptext}>Remove</span>
       </div>

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