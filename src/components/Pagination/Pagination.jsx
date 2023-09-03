import React from "react";
import PropTypes from "prop-types";
import { PaginationWrapper } from "./Pagination.styled";
import { Container, Pagination, Stack } from "@mui/material";

const PaginationComponent = ({ totalPages, page, changeNum }) => {
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

PaginationComponent.propTypes = {
	totalPages: PropTypes.number.isRequired,
	page: PropTypes.number.isRequired,
	changeNum: PropTypes.func.isRequired,
};

export default PaginationComponent;
