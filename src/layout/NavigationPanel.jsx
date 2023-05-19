import SearchPanel from "./SearchPanel";
import { ListItem } from "../component/ListItem";
import Logo from "../component/Logo";
import { FaCartPlus } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

export default function NavigationPanel() {
  return (
    <div className="flex justify-around items-center p-12">
      {/* Logo */}
      <Logo child="feb" sliceChild="io-" />
      {/* Nav */}
      <nav className="w-[30%]">
        <ListItem
          children={["Home", "Features", "Insights", "About", "Blogs"]}
          gap={16}
        />
      </nav>
      {/* Search Panel */}
      <SearchPanel />
      {/* Chart */}
      <div id="chart" className="flex gap-10">
        <AiOutlineHeart />
        <FaCartPlus />
      </div>
    </div>
  );
}
