interface LevelBadgeProps {
  level: "High" | "Medium" | "Low";
}
export default function LevelBadge({ level }: LevelBadgeProps) {
  const colors = {
    High: "bg-red-900/20 text-red-700",
    Medium: "bg-yellow-900/20 text-yellow-700",
    Low: "bg-green-900/20 text-green-700",
  };
  return (
    <div
      className={`${colors[level] || colors.Low} w-18 text-center rounded-full mt-2 mb-3`}
    >
      {level}
    </div>
  );
}
