import { Select } from "@mantine/core";
import { useContext } from "react";
import { HandlingContext } from "../../App";
// useEffect

const data = [
  { value: "popularity", label: "Popularity" },
  { value: "relevance", label: "Relevance" },
  { value: "publishedAt", label: "Published date" },
];

function Sortby() {
  const { handleClickSearch, setSortby, sortby } = useContext(HandlingContext);

  const handleSort = (e) => {
    setSortby(e);
    console.log(e);
    handleClickSearch();
  };

  return (
    <Select
      value={sortby}
      onChange={(e) => handleSort(e)}
      data={data}
      placeholder="Sort by"
    />
  );
}

export default Sortby;
