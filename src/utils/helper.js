
import man from "../images/man.png";
import boy from "../images/boy.png";
import girl from "../images/girl.png";
import girl2 from "../images/girl2.png";
import girl3 from "../images/girl3.png";
import girl4 from "../images/girl4.png";
import noAvatar from "../images/noAvatar.png";

export function getAvatar(avatar) {
  if (avatar === "boy") return boy;
  if (avatar === "man") return man;
  if (avatar === "girl") return girl;
  if (avatar === "girl2") return girl2;
  if (avatar === "girl3") return girl3;
  if (avatar === "girl4") return girl4;
  return noAvatar;
}
