export const sort = ({ data, value }) => {
	const copy = [...data];
	const sortedDevices = copy.sort(function (a, b) {
		if (value === 'hdd_capacity') {
			return parseInt(a[value]) < parseInt(b[value]) ? -1 : 1;
		}
		return a[value].toLowerCase() < b[value].toLowerCase() ? -1 : 1;
	});
	return sortedDevices;
};
