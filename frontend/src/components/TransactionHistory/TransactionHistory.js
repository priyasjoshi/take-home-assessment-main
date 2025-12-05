import { useTransactions } from '../../hooks/useTransactions';
import './TransactionHistory.css';
import TransactionTable from './TransactionTable';
import { formatAddress } from '../../utils/formatTransaction';

const TransactionHistory = ({ account }) => {
  // TODO: Implement fetchTransactions function
  const { transactions, loading, error } = useTransactions(account);

  if (loading) {
    return (
      <div className="transaction-history-container">
        <div className="loading">Loading transactions...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="transaction-history-container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="transaction-history-container">
      <div className="transaction-header">
        <h2>Transaction History</h2>
        {account && (
          <div className="wallet-filter">
            Filtering for: {formatAddress(account)}
          </div>
        )}
      </div>

      {/* TODO: Display transactions list */}
      {/* Show: type, from, to, amount, currency, status, timestamp, blockchainTxHash */}
      <div className="transactions-list">
        {/* Your implementation here */}
        <TransactionTable transactions={transactions} />
      </div>
    </div>
  );
};

export default TransactionHistory;