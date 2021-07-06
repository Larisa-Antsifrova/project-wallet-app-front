import axios from 'axios';
import financeActions from './financeActions';

axios.defaults.baseURL = 'https://awesome-wallet-app.herokuapp.com';

const totalBalance = () => async dispatch => {
  dispatch(financeActions.totalBalanceRequest());

  try {
    const { data } = await axios.get('/statistics');
    dispatch(financeActions.totalBalanceSuccess(data));
  } catch (error) {
    dispatch(financeActions.totalBalanceError());
  }
};

export default totalBalance;
