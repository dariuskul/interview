import { FC } from "react";
import { IList } from "~/types/item";
import ItemIcon from "./components/ItemIcon";
import "./list-style.scss";
import UpdateModal from "../UpdateModal/UpdateModal";

const List: FC<IList> = ({ items, update }) => (
  <ul className="list">
    {items.map((item) => (
      <li key={item.id} className="item">
        <ItemIcon name={item.name} />
        <div>
          <div className="title">{item.name}</div>
          <div className="description">{item.email}</div>
        </div>
        <UpdateModal item={item} update={update} />
      </li>
    ))}
  </ul>
);

export default List;
