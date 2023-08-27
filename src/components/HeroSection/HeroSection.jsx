// import { useSelector } from "react-redux";

import { useNavigate } from "react-router";
import { AddButton } from "../Button/AddButton/AddButton";
import { Container } from "../Container/Container";
// import MainTitle from "../MainPageTitle/MainPageTitle.styled";
import MainPageTitle from "../MainPageTitle/MainPageTitle";

import { Hero, Herodescription, Herowrapper } from "./Hero.styled";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Hero>
      <Container>
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
              navigate("/main/add");
            }}
          />
        </Herowrapper>
      </Container>
    </Hero>
  );
};

// export default HeroSection;
