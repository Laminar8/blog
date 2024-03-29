export const compareDate = (a: { url: string }, b: { url: string }) => {
	const nameA = a.url.toUpperCase(); // ignore upper and lowercase
	const nameB = b.url.toUpperCase(); // ignore upper and lowercase
	if (nameA > nameB) {
		return -1;
	}
	if (nameA < nameB) {
		return 1;
	}
	// names must be equal
	return 0;
};
