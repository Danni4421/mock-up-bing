import { Item } from "./Item";
export const ListItem = ({ children, gap }) => {
  console.log(children);
  return (
    <ul className={`flex justify-between gap-${gap}`}>
      {children.map((e) => {
        return <Item child={e} />;
      })}
    </ul>
  );
};
