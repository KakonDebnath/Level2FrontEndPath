import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full max-w-7xl mx-auto bg-purple-500">
      {children}
    </div>
  );
};

export default Container;
