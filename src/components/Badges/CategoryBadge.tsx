interface CategoryBadgeProps {
  itemName: string;
}

export default function CategoryBadge(categoryBadgeProps: CategoryBadgeProps) {
  const { itemName } = categoryBadgeProps;
  return (
    <>
      <div className="h-[25px] my-2 p-4 bg-light-30 text-light-60 rounded-md flex justify-center items-center font-semibold">
        {itemName}
      </div>
    </>
  );
}
