import ConsentCard from './ConsentCard';

const ConsentList = ({ consents, onUpdateStatus }) => {
  if (consents.length === 0) {
    return <p>No consents found</p>;
  }

  return (
    <div className="consents-list">
      {consents.map((c) => (
        <ConsentCard key={c.id} consent={c} onUpdateStatus={onUpdateStatus} />
      ))}
    </div>
  );
};

export default ConsentList;