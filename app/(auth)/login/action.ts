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
} from "firebase/database";
import { getAvatarStyle } from "@/app/(main)/_component/getColor";
let globalUserName: string = " ";
let globalUserColor: any = {};

async function LoginAction(userName: string) {
  //, password: string)
  globalUserName = userName;
  const dbRef = ref(rtdb);
  try {
    const snapshot = await get(child(dbRef, `users`));
    const usersRef = ref(rtdb, "users");
    if (snapshot.exists()) {
      const userNameQuery = query(
        usersRef,
        orderByChild("userName"),
        equalTo(userName),
      );
      const userNameSnapshot = await get(userNameQuery);
      if (userNameSnapshot.exists()) {
        const username = await getUserName(userNameSnapshot.val());
        globalUserColor = await getUserColor(userNameSnapshot.val());
      } else {
        //no record, create new user
        const usersListRef = ref(rtdb, "users");
        const newUserRef = push(usersListRef);

        await set(newUserRef, {
          userName: userName,
          userColor: getAvatarStyle(userName),
          //   userPassword: password,
        });
        globalUserColor = getAvatarStyle(userName);
      }
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

async function getUserName(data: any) {
  const userList = Object.values(data);
  const userData = userList[0] as any;
  const username: string = String(userData.userName || "");
  return username;
}

async function getUserColor(data: any) {
  const userList = Object.values(data);
  const userData = userList[0] as any;

  return userData.userColor;
}

async function getGlobalUserName() {
  return globalUserName;
}
async function getGlobalUserColor() {
  return globalUserColor;
}

export { LoginAction, getGlobalUserName, getGlobalUserColor };
