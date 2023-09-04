import {
  Title,
  Wrapper,
  UL,
  Li,
  P1,
  P2,
  DIV1,
  DIV2,
  DIV3,
  IMG, 
} from './RecipePreparation.styled';
import PropTypes from "prop-types";

const RecipePreparation = ({ ingridients: { description, instructions, drinkThumb, drink } }) => {
  const sentences = instructions.split(/(?<=[.!?])\s+/).filter(Boolean);

  return (
    <Wrapper>
      <Title>Recipe Preparation</Title>
      <DIV1>
        <DIV2>
          <P1>{description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium debitis optio deserunt dignissimos commodi nisi expedita itaque dolor provident. Atque labore, corrupti totamaccusantium omnis alias vero. Itaque eos ullam aut rerum quam. Nontemporibus vel dolore similique, suscipit amet."} </P1>
          <UL>
            {sentences.map((sentence, index) => (
               <Li key={index}>
                <P2>{sentence.trim()}</P2>
                </Li>
              ))}
          </UL>
        </DIV2>
        <DIV3>
          <IMG src={drinkThumb  || '/plug-m.png'} alt={drink} />
        </DIV3>
      </DIV1>
    </Wrapper>
  );
};

RecipePreparation.propTypes = {
  ingridients: PropTypes.object,
  drink: PropTypes.string,
  drinkThumb: PropTypes.string,
  description: PropTypes.string,
  instructions:  PropTypes.string,
}

export default RecipePreparation;
