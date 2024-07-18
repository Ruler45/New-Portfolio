// import Link from "next/link";
// import Navbar from "./components/Navbar/Navbar";

import About from "./components/About/About";
import Hero from "./components/home/Hero/Hero";
// import Macbook from "./components/Macbook/Macbook";

export const metadata = {
  title: "Sahin Alam | Home",
  description:
    "This is the home page of Sahin Alam's portfolio website. Sahin is a full-stack web developer based in West Bengal,India. He loves to work with JavaScript, React, Node.js, and MongoDB.",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      {/* <div
        style={{
          height: "100vh",
        }}
      ></div> */}
    </div>
  );
}
