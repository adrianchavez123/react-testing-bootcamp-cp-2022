export const getMonthNumber = (month) => {
	return (month + 1).toString().padStart(2, '0');
};

export const isValidDateFormat = (date) => {
	const [year, month, day] = getDateFragments(date);
	if (isNaN(year) || isNaN(month) || isNaN(day)) {
		throw 'invalid date';
	}
	return true;
};

export const getDateFragments = (date) => {
	const [year, month, day] = date.split('-');
	return [year, month, day];
};
