import React from "react";

interface CardBodyProps {
  children: React.ReactNode;
}

export default function CardBody(cardBodyProps: CardBodyProps) {
  const { children } = cardBodyProps;
  return (
    <>
      <div className="w-[650px] p-8 rounded-md border-light-30 border-solid border-4 flex flex-col items-center">
        {children}
      </div>
    </>
  );
}
