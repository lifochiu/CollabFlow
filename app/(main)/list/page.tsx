import UserIcon from "../_component/user";
import LevelBadge from "../_component/levelBadge";
import StatusBadge from "../_component/statusBadge";
export default function List() {
  const cards = () => {
    return (
      <div className="w-200 h-20 rounded border-blback border flex flex-row items-center justify-between">
        <div>
          <p className="ml-10">Task1</p>
        </div>
        <div className="w-100 flex flex-row justify-around">
          <LevelBadge level="Medium" />
          <StatusBadge status="In Progress" />
          <div>11-04-2026</div>
          <UserIcon />
        </div>
      </div>
    );
  };
  return (
    /*<div className="flex flex-col items-center justify-center mt-10 gap-y-5">
      <div className="flex flex-row w-200 justify-between ">
        <div>
          <p className="ml-10">Title</p>
        </div>
        <div className="w-100 flex flex-row justify-around">
          <p>Priority</p>
          <p>Status</p>
          <p>Due Date</p>
          <p>Assignee</p>
        </div>
      </div>*/
    <div className="flex flex-col items-center justify-center mt-10 gap-y-5">
      {cards()}
      {cards()}
      {cards()}
    </div>
  );
}
