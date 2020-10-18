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
    const {column, closePopup, onclick} = this.props
    return (
      <div className={styles.popup}>
        <div className={styles.popupInner}>
          <h5 className={styles.popupHeader}>Are you sure you want to delete this currency?</h5>
          <button className={styles.btnClose} onClick={closePopup}>Cancel</button>					
          <button className={styles.btnRemove} onClick={() => {onclick(column); closePopup();}} type="button">Yes!</button>
        </div>
      </div>
    );
  }
}

export default Modal;