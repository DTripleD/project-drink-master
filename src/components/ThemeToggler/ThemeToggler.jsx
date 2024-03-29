import { useDispatch, useSelector } from "react-redux";

import { selectTheme } from "../../redux/theme/selectors";
import { toggleTheme } from "../../redux/theme/themeSlice";
import {
  Slider,
  SwitchInput,
  SwitchLabel,
  SliderBefore,
} from "./ThemeToggler.styled";

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const isChecked = theme === "dark" ? false : true;

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <SwitchLabel className="switch">
      <SwitchInput
        type="checkbox"
        checked={isChecked}
        onChange={handleToggleTheme}
      />
      <Slider className={`slider ${isChecked ? "active" : ""}`}>
        <SliderBefore className={`slider ${isChecked ? "active" : ""}`} />
      </Slider>
    </SwitchLabel>
  );
};

export default ThemeToggler;
