import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
      <div>
        <h1 className="font-bold uppercase tracking-wide text-2xl mb-3">
          Tax Invoice
        </h1>
      </div>
    </header>
  );
};

export default Header;
