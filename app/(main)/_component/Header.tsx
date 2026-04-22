import {
  getGlobalUserName,
  getGlobalUserColor,
} from "@/app/(auth)/login/action";
export default async function Header() {
  return (
    <div className="bg-blue-500 text-white p-8 flex justify-between">
      <h1 className="text-4xl font-bold">
        Collab Flow. Welcome! <i>{await getGlobalUserName()}</i>
      </h1>
      <div
        className={`h-10 w-10 rounded-full text-center leading-10 text-white font-bold`}
        style={await getGlobalUserColor()}
      >
        {await getGlobalUserName().then((name) => name.charAt(0).toUpperCase())}
      </div>
    </div>
  );
}
