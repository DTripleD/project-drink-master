import PropTypes from "prop-types";
import { PaginationWrapper } from "./Pagination.styled";
import { Container, Pagination, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
const theme = createTheme();

const PaginationComponent = ({ totalPages, page, changeNum }) => {
  return (
    <ThemeProvider theme={theme}>
      <PaginationWrapper>
        <Container>
          <Stack spacing={5}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={changeNum}
              siblingCount={1}
              sx={{ marginY: 3, marginX: "auto" }}
            />
          </Stack>
        </Container>
      </PaginationWrapper>
    </ThemeProvider>
  );
};

PaginationComponent.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  changeNum: PropTypes.func.isRequired,
};

export default PaginationComponent;
