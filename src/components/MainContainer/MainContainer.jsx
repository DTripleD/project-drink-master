import { Main } from "./MainContainer.styled";
import PropTypes from "prop-types";

export const MainContainer = (props) => {
  const { children } = props;
  return <Main>{children}</Main>;
};

MainContainer.propTypes = {
  children: PropTypes.node,
};
