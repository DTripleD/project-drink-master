import { useNavigate } from "react-router";
import { AddButton } from "../Button/AddButton/AddButton";

import MainPageTitle from "../MainPageTitle/MainPageTitle";

import { Hero, Herodescription, Herowrapper } from "./Hero.styled";
import { MainContainer } from "../MainContainer/MainContainer";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <Hero>
        <Herowrapper>
          <MainPageTitle title="Craft Your Perfect Drink with Drink Master"></MainPageTitle>
          <Herodescription>
            Unlock your inner mixologist with Drink Master, your one- stop
            destination for exploring, crafting, and mastering the worlds finest
            beverages.
          </Herodescription>
          <AddButton
            text="Add Recipe"
            ariaLabel="Button to open Add Recipe Page"
            onClick={() => {
              navigate("/add");
            }}
          />
        </Herowrapper>
      </Hero>
    </MainContainer>
  );
};

// export default HeroSection;
