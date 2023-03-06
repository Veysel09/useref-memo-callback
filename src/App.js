import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Card from "./components/Card";
import ClearButton from "./components/ClearButton";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";
import UseRefComp from "./components/UseRefComp";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  // const taxData = {"tax": 0.18, "ship": 15}
  const taxData = useRef({ tax: 0.18, ship: 15 });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  // const filteredData = data?.filter(item =>item.name.toLowerCase().includes(search.toLowerCase()))

  const filteredData = useMemo(() => {
    return data?.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  const handleSearch = () => {
    setSearch(text);
  };

  // const handleClear = () =>{
  //   setText("")
  //   setSearch("")
  // }

  const handleClear = useCallback(() => {
    setText("");
    setSearch("");
  }, []);

  return (
    <div className="container mt-2">
      <div>
        <Header count={count} />
        <hr />
        <HeaderMemo count={count < 5 ? 0 : count} />
      </div>
      <hr />
      <TaxComp taxData={taxData} />
      <div>
        <p>{count}</p>
        <button className="btn btn-danger" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="row">
        <Card data={filteredData} />
      </div>
      <hr />
      <ClearButton handleClear={handleClear} />
      <br />
      <br />
      <hr />
      <h1>UseRef</h1>
      <UseRefComp />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
