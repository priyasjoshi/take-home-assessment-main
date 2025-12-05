const ConsentFilters = ({ filterStatus, setFilterStatus }) => {
  return (
    <div className="consent-filters">
      {['all', 'active', 'pending'].map((status) => (
        <button
          key={status}
          className={filterStatus === status ? 'active' : ''}
          onClick={() => setFilterStatus(status)}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ConsentFilters;
