import StatCard from './StatCard';

const StatsGrid = ({ stats }) => {
  return (
    <div className="stats-grid">
      <StatCard title="Total Patients" value={stats.totalPatients} />
      <StatCard title="Total Records" value={stats.totalRecords} />
      <StatCard title="Total Consents" value={stats.totalConsents} />
      <StatCard title="Active Consents" value={stats.activeConsents} />
      <StatCard title="Pending Consents" value={stats.pendingConsents} />
      <StatCard title="Total Transactions" value={stats.totalTransactions} />
    </div>
  );
};

export default StatsGrid;