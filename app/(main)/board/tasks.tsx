import { create } from "domain";
import LevelBadge from "../_component/levelBadge";
import UserIcon from "../_component/user";
type PriorityLevel = "High" | "Medium" | "Low";
interface CardProps {
  id: string;
  title: string;
  description: string;
  createUser: string;
  status: string;
  priority: PriorityLevel;
  participants: string;
  userColor: { backgroundColor: string };
}

export default function cards({
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
    <div className="w-60 h-30 border border-b-black rounded-md pl-5 pt-2 mb-5">
      <p>{title}</p>
      <LevelBadge level={priority} />
      <div className="flex flex-row items-center mt-2">
        <UserIcon user={createUser} userColor={userColor} />
      </div>
    </div>
  );
}
