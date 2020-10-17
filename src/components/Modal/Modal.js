import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.scss';

class Modal extends React.Component {
  static propTypes = {
    onclick: PropTypes.func,
    column: PropTypes.any,
    closePopup: PropTypes.func,
  }
	
  render() {
    return (
      <div className={styles.popup}>
        <div className={styles.popup_inner}>
          <h5>Are you sure you want to delete this currency?</h5>
		  <button onClick={this.props.closePopup}>Cancel</button>					
		  <button onClick={() => this.props.onclick(this.props.column)} type="button" className="btn">Yes!</button>
        </div>
      </div>
    );
  }
}

export default Modal;