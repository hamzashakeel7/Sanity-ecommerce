// pages/thank-you.js
"use client";

import React, { useEffect, useState } from "react";
import Confetti from "confetti-react";

const ThankYou = () => {
  const [windowScreen, setWindowScreen] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const detectSize = () => {
    setWindowScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", detectSize);
      // Set initial size
      detectSize();
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", detectSize);
      }
    };
  }, []);

  return (
    <>
      <Confetti width={windowScreen.width} height={windowScreen.height} />
      <div className="flex flex-col items-center justify-center h-screen p-5">
        <h1 className="text-3xl font-bold text-center">
          Thank You for Your Purchase!
        </h1>
        <p className="mt-4 text-lg text-center">
          Your order has been received and you will soon receive a confirmation
          call.
        </p>
      </div>
    </>
  );
};

export default ThankYou;
