// pages/thank-you.js
"use client";

import React, { useEffect, useState } from "react";
import Confetti from "confetti-react";

const ThankYou = () => {
  const [windowScreen, setWindowScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowScreen({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowScreen]);

  return (
    <>
      <Confetti width={windowScreen.width} height={windowScreen.height} />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Thank You for Your Purchase!</h1>
        <p className="mt-4 text-lg">
          Your order has been received and you will soon recieve a confirmation
          call.
        </p>
      </div>
    </>
  );
};

export default ThankYou;
