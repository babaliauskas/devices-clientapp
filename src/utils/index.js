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

export const filters = ({ data, filterValues }) => {
	if (!filterValues.length) return data;
	const filteredDevices = data.filter((device) =>
		filterValues.includes(device.type)
	);
	return filteredDevices;
};

export const filteredAndSorted = ({ data, sortValue, filterValues }) => {
	const filteredData = filters({ data, filterValues });
	const sortedAndFiltered = sort({ data: filteredData, value: sortValue });
	return sortedAndFiltered;
};
