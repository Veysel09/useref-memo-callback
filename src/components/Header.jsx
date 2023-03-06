import React, { memo } from "react";

const Header = memo(({ count }) => {
  return (
    <div className="bg-warning text-center">Header Componenti: {count}</div>
  );
});

export default Header;
