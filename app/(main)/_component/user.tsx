interface UserIconProps {
  user?: string;
  userColor?: { backgroundColor: string };
}
export default function UserIcon({ user, userColor }: UserIconProps) {
  return (
    <div
      className="h-5 w-5 rounded-full text-center text-xs text-white font-bold flex items-center justify-center"
      style={{ backgroundColor: `${userColor?.backgroundColor}` }}
    >
      <p>{user ? user.charAt(0).toUpperCase() : null}</p>
    </div>
  );
}
