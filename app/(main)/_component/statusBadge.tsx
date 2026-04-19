interface statusBadgeProps {
  status: "To Do" | "In Progress" | "Done";
}
const colors = {
  "To Do": "bg-gray-900/20 text-gray-700",
  "In Progress": "bg-blue-900/20 text-blue-700",
  Done: "bg-green-900/20 text-green-700",
};
export default function StatusBadge({ status }: statusBadgeProps) {
  return (
    <div
      className={`w-30 mt-2 mb-3 text-center rounded-full ${colors[status]}`}
    >
      {status}
    </div>
  );
}
