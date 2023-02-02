import React from "react";
import { VectorMap, clearSelectedMarkers } from "react-jvectormap";
const mapData = {
	CN: 100000,
	IN: 9900,
	SA: 86,
	EG: 70,
	PS: 100000,
	SE: 0,
	FI: 0,
	FR: 0,
	US: 20,
};

const handleClick = (e, countryCode) => {
	console.log(countryCode);
};

const Map = () => {
	return (
		<div className="worldmap">
			<VectorMap
				map={"world_mill"}
				backgroundColor="#0077be" //change it to ocean blue: #0077be
				zoomOnScroll={false}
				containerStyle={{
					width: "100%",
					height: "520px",
				}}
				onRegionClick={handleClick} //gets the country code
				containerClassName="map"
				regionStyle={{
					initial: {
						fill: "#e4e4e4",
						"fill-opacity": 0.9,
						stroke: "none",
						"stroke-width": 0,
						"stroke-opacity": 0,
					},
					hover: {
						"fill-opacity": 0.8,
						cursor: "pointer",
					},
					selected: {
						fill: "#2938bc", //color for the clicked country
					},
					selectedHover: {},
				}}
				regionsSelectable={true}
				series={{
					regions: [
						{
							values: mapData, //this is your data
							scale: ["#146804", "#ff0000"], //your color game's here
							normalizeFunction: "polynomial",
						},
					],
				}}
			/>
		</div>
	);
};
export default Map;
