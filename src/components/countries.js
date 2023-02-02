const countries = [
	{
		name: "Algeria",
		x: 36.75040074,
		y: 3.051347681,
		status: false,
		borders: ["Morocco", "Mali", "Mauritania", "Libya", "Tunisia"],
	},
	{
		name: "Tunisia",
		x: 36.8817748,
		y: 10.1094734,
		status: false,
		borders: ["Algeria", "Libya"],
	},
	{
		name: "Morocco",
		x: 33.96981962263166,
		y: -6.853033827572638,
		status: false,
		borders: ["Algeria", "Mauritania", "Spain"],
	},
	{
		name: "Libya",
		x: 32.90770360416462,
		y: 13.135929542646073,
		status: false,
		borders: ["Algeria", "Egypt", "Tunisia", "Sudan"],
	},
	{
		name: "Egypt",
		x: 31.19637233564303,
		y: 29.991198051806293,
		status: false,
		borders: ["Libya", "Sudan", "Palestine", "Saudi Arabia"],
	},
	{
		name: "Mauritania",
		x: 18.142011733558125,
		y: -15.969151863544438,
		status: false,
		borders: ["Algeria", "Senegal", "Mali", "Morocco"],
	},
	{
		name: "Mali",
		x: 12.680413891841495,
		y: -8.033919692635976,
		status: false,
		borders: [
			"Algeria",
			"Niger",
			"Burkina Faso",
			"Ivory Coast",
			"Guinea",
			"Senegal",
		],
	},
	{
		name: "Senegal",
		x: 14.785361248063301,
		y: -17.49263801083692,
		status: false,
		borders: ["Mali", "Mauritania", "Guinea", "Guinea-Bissau", "The Gambia"],
	},
	{
		name: "Niger",
		x: 13.632984071498866,
		y: 2.1363254421119393,
		status: false,
		borders: [
			"Algeria",
			"Libya",
			"Benin",
			"Mali",
			"Nigeria",
			"Burkina Faso",
			"Chad",
		],
	},
	{
		name: "Nigeria",
		x: 9.0484956564,
		y: 7.36875905,
		status: false,
		borders: ["Niger", "Cameroon", "Benin", "Chad"],
	},
	{
		name: "Chad",
		x: 12.11747589126885,
		y: 15.06329152467063,
		status: false,
		borders: [
			"Central African Republic",
			"Libya",
			"Niger",
			"Nigeria",
			"Sudan",
			"Cameroon",
		],
	},
	{
		name: "Ghana",
		x: 5.6495419816580466,
		y: -0.19021833115370493,
		status: false,
		borders: ["Ivory Coast", "Burkina Faso", "Togo"],
	},
	{
		name: "Benin",
		x: 6.4933637654770395,
		y: 2.6187378212503276,
		status: false,
		borders: ["Niger", "Burkina Faso", "Nigeria", "Togo"],
	},
	{
		name: "Togo",
		x: 6.125994332398027,
		y: 1.228718994114881,
		status: false,
		borders: ["Benin", "Burkina Faso", "Ghana"],
	},
	{
		name: "Ivory Coast",
		x: 6.7961091639312015,
		y: -5.278845568280775,
		status: false,
		borders: ["Mali", "Burkina Faso", "Ghana", "Liberia", "Guinea"],
	},
	{
		name: "Liberia",
		x: 6.329772902016315,
		y: -10.801598601012456,
		status: false,
		borders: ["Ivory Coast", "Sierra Leone", "Guinea"],
	},
	{
		name: "Guinea",
		x: 9.694329790923636,
		y: -13.594966780756746,
		status: false,
		borders: [
			"Ivory Coast",
			"Sierra Leone",
			"Guinea-Bissau",
			"Liberia",
			"Senegal",
			"Mali",
		],
	},
	{
		name: "Guinea-Bissau",
		x: 11.895325584582615,
		y: -15.598193079352786,
		status: false,
		borders: ["Guinea", "Senegal"],
	},
	{
		name: "Burkina Faso",
		x: 11.23365173584724,
		y: -4.329279675400337,
		status: false,
		borders: ["Mali", "Benin", "Niger", "Ivory Coast", "Ghana", "Togo"],
	},
	{
		name: "Sierra Leone",
		x: 8.472713639745798,
		y: -13.225108928848258,
		status: false,
		borders: ["Guinea", "Liberia"],
	},
	{
		name: "The Gambia",
		x: 13.458095384827285,
		y: -16.61165560339409,
		status: false,
		borders: ["Senegal"],
	},
	{
		name: "Cameroon",
		x: 3.8799231685876943,
		y: 11.503548893730594,
		status: false,
		borders: ["Nigeria", "Central African Republic", "Niger", "Gabon", "Congo"],
	},
	{
		name: "Gabon",
		x: 0.37133032418365336,
		y: 9.46322941736479,
		status: false,
		borders: ["Cameroon", "Congo"],
	},
	{
		name: "Central African Republic",
		x: 4.439244431558248,
		y: 18.53230490194163,
		status: false,
		borders: ["Cameroon", "Congo", "DRC", "Chad", "Sudan", "South Sudan"],
	},
	{
		name: "DRC",
		x: -4.463105482698742,
		y: 15.257359935632795,
		status: false,
		borders: ["Central African Republic", "Congo", "Uganda", "South Sudan"],
	},
	{
		name: "Congo",
		x: -4.249681476004181,
		y: 15.242058358819412,
		status: false,
		borders: ["Central African Republic", "Cameroon", "Gabon", "DRC"],
	},
	{
		name: "Sudan",
		x: 15.470801275,
		y: 32.5142477293,
		status: false,
		borders: [
			"Central African Republic",
			"Chad",
			"Egypt",
			"Eritrea",
			"Ethiopia",
			"South Sudan",
		],
	},
	{
		name: "South Sudan",
		x: 4.868094168894333,
		y: 31.57816362306731,
		status: false,
		borders: ["Central African Republic", "DRC", "Ethiopia", "Sudan", "Uganda"],
	},
	{
		name: "Ethiopia",
		x: 8.962792650097208,
		y: 38.753457080287106,
		status: false,
		borders: ["Sudan", "Eritrea", "Somalia", "South Sudan", "Kenya"],
	},
	{
		name: "Eritrea",
		x: 15.337947893469371,
		y: 38.91258579475076,
		status: false,
		borders: ["Sudan", "Ethiopia", "Yemen"],
	},
	{
		name: "Somalia",
		x: 2.0480539773908895,
		y: 45.31714910197031,
		status: false,
		borders: ["Kenya", "Ethiopia"],
	},
	{
		name: "Kenya",
		x: -1.286590581790903,
		y: 36.81556764734695,
		status: false,
		borders: ["Uganda", "Ethiopia", "Somalia"],
	},
	{
		name: "Uganda",
		x: 0.3549497154272707,
		y: 32.58568260649717,
		status: false,
		borders: ["Kenya", "South Sudan", "DRC"],
	},
	{
		name: "Yemen",
		x: 15.502495081438976,
		y: 44.22073073879201,
		status: false,
		borders: ["Eritrea", "Saudi Arabia", "Oman"],
	},
	{
		name: "Saudi Arabia",
		x: 24.709645481058168,
		y: 46.67537671856287,
		status: false,
		borders: [
			"Yemen",
			"Jordan",
			"Oman",
			"Egypt",
			"Iraq",
			"Qatar",
			"United Arab Emirates",
		],
	},
	{
		name: "Palestine",
		x: 31.769802588130805,
		y: 35.212588020384274,
		status: false,
		borders: ["Syria", "Jordan", "Egypt"],
	},
	{
		name: "Jordan",
		x: 31.951294232628594,
		y: 35.91355114686676,
		status: false,
		borders: ["Syria", "Palestine", "Iraq", "Saudi Arabia"],
	},
	{
		name: "Syria",
		x: 33.52465168988627,
		y: 36.27527374501882,
		status: false,
		borders: ["Turkey", "Palestine", "Iraq"],
	},
	{
		name: "Turkey",
		x: 39.932802656485286,
		y: 32.86058506361365,
		status: false,
		borders: ["Syria", "Iraq", "Greece", "Cyprus", "Iran"],
	},

	{
		name: "Iraq",
		x: 33.32234653725322,
		y: 44.361201089463194,
		status: false,
		borders: ["Syria", "Jordan", "Iran", "Saudi Arabia"],
	},
	{
		name: "Cyprus",
		x: 35.17570018201523,
		y: 33.38109416974202,
		status: false,
		borders: ["Turkey", "Greece"],
	},
	{
		name: "Greece",
		x: 38.004358719095784,
		y: 23.71257241923758,
		status: false,
		borders: ["Turkey", "Cyprus"],
	},
	{
		name: "Iran",
		x: 35.70113985407315,
		y: 51.35249302824431,
		status: false,
		borders: ["Iraq", "Turkey", "Afghanistan"],
	},
	{
		name: "Oman",
		x: 23.589970093727466,
		y: 58.386353313238246,
		status: false,
		borders: ["United Arab Emirates", "Yemen"],
	},
	{
		name: "United Arab Emirates",
		x: 24.464282567992672,
		y: 54.36257873000253,
		status: false,
		borders: ["Saudi Arabia", "Oman", "Qatar"],
	},
	{
		name: "Qatar",
		x: 25.305098640737505,
		y: 51.52398657246494,
		status: false,
		borders: ["Saudi Arabia", "United Arab Emirates"],
	},
	{
		name: "Afghanistan",
		x: 34.56174977088519,
		y: 69.19648857030421,
		status: false,
		borders: ["Iran"],
	},
	{
		name: "Italy",
		x: 41.90995850397685,
		y: 12.488949071135396,
		status: false,
		borders: ["France"],
	},
	{
		name: "Spain",
		x: 40.421676536862485,
		y: -3.7082174079259143,
		status: false,
		borders: ["Morocco", "Portugal", "France"],
	},
	{
		name: "France",
		x: 48.864452396707954,
		y: 2.337962675487017,
		status: false,
		borders: ["Italy", "Spain", "United Kingdom"],
	},
	{
		name: "Portugal",
		x: 38.7205078306572,
		y: -9.145603699585857,
		status: false,
		borders: ["Spain"],
	},
	{
		name: "United Kingdom",
		x: 52.753975397397329,
		y: -0.12289162344714318,
		status: false,
		borders: ["France"],
	},
];

function getCountry(countryName) {
	let country = {};
	for (let i = 0; i < countries.length; i++) {
		if (countryName === countries[i].name) {
			country = countries[i];
		}
	}
	return country;
}

export function getGraph() {
	// console.log(countries);
	var graph = {};

	for (let i = 0; i < countries.length; i++) {
		let borders = countries[i].borders.length;
		let name = countries[i].name;
		let lat = countries[i].x;
		let lon = countries[i].y;
		let arr = countries[i].borders;
		var distances = {};

		for (let j = 0; j < borders; j++) {
			let borderName = arr[j];
			let country = getCountry(borderName);

			distances[borderName] = Math.round(
				distance(lon, country.y, lat, country.x)
			);
		}
		// console.log(distances);
		graph[name] = distances;
	}
	return graph;
}

function distance(lat1, lat2, lon1, lon2) {
	// The math module contains a function
	// named toRadians which converts from
	// degrees to radians.
	lon1 = (lon1 * Math.PI) / 180;
	lon2 = (lon2 * Math.PI) / 180;
	lat1 = (lat1 * Math.PI) / 180;
	lat2 = (lat2 * Math.PI) / 180;

	// Haversine formula
	let dlon = lon2 - lon1;
	let dlat = lat2 - lat1;
	let a =
		Math.pow(Math.sin(dlat / 2), 2) +
		Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

	let c = 2 * Math.asin(Math.sqrt(a));

	// Radius of earth in kilometers. Use 3956
	// for miles
	let r = 6371;

	// calculate the result
	return c * r;
}

export default countries;
