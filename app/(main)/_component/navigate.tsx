import Link from "next/link";

export default function Navigate() {
  return (
    <div className="bg-gray-200 p-4 flex justify-around">
      <Link href="../Form">Create Task</Link>
      <Link href="../board/">Board</Link>
      <Link href="../list/">List</Link>

      {/* <Link href="../timeline/">Timeline</Link> */}

      <Link href="../login/">Log Out</Link>
    </div>
  );
}
