import blankAvatar from "../assets/blank-profile.png";

const AvatarDisplay = ({ ticket }) => {
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img src={ticket.avatar ? ticket.avatar : defaultAvatar} alt="avatar" />
      </div>
    </div>
  );
};

export default AvatarDisplay;
