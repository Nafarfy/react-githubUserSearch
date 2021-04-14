export const UserEmptyPreview = () => {
  return <div className="user">Not Requested</div>;
};

export const UserError = ({ error }) => {
  return <div className="user">{error}</div>;
};

export const UserPreview = ({ user }) => {
  const { avatarUrl, name, location, htmlUrl } = user;

  return (
    <div className="user">
      <a href={htmlUrl} target="_blank" className="avatarUrl">
        <img src={avatarUrl} alt="avatar" className="avatar" />
      </a>
      <div className="user-info">
        <a href={htmlUrl} target="_blank" className="user-name">
          {name}
        </a>
        <span className="user-location">{location}</span>
      </div>
    </div>
  );
};
