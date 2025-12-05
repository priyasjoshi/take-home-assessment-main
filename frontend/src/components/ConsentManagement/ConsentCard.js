const ConsentCard = ({ consent, onUpdateStatus }) => {
  return (
    <div className="consent-card">
      <p><strong>Patient:</strong> {consent.patientId}</p>
      <p><strong>Purpose:</strong> {consent.purpose}</p>
      <p><strong>Status:</strong> {consent.status}</p>
      <p><strong>Created:</strong> {new Date(consent.createdAt).toLocaleString()}</p>

      {consent.blockchainTxHash && (
        <p>
          <strong>Tx Hash:</strong>
          <span className="consent-tx-hash"> {consent.blockchainTxHash} </span>
        </p>
      )}

      {consent.status === 'pending' && (
        <div className="consent-actions">
          <button
            className="approve-btn"
            onClick={() => onUpdateStatus(consent.id, 'active')}
          >
            Approve
          </button>
        </div>
      )}
    </div>
  );
};

export default ConsentCard;