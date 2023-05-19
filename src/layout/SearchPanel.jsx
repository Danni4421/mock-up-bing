import { FormLabel } from "../component/FormLabel";
import { TextInput } from "../component/TextInput";

export default function SearchPanel() {
  return (
    <div id="search-panel">
      <form action="#" className="flex gap-5 items-center">
        <FormLabel child="Search" htmlFor="Search" />
        <TextInput />
      </form>
    </div>
  );
}
