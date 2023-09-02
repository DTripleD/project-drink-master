import { CircularProgress } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { LoaderWrapper } from "./Loader.styled";
const theme = createTheme();

const Loader = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoaderWrapper>
        <CircularProgress size={100} />
      </LoaderWrapper>
    </ThemeProvider>
  );
};

export default Loader;
