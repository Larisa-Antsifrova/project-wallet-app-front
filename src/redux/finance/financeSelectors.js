export const transactions = state => state.finance.transactions;
export const totals = state => state.finance.totalBalance;
export const pagination = state => state.finance.transactions.pagination;
export const getStatistics = state => state.finance.statistics?.statistics;
export const costsIncomeTotals = state => state.finance.statistics?.totals;
export const isLoadingStatistic = state => state.finance.isLoadingStatistic;
export const isLoadingTransaction = state => state.finance.isLoadingTransaction;
export const getFirstTransactionDate = state =>
  state.finance.statistics?.earliest;
