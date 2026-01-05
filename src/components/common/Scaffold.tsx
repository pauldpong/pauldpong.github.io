import React from "react";

interface ScaffoldProps extends React.PropsWithChildren {}

export default function Scaffold({ children }: ScaffoldProps) {
  return (
    <div className="h-screen w-full md:w-3/4 xl:w-1/2 mx-auto p-5 md:p-15 xl:p-20">
      {children}
    </div>
  );
}
