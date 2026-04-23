"use client";
import Cards from "./cards";
import { useTasks } from "../_component/taskProvider"; // 使用我們的 Hook

export default function List() {
  const { todoTasks, inProgressTasks, doneTasks, loading } = useTasks(); // 從 Context 中獲取任務資料

  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-y-5">
      {/* <Cards /> */}
      {todoTasks.map((task) => (
        <Cards
          key={task.id}
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
          key={task.id}
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
          key={task.id}
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
