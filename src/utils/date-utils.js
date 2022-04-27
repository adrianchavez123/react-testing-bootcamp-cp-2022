export const getMonthNumber = (month: number): string => {
	return (month + 1).toString().padStart(2, '0');
};
