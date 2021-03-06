import React, { useEffect } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  fetchTransactions,
  fetchBalance,
} from '../../redux/finance/financeOperations';
import { useLocation } from 'react-router-dom';

import Container from '../../components/Container';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Balance from '../../components/Balance';
import Currency from '../../components/Currency/Currency';

import HomeTabPage from '../homeTabPage';
import DiagramTabPage from '../diagramTabPage/DiagramTabPage';
import CurrencyTabPage from '../currencyTabPage';

import './dashboardPage.scss';

const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTransactions()), [dispatch]);

  useEffect(() => dispatch(fetchBalance()), [dispatch]);

  const biggerThan767 = useMediaPredicate('(min-width: 768px)');
  const { pathname } = useLocation();
  const balanceOffAtCurrency = pathname !== '/dashboard/currency';
  const balanceOffAtDiagramMobile =
    pathname === '/dashboard/diagram' && !biggerThan767;

  return (
    <>
      <Header />
      <Container>
        <div className="dashboard">
          <div className="dashboardStaticData">
            <div className="dashboardNavigationAndBalance">
              <Navigation />
              {balanceOffAtCurrency && !balanceOffAtDiagramMobile && (
                <Balance />
              )}
            </div>
            {biggerThan767 && pathname !== '/dashboard/currency' && (
              <div>
                <Currency />
              </div>
            )}
          </div>
          <div className="dashboardRoutedComponent">
            <Switch>
              <Route path="/dashboard/home" component={HomeTabPage} />
              <Route path="/dashboard/diagram" component={DiagramTabPage} />
              <Route path="/dashboard/currency" component={CurrencyTabPage} />
            </Switch>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DashboardPage;
