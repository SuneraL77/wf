import React from "react";
import { Logo } from "../../../svg";

export default function WhatsappHome() {
  return (
    <div className="mx-1 h-full w-full  dark:bg-dark_bg_4 select-none border-1 dark:dark_border_2 border-b-[6px] border-b-green_2">
      <div className="w-full h-full flex flex-col gap-y-8 items-center justify-center">
        <span>
          <Logo />
        </span>
        {/*Infos */}

        <div className="mt-1 text-center space-y-[12px]">
          <h1 className="text-[32px] dark:text-dark_text_4 font-extralight">
            Whatsapp Web
          </h1>
          <p className="text-sm dark:text-dark_text_3">
            Send and receive message without keepong your phone online.
            <br />
            Use Whatsapp in to 4 linked devices and 1 phone at them same time
          </p>
        </div>
      </div>
    </div>
  );
}
