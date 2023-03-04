import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="container mt-2">
      <Header />

      <HeaderMemo />
    </div>
  );
};

export default App;
