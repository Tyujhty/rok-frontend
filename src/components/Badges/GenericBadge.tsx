interface GenericBadgeProps {
  itemName: string | number;
}

export default function GenericBadge(genericBadgeProps: GenericBadgeProps) {
  const { itemName } = genericBadgeProps;
  return (
    <>
      <div
        className={`h-[25px] my-2 p-4 bg-light-badge text-light-30 rounded-md flex justify-center items-center font-semibold`}
      >
        {itemName}
      </div>
    </>
  );
}
