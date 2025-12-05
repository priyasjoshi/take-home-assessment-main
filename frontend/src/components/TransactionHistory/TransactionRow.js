import { formatAddress, formatDate } from '../../utils/formatTransaction';

const TransactionRow = ({ tx }) => {
  return (
    <tr>
      <td>{tx.type}</td>
      <td>{formatAddress(tx.from)}</td>
      <td>{formatAddress(tx.to)}</td>
      <td>{tx.amount}</td>
      <td>{tx.currency}</td>
      <td>{tx.status}</td>
      <td>{formatDate(tx.timestamp)}</td>
      <td>
        {tx.blockchainTxHash && (
          <a
            href={`https://etherscan.io/tx/${tx.blockchainTxHash}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {tx.blockchainTxHash.slice(0, 10)}...
          </a>
        )}
      </td>
    </tr>
  );
};

export default TransactionRow;
