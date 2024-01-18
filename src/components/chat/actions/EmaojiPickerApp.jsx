import React, { useEffect, useState } from "react";
import { CloseIcon, EmojiIcon } from "../../../svg";
import EmojiPicker from "emoji-picker-react";
export default function EmaojiPickerApp({ textRef, message, setMessage, showPicker,setShowPicker }) {
  const [cursorPosition, setCursorPosition] = useState();

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  const handleEmoji = (emojiData, e) => {
    const { emoji } = emojiData;
    const ref = textRef.current;
    ref.focus();
    const start = message.substring(0, ref.selectionStart);
    const end = message.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setMessage(newText);
    setCursorPosition(start.length + emoji.length);
  };
  return (
    <li className="w-full">
      <button
        className="btn"
        type="button"
        onClick={() => setShowPicker((prev) => !prev)}
      >
        {showPicker ? (
          <CloseIcon className="dark:fill-dark_svg_1" />
        ) : (
          <EmojiIcon className="dark:fill-dark_svg_1" />
        )}
      </button>
      {/*EmojiPicker */}
      <div className="openEmojiAnimation absolute bottom-[60px] left-[-0.5px] w-full">
        {showPicker ? (
          <EmojiPicker theme="dark" onEmojiClick={handleEmoji} />
        ) : null}
      </div>
    </li>
  );
}
