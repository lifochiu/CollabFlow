import UserIcon from "../_component/user";
interface participants {
  userName: string;
  userColor: { backgroundColor: string };
}
export default function participantMember({
  participants,
}: {
  participants: participants[];
}) {
  return (
    <div className="flex flex-row">
      {participants.map((participant, index) => (
        <span key={index} className="text-sm font-medium mr-3">
          <UserIcon
            user={participant.userName}
            userColor={participant.userColor}
          />
        </span>
      ))}
    </div>
  );
}
