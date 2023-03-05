import React, { memo } from "react";

const HeaderMemo = ({ count }) => {
  console.log("render => HeaderMemo Components");
  return (
    <div className="bg-danger text-center">HeaderMemo Componenti: {count}</div>
  );
};

export default memo(HeaderMemo);
