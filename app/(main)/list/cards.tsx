"use client";
import UserIcon from "../_component/user";
import LevelBadge from "../_component/levelBadge";
import StatusBadge from "../_component/statusBadge";
type statusType = "To Do" | "In Progress" | "Done";
type PriorityLevel = "High" | "Medium" | "Low";
interface participants {
  userName: string;
  userColor: { backgroundColor: string };
}
interface CardProps {
  id: string;
  title: string;
  description: string;
  createUser: string;
  status: statusType;
  priority: PriorityLevel;
  participants: participants[];
  userColor: { backgroundColor: string };
}
export default function Cards({
  id,
  title,
  description,
  createUser,
  status,
  priority,
  participants,
  userColor,
}: CardProps) {
  return (
    <div className="w-200 h-20 rounded border-blback border flex flex-row items-center justify-between">
      <div>
        <p className="ml-10">{title}</p>
      </div>
      <div className="w-100 flex flex-row justify-around">
        <LevelBadge level={priority} id={id} />
        <StatusBadge status={status} id={id} />
        <UserIcon />
      </div>
    </div>
  );
}
