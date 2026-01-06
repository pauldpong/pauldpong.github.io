import React from "react";

export default function Scaffold({ children }) {
  return (
    <div className="h-screen w-full md:w-3/4 xl:w-1/2 mx-auto p-5 md:p-15 xl:p-20">
      {children}
    </div>
  );
}
