import React from "react";
import useHeaderColorEffect from "./useHeaderColorEffect";
import "./Header.css";

function UserPage(props) {
  const headerColor = useHeaderColorEffect(props.avatarImg);

  return (
    <>
      <div className="header" style={{ backgroundColor: headerColor }}>
        <div className="header-wrapper">
          <img className="card-avatar" src={props.avatarImg} alt="k" />
          <div className="header-name">{props.name}</div>
          <div className="header-check"></div>
        </div>
      </div>
      <div className="hashtag-wrapper">
        <div className="header-hashtag">#{props.hashtag}</div>
      </div>
    </>
  );
}

export default UserPage;
