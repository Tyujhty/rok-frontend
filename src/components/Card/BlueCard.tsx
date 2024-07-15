import React from "react";

interface BlueCardProps {
  children: React.ReactNode;
}

export default function BlueCard(BlueCardProps: BlueCardProps) {
  const { children } = BlueCardProps;
  return (
    <>
      <div className="bg-light-30 w-[650px] p-8 rounded-sm">{children}</div>
    </>
  );
}
