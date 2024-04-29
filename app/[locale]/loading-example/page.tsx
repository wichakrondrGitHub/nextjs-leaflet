import React from "react";
import Trending from "./_components/Trending";
import TrendingSuccess from "./_components/TrendingSuccess";

const page = () => {
  return (
    <div>
      <h3>List of trending Movies & TV</h3>
      <TrendingSuccess />

      <Trending />
    </div>
  );
};

export default page;
