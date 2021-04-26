import { FC } from 'react';
import { Routes } from "~/constants";
import { IItem } from "~/types/item";
import FilterTab from "./components/FilterTab"
import './filter-style.scss';

interface IFilter {
  items: Array<Array<IItem>>;
}

const Filter: FC<IFilter> = ({items}) => {
  return (
    <div className="filter">
      <FilterTab title="all" count={items[0].length} path={Routes.Users}/>
      <FilterTab title="Wrong" count={items[3].length} path={Routes.Weak}/>
      <FilterTab title="Reused" count={items[2].length} path={Routes.Reused}/>
      <FilterTab title="Old" count={items[1].length} path={Routes.Old}/>
    </div>
  );
};

export default Filter;
