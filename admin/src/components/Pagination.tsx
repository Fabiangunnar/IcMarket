import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<>
			<div className="pagination">
				<button className="btn">Prev</button>
				<ul>
					{pageNumbers.map((number) => (
						<li key={number} className="btn" onClick={() => paginate(number)}>
							{number}
						</li>
					))}
				</ul>
				<button className="btn">Next</button>
			</div>
		</>
	);
};

export default Pagination;
