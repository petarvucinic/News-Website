import { Select } from "@mantine/core";
const data = [
  { value: "popularity", label: "Popularity" },
  { value: "relevance", label: "Relevance" },
  { value: "publishedAt", label: "Published date" },
];

function Sortby({ setSortby, sortby }) {
  const handleSort = (e) => {
    setSortby(e);
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
