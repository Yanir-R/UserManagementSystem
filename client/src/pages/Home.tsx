import { DataTable } from "../components/DataTable";
import { observer } from "mobx-react-lite";
import { Search } from "../components/Search";

export const Home: React.FC = observer(() => {
  return (
    <>
      <Search />
      <DataTable />
    </>
  );
});
