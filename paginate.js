function paginate({ data, perPage, currentPage, response }) {
	const totalPage = Math.ceil(data.length / perPage);

	const newData = data.slice(
		(currentPage - 1) * perPage,
		currentPage * perPage,
	);

	response(newData, totalPage);
}

define(() => paginate);
