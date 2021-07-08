import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isModalAddTransactionOpenActions from '../../redux/isModalAddTransactionOpen/isModalAddTransactionOpenActions';
import selectors from '../../redux/isModalAddTransactionOpen/isModalAddTransactionOpenSelectors';
import ModalAddTransaction from '../ModalAddTransaction';
import Modal from '../Modal';
import './ButtonAddTransactions.scss';
import sprite from '../../images/sprite.svg';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  const onToggleModal = () => dispatch(isModalAddTransactionOpenActions());

  const isModalAddTransactionOpen = useSelector(state =>
    selectors.isModalAddTransactionOpen(state),
  );

  return (
    <>
      <div className="add-transactions-container">
        <button
          className="add-transactions__button"
          type="button"
          onClick={onToggleModal}
        >
          <svg className="add-button-icon">
            <use href={sprite + '#remove-button-icon'} />
          </svg>
        </button>
      </div>

      {isModalAddTransactionOpen && (
        <Modal onClose={onToggleModal}>
          <ModalAddTransaction />
        </Modal>
      )}
    </>
  );
};

export default ButtonAddTransactions;