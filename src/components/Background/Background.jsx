import PropTypes from "prop-types";

import {
  Backdrop,
  Ellipse1,
  Ellipse2,
  Ellipse3,
} from "./Background.styled";

const BackgroundLayout = ({ children }) => {
  return (
    <Backdrop>
     <Ellipse1 />
      <Ellipse2 />
      <Ellipse3 />
      {children}
    </Backdrop>
  );
};

BackgroundLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundLayout;