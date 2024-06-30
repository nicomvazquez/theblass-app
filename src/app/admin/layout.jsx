import React from "react";
import Navbar from "@/components/AdminNavbar";

function layoutAdmin({ children }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

export default layoutAdmin;
