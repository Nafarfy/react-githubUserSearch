import React, { useState } from "react";

export const UserEmptyPreview = () => {
  return <div className="user">Not Requested</div>;
};

export const UserError = ({ error }) => {
  return <div className="user">{error}</div>;
};

const Avatar = ({ image }) => {
  const [state, setState] = useState("loading");

  switch (state) {
    case "loading":
      return (
        <>
          <img
            style={{ display: "none" }}
            onLoad={() => setState("loaded")}
            onError={() => setState("error")}
            src={image}
            alt="avatar"
            className="avatar"
          />
          <div>loading...</div>
        </>
      );
    case "loaded":
      return <img src={image} alt="avatar" className="avatar" />;

    case "error":
      return <div className="errorImg">No Image</div>;
    default:
      return;
  }
};

export const UserPreview = ({ user }) => {
  const { avatarUrl, name, location, htmlUrl } = user;

  return (
    <div className="user">
      <a href={htmlUrl} rel="noreferrer" target="_blank" className="avatarUrl">
        <Avatar image={avatarUrl} />
      </a>
      <div className="user-info">
        <a href={htmlUrl} rel="noreferrer" target="_blank" className="user-name">
          {name}
        </a>
        <span className="user-location">{location}</span>
      </div>
    </div>
  );
};
