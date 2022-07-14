import React, { forwardRef } from "react";

const TextScroll = ({}, ref) => {
  return (
    <>
      <div
        className="sticky-elem main-message main-message-a"
        ref={(el) => (ref.current[0] = el)}
      >
        <p>
          ACTUALLY, I'M A WEBSITE
          <br />I WAS BUILT BY HYEJIN HWANG
        </p>
      </div>
      <div
        className="sticky-elem main-message main-message-b"
        ref={(el) => (ref.current[1] = el)}
      >
        <p>HyeJin Hwang</p>
      </div>
      <div
        className="sticky-elem main-message main-message-c"
        ref={(el) => (ref.current[2] = el)}
      >
        <p>
          FRONTEND
          <br />
          DEVELOPER
        </p>
      </div>
      <div
        className="sticky-elem main-message main-message-d"
        ref={(el) => (ref.current[3] = el)}
      >
        <p>WEB DEVELOPER</p>
      </div>
    </>
  );
};

export default forwardRef(TextScroll);
