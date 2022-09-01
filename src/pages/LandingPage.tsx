import { Item1 } from "../components/Item1";
import { Item2 } from "../components/Item2";
import { BannerRapping } from "../layouts/BannerRapping";

export const LandingPage = () => {
  return (
    <BannerRapping>
      <Item1 />
      <Item2 />
      <Item1 />
      <Item2 />
    </BannerRapping>
  );
};
