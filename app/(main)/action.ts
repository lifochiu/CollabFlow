"use server";
import { rtdb } from "@/app/backend/firebase";
import {
  ref,
  push,
  set,
  child,
  get,
  orderByChild,
  equalTo,
  query,
  onValue,
} from "firebase/database";
import {
  getGlobalUserName,
  getGlobalUserColor,
} from "@/app/(auth)/login/action";
import { use } from "react";

async function createTask(title: string, description: string) {
  const taskListRef = ref(rtdb, "tasks");
  const newTaskRef = push(taskListRef);
  await set(newTaskRef, {
    title: title,
    description: description,
    createUser: await getGlobalUserName(),
    status: "To Do",
    priority: "Medium",
    participants: [await getGlobalUserName()],
    userColor: await getGlobalUserColor(),
  });
}

async function getTasksInfo() {}
// async function getUserName() {
//   const dbRef = ref(rtdb);
//   try {
//     const snapshot = await get(child(dbRef, `users`));
//     const usersRef = ref(rtdb, "users");
//     if (snapshot.exists()) {
//       const userNameQuery = query(
//         usersRef,
//         orderByChild("userName"),
//         equalTo("userName"),
//       );
//       const userNameSnapshot = await get(userNameQuery);

//       // const username = await getUserName(userNameSnapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//   }
// }

export { createTask };
