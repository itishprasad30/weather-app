import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <main className="mx-auto h-full">{children}</main>
    </div>
  );
};

export default Layout;
