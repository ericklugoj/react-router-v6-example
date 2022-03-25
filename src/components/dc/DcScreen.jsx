import React from "react";
import HeroList from "../hero/HeroList";

const DcScreen = () => {
  return (
    <div>
      <h1>DC</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  );
};

export default DcScreen;
