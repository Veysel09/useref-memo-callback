import React, {memo} from "react";

const ClearButton = memo(({ handleClear }) => {
  console.log("Render => ClearButton Componenti");
  return (
    <div>
      <button className="btn btn-warning" onClick={handleClear} >ClearButton</button>
    </div>
  );
});

export default ClearButton;
