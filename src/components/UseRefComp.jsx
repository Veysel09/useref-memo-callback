import React, { useEffect, useRef, useState } from "react";

const UseRefComp = () => {
  const divRef = useRef();
  const inputRef = useRef();
  const [headerText, setHeaderText] = useState("useref");
  const handleRef = () => {
    console.log(divRef.current);
    console.log(divRef.current.firstElementChild.innerText);
    console.log(inputRef.current);
    console.log(inputRef.current.value);
    setHeaderText(inputRef.current.value);
    inputRef.current.value = "";
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h5>{headerText}</h5>
      <div ref={divRef}>
        <p>First Element Child</p>
        <input type="text" ref={inputRef} />
        <p>last Element Child</p>
      </div>
      <button onClick={handleRef}>useRef Click</button>
    </div>
  );
};

export default UseRefComp;
