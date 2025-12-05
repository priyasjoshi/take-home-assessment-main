import TransactionRow from './TransactionRow';

const TransactionTable = ({ transactions }) => {
  if (transactions.length === 0) {
    return <div className="no-transactions">No transactions found.</div>;
  }

  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>From</th>
          <th>To</th>
          <th>Amount</th>
          <th>Currency</th>
          <th>Status</th>
          <th>Timestamp</th>
          <th>Tx Hash</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx) => (
          <TransactionRow key={tx.id} tx={tx} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;