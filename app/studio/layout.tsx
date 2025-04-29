import React from "react";
import "../globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en">
        <meta name="apple-mobile-web-app-title" content="Serapore" />
        <body className={`antialiased m-0 p-0`}>{children}</body>
      </html>
    </>
  );
};

export default Layout;
