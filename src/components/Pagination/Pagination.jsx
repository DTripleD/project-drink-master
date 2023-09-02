import React from "react";
import PropTypes from "prop-types";
import { PaginationWrapper } from "./Pagination.styled";
import { Container, Stack } from "@mui/material";

const Pagination = ({ totalPages, page, changeNum }) => {
	return (
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
	);
};

Pagination.propTypes = {
	// totalPages: PropTypes.number.isRequired,
	// page: PropTypes.number.isRequired,
	// changeNum: PropTypes.func.isRequired,
};

export default Pagination;
