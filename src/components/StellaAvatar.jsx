import React from "react";

export default function StellaAvatar({ speaking, listening }) {

  let stateClass = "animate-float";

  if (speaking) {
    stateClass = "animate-talk";
  } else if (listening) {
    stateClass = "animate-listen";
  }

  return (
    <div className="flex justify-center mb-8">

      <img
        src="/stella.png"
        alt="Stella"
        className={`w-56 transition-all duration-500 ${stateClass}`}
      />

    </div>
  );
}