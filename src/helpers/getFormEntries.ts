const getFormEntries = (htmlForm: HTMLFormElement) => {
	/**
	 * Create a new FormData using the html form.
	 * @type {FormData}
	 */
	const newForm = new FormData(htmlForm);

	/**
	 * Return the FormData's entries as an object.
	 * @type {Object}
	 */
	return Object.fromEntries(newForm);
};

export default getFormEntries;
