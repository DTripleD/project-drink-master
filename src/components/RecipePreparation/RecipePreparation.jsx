import {Title,Wrapper,UL,Li,P1,P2,DIV1,DIV2,IMG} from './RecipePreparation.styled';

const RecipePreparation = ({ ingridients: { description,instructions, drinkThumb, drink } }) => {
  const sentences = instructions.split(/[.!?]/).filter(Boolean);

  return (
    <Wrapper>
      <Title>Recipe Preparation</Title>
      <DIV1>
        <DIV2>
      <P1>{description}|| Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Praesentium debitis optio deserunt dignissimos commodi nisi
        expedita itaque dolor provident. Atque labore, corrupti totam
        accusantium omnis alias vero. Itaque eos ullam aut rerum quam. Non
        temporibus vel dolore similique, suscipit amet.</P1>
      <UL>
      {sentences.map((sentence, index) => (
        <Li key={index}><P2>{sentence.trim()}</P2></Li>
      ))}
      </UL>
      </DIV2>
      <div>
      <IMG src={drinkThumb} alt={drink} />
      </div>
      </DIV1>
    </Wrapper>
  );
};

export default RecipePreparation;
