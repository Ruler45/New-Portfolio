"use client";

// eslint-disable-next-line import/no-extraneous-dependencies
import { Player } from "@lottiefiles/react-lottie-player";

const loading = () => {
  return (
    <div className="loader">
      <Player
        autoplay
        loop
        src="/lottie/loader.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
};

export default loading;
