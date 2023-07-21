import React from "react";
import Search from "./search";
import Stories from "./stories";
import Pagination from "./pagination";
import "./App.css"
const App = () => {
  // const data=useGlobalContext();
  return (
    <>
      <div>Welcome to SARANSH'S technical NEWS Website</div>
      <Search/>
      <Pagination/>
      <Stories/>

    </>
  );
};

export default App;
