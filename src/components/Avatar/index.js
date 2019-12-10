import React from "react";
import { WrapperAvatar, ImgAvatar } from "./styles";
const defaultAvatar = "https://i.ibb.co/gtnJXBW/gif-ave.gif";

export const Avatar = ({ avatar = defaultAvatar }) => {
  return (
    <WrapperAvatar>
      <ImgAvatar src={defaultAvatar} />
    </WrapperAvatar>
  );
};
