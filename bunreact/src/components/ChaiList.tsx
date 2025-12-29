import type { Chai } from "../types/types";
import { ChaiCard } from "./ChaiCard";
interface ChaiListProps {
  items: Chai[];
}
export function ChaiList({ items }: ChaiListProps) {
  return (
    <>
      <div>
        {items.map((item) => (
          <ChaiCard
            key={item._id}
            name={`${item.name}`}
            price={item.price}
            isSpecial
          />
        ))}
      </div>
    </>
  );
}
