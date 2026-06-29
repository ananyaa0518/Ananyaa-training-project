type StatCardProps = {
  value: string;
  label: string;
};

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <h3 className="text-[40px] font-bold text-white">{value}</h3>

      <p className="mt-2 text-white/80">{label}</p>
    </div>
  );
}

export default StatCard;
