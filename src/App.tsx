import React from "react";
import { Banner } from "./components/Banner";
import { BannerRapping } from "./components/BannerRapping";

const App = () => {
  return (
    <BannerRapping>
      <Banner title="1" />
      <Banner title="2" bgColor="red" />
      <Banner title="3" bgColor="green" />
      <Banner title="4" bgColor="skyblue" />
    </BannerRapping>
  );
};

export default App;
