import { useEffect, useState } from "react";
import "./App.css";
import CardPeople from "./components/Card";
import SearchBar from "./components/Search";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState(JSONDATA);
  const findData = (name) => {
    const lowerName = name.toLocaleLowerCase();
    setData(
      JSONDATA.filter(
        (item) =>
          item.first_name.toLocaleLowerCase().includes(lowerName) ||
          item.last_name.toLocaleLowerCase().includes(lowerName) ||
          item.first_name
            .toLocaleLowerCase()
            .concat(" ")
            .concat(item.last_name.toLocaleLowerCase())
            .includes(lowerName)
      )
    );
  };

  const handleSetName = (name) => {
    setName(name);
  };

  useEffect(() => {
    findData(name);
  }, [name]);

  return (
    <div class="h-screen bg-white">
      <div class="flex bg-gray-100 w-full pt-52 items-center justify-center">
        <SearchBar handleSetName={handleSetName} />
      </div>
      <p class="flex text-2xl border-l-8 border-cyan-500 font-bold text-cyan-500 ml-12 md:ml-32 pl-3 px-2 mt-32">
        People
      </p>
      <div class="px-12 md:px-36 mt-2 text-gray-700 text-md">
        search results "{data.length}" Items
      </div>
      <div class="2xl:px-72 xl:px-20 md:px-16">
        <div class="mx-auto grid xl:grid-cols-4 md:grid-cols-2 gap-y-16 md:gap-x-8 xl:gap-x-1 mx-auto py-16 ">
          {data.map((item) => (
            <CardPeople key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
