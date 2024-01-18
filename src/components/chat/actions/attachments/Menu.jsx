import React from "react";
import { CameraIcon, ContactIcon, DocumentIcon, PhotoIcon, PollIcon, StickerIcon } from "../../../../svg";

export default function Menu() {

  return (
    <ul className="absolute bottom-14 openEmojiAnimation">
      <li>
        <button className="rounded-full"  type="button">
          <PollIcon />
        </button>
      </li>
    
      <li>
        <button className=" bg-[#0EABF4] rounded-full" type="button">
          <ContactIcon />
        </button>
      </li>

      <li>
        <button className=" bg-[#5F66CD] rounded-full" type="button">
          <DocumentIcon />
        </button>
      </li>

      <li>
        <button className="rounded-full  bg-[#D3336D]" type="button">
          <CameraIcon/>
        </button>
      </li>
      <li>
        <button className="rounded-full "  type="button">
          <StickerIcon />
        </button>
      </li>

      <li>
        <button className="rounded-full bg-[#BF59CF]"  type="button">
          <PhotoIcon />
        </button>
      </li>
    
    </ul>
  );
}
