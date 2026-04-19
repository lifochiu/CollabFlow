"use client";
import Cards from "./cards";
import { useTasks } from "../_component/taskContext"; // 使用我們的 Hook

export default function List() {
  const { todoTasks, inProgressTasks, doneTasks, loading } = useTasks(); // 從 Context 中獲取任務資料

  // const cards = () => {
  //   return (
  //     <div className="w-200 h-20 rounded border-blback border flex flex-row items-center justify-between">
  //       <div>
  //         <p className="ml-10">Task1</p>
  //       </div>
  //       <div className="w-100 flex flex-row justify-around">
  //         <LevelBadge level="Medium" />
  //         <StatusBadge status="In Progress" />
  //         <div>11-04-2026</div>
  //         <UserIcon />
  //       </div>
  //     </div>
  //   );
  // };
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
      {/* <Cards /> */}
      {todoTasks.map((task) => (
        <Cards
          id={task.id}
          title={task.title}
          description={task.description}
          createUser={task.createUser}
          status={task.status}
          priority={task.priority}
          participants={task.participants}
          userColor={task.userColor}
        />
      ))}
      {inProgressTasks.map((task) => (
        <Cards
          id={task.id}
          title={task.title}
          description={task.description}
          createUser={task.createUser}
          status={task.status}
          priority={task.priority}
          participants={task.participants}
          userColor={task.userColor}
        />
      ))}
      {doneTasks.map((task) => (
        <Cards
          id={task.id}
          title={task.title}
          description={task.description}
          createUser={task.createUser}
          status={task.status}
          priority={task.priority}
          participants={task.participants}
          userColor={task.userColor}
        />
      ))}
    </div>
  );
}
