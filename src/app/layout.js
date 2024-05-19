import Navbar from "./components/Navbar/Navbar";
import "./globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="This is the home page of Sahin Alam's portfolio website. Sahin is a full-stack web developer based in West Bengal,India. He loves to work with JavaScript, React, Node.js, and MongoDB."
        />
        <meta property="og:title" content="Sahin Alam" />
        <meta
          property="og:description"
          content="This is the home page of Sahin Alam's portfolio website. Sahin is a full-stack web developer based in West Bengal,India. He loves to work with JavaScript, React, Node.js, and MongoDB."
        />
        <meta
          name="keywords"
          content="Sahin,Sahin Alam,Alam,NIT,nits,NIT Silchar,Silchar,Murshidabad,Bengal,India,Assam,Web Developer,Mechanical,DevOps,Cloud"
        />
        <title>Sahin Alam</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
