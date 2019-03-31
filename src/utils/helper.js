
import man from "../images/man.png";
import boy from "../images/boy.png";
import girl from "../images/girl.png";
import noAvatar from "../images/noAvatar.png";

export function getAvatar(avatar) {
  if (avatar === "boy") return boy;
  if (avatar === "man") return man;
  if (avatar === "girl") return girl;
  return noAvatar;
}
