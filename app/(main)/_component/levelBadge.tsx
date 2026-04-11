export default function LevelBadge({ level }: { level: string }) {
  const colors = {
    High: "bg-red-900/20 text-red-700",
    Medium: "bg-yellow-900/20 text-yellow-700",
    Low: "bg-green-900/20 text-green-700",
  };
  return (
    <div className="bg-red-900/20 text-red-700 w-18 text-center rounded-full ">
      Medium
    </div>
  );
}
