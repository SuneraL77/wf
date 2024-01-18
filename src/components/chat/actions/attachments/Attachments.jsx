import React from "react";
import { AttachmentIcon } from "../../../../svg";
import Menu from "./Menu";
export default function Attachments({showAtatchments,setShowAtachments}) {

  return (
    <li className="relative">
      <button className="btn" type="button" onClick={() => {setShowAtachments((prev) => !prev)}}>
        <AttachmentIcon className="dark:fill-dark_svg_1" />
      </button>
{showAtatchments ? <Menu/> : null}
      
    </li>
  );
}
