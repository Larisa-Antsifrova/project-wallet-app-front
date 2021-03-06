import React from 'react';

import cn from 'classnames';

import { ReactComponent as ButtonDeleteIcon } from '../../images/cancel-circle.svg';

import './HomeTab.scss';

const HomeTab = ({
  category,
  income,
  date,
  comment,
  sum,
  balance,
  deleteTransaction,
}) => {
  let incomingDate = new Date(date);
  const options = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
  };
  const localData = incomingDate.toLocaleDateString('ua-UA', options);

  return (
    <>
      <div className={cn('dataList', 'tableHeaderCommon')}>
        <p className="dataElement">
          <span>{localData}</span>
        </p>
        <p className={cn('dataElement', 'dataElementCenter')}>
          <span>{income ? '+' : '-'}</span>
        </p>
        <p className="dataElement">
          <span>{category}</span>
        </p>
        <p className="dataElement">
          <span>{comment}</span>
        </p>
        <p
          className={cn(
            'dataElement',
            'dataElementRight',
            income && 'dataElementGreen',
          )}
        >
          <span>{sum}</span>
        </p>
        <p className={cn('dataElement', 'dataElementBalance')}>
          <span>{balance}</span>
        </p>
        <button className="buttonDeleteTransaction" onClick={deleteTransaction}>
          <ButtonDeleteIcon
            className={income ? 'circleDelete' : 'circleDeleteExpense'}
          />
        </button>
      </div>
    </>
  );
};

export default HomeTab;
