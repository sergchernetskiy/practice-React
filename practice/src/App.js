import React from "react";
import Counter from "./components/Counter/Counter";
import DropdownOne from "./components/Dropdown/Dropdown";

function App() {
  return (
    <>
      <h1>Practice</h1>
      <Counter initialValue={0} />
      <DropdownOne />
    </>
  );
}

export default App;
