import React, { Component } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import img from "./images/1_OaEjVmZCTgmVeAE68VFS8w.webp";
import countries from "./countries";
import tryMe from "./dijkstra.js";
import { getGraph } from "./countries";
import { dijkstra1 } from "./dijkstra.js";
import { getGraph1, countryArr } from "./testCountries.js";
import reset from "./images/reset.png";
import car from "./images/car.png";
import random from "./images/random.png";
var ctx = null;

class Main extends Component {
	state = {
		countryArr: [],
		source: "",
		destination: "",
		countriesArr: [],
		imageHeight: 0,
		imageWidth: 0,
		handleSource: false,
		handleDest: false,
		pathSet: false,
		car: false,
		random: true,
		graph: {},
		distance: 0,
		path: [],
	};

	constructor(props) {
		super(props);
		this.canvas = React.createRef();
		this.imgRef = React.createRef();
	}

	componentDidUpdate = () => {
		const canvas = this.canvas.current;
		ctx = canvas.getContext("2d");
	};

	componentDidMount = () => {
		var graph = {};

		let countriesArr = [];

		if (this.state.random) {
			graph = getGraph1();
			countriesArr = countryArr;
		} else {
			graph = getGraph();
			countriesArr = countries;
		}

		let selectArr = [];

		for (let i = 0; i < countriesArr.length; i++) {
			selectArr.push(countriesArr[i].name);
		}

		let countriesArr1 = [];
		const imageHeight = document.getElementById("world").clientHeight;
		const imageWidth = document.getElementById("world").clientWidth;

		//mapping countries
		for (let i = 0; i < countriesArr.length; i++) {
			// let { x, y } = this.latLonToOffsets(
			// 	countriesArr[i].x,
			// 	countriesArr[i].y,
			// 	imageWidth - 2,
			// 	imageHeight - 10
			// );

			let { x, y } = this.latLonToOffsets(
				Number(countriesArr[i].x),
				Number(countriesArr[i].y),
				imageWidth - 2,
				imageHeight - 10
			);

			countriesArr1.push({
				name: countriesArr[i].name,
				x: x,
				y: y,
				status: false,
			});
		}

		this.setState({
			countriesArr: countriesArr1,
			countryArr: selectArr,
			imageWidth,
			imageHeight,
			graph,
		});
	};

	drawLine = (ctx, info, style = {}) => {
		const { x, y, x1, y1 } = info;
		const { color = "black", width = 1 } = style;

		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x1, y1);
		ctx.strokeStyle = color;
		ctx.lineWidth = width;
		ctx.stroke();
	};

	handleCompute = () => {
		let destination = this.state.destination;
		let source = this.state.source;
		let countries = this.state.countriesArr;
		for (let i = 0; i < countries.length; i++) {
			if (countries[i].name === source) {
				countries[i].status = true;
			}
			if (countries[i].name === destination) {
				countries[i].status = true;
			}
		}
		var { path, finalDistance } = dijkstra1(
			this.state.graph,
			source,
			destination
		);
		this.setPath(path);
		let pathSet = true;

		this.setState({ countries, distance: finalDistance, pathSet });
	};

	setPath = (path) => {
		let countries = this.state.countriesArr;
		let jointPath = [];
		for (let i = 0; i < path.length; i++) {
			for (let j = 0; j < countries.length; j++) {
				if (path[i] === countries[j].name) {
					countries[j].status = true;
					jointPath.push({
						name: countries[j].name,
						x: countries[j].x,
						y: countries[j].y,
					});
				}
			}
		}
		for (let i = 0; i < jointPath.length - 1; i++) {
			this.drawLine(
				ctx,
				{
					x: jointPath[i].x + 3,
					y: jointPath[i].y + 3,
					x1: jointPath[i + 1].x + 3,
					y1: jointPath[i + 1].y + 3,
				},
				{ color: "green", width: 2 }
			);
		}
		this.setState({ countries, path: jointPath });
	};

	handleClear = () => {
		let source = "";
		let destination = "";
		let handleSource = false;
		let handleDest = false;
		let distance = "";
		let pathSet = false;

		let countries = this.state.countriesArr;
		for (let i = 0; i < countries.length; i++) {
			countries[i].status = false;
		}
		ctx.clearRect(0, 0, this.state.imageWidth, this.state.imageHeight);

		this.setState({
			source,
			destination,
			handleSource,
			handleDest,
			countries,
			distance,
			pathSet,
		});
	};

	handleSource = (e) => {
		console.log("Source Selected!!");
		this.setState({ source: e.target.value });
	};

	handleDestination = (e) => {
		console.log("Destination Selected!!");
		this.setState({ destination: e.target.value });
	};

	degreesToRadians = (degrees) => {
		return (degrees * Math.PI) / 180;
	};

	handleMouseClicksrc = (e) => {
		let countries = this.state.countriesArr;
		let source = "";
		for (let i = 0; i < countries.length; i++) {
			if (
				Math.round(
					Math.sqrt(
						Math.pow(countries[i].x - e.clientX, 2) +
							Math.pow(countries[i].y - e.clientY, 2)
					)
				) < 8
			) {
				countries[i].status = true;
				source = countries[i].name;
			}
		}
		let handleSource = false;
		this.setState({ countries, handleSource, source });
	};

	handleMouseClickdest = (e) => {
		console.log("Mouse clicked");

		let countries = this.state.countriesArr;
		let destination = "";
		for (let i = 0; i < countries.length; i++) {
			if (
				Math.round(
					Math.sqrt(
						Math.pow(countries[i].x - e.clientX, 2) +
							Math.pow(countries[i].y - e.clientY, 2)
					)
				) < 8
			) {
				countries[i].status = true;
				destination = countries[i].name;
			}
		}
		let handleDest = false;
		this.setState({ countries, handleDest, destination });
	};

	handleSourceClick = () => {
		console.log("handling source");

		let handleSource = true;
		this.setState({ handleSource });
	};

	handleDestinationClick = () => {
		console.log("handling destination");

		let handleDest = true;
		this.setState({ handleDest });
	};

	latLonToOffsets = (latitude, longitude, mapWidth, mapHeight) => {
		const radius = mapWidth / (2 * Math.PI);
		const FE = 180; // false easting

		const lonRad = this.degreesToRadians(longitude + FE);
		const x = lonRad * radius;

		const latRad = this.degreesToRadians(latitude);
		const verticalOffsetFromEquator =
			radius * Math.log(Math.tan(Math.PI / 4 + latRad / 2));
		const y = mapHeight / 2 - verticalOffsetFromEquator;

		return { x, y };
	};

	handleCar = () => {
		let car = true;
		let random = false;
		this.setState({ car, random });
		this.componentDidMount();
	};
	handleRandom = () => {
		let car = false;
		let random = true;
		this.setState({ car, random });
		this.componentDidMount();
	};

	render() {
		return (
			<React.Fragment>
				{!this.state.handleDest && this.state.handleSource && (
					<React.Fragment>
						{" "}
						<div className="selectPrompt">
							<h1>Click on the Country you want for Source</h1>
						</div>
						<div onClick={this.handleMouseClicksrc} className="worldmap">
							<img
								src={img}
								className="worldImage"
								id="world"
								alt="worldImage"
								ref={this.imgRef}
							/>
							<canvas
								ref={this.canvas}
								height={this.state.imageHeight}
								width={this.state.imageWidth}
							></canvas>
							{this.state.countriesArr.map((country) =>
								country.status ? (
									<span
										key={country.name}
										className="country"
										// style={{ backgroundColor: "purple" }}
										style={{
											border: "4px solid blue",
											top: country.y,
											left: country.x,
										}}
									></span>
								) : (
									<span
										key={country.name}
										className="pointer"
										// style={{ backgroundColor: "purple" }}
										style={{
											border: "0.1 solid yellow",
											top: country.y,
											left: country.x,
										}}
									></span>
								)
							)}
						</div>
					</React.Fragment>
				)}{" "}
				{!this.state.handleDest && !this.state.handleSource && (
					<TransformWrapper
						defaultScale={1}
						defaultPositionX={200}
						defaultPositionY={100}
					>
						{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
							<React.Fragment>
								<div
									style={{
										top: 7,
										left: this.state.imageWidth - 55,
									}}
									className="ZoomIcons"
								>
									<button onClick={() => zoomIn()}>+</button>
									<button onClick={() => zoomOut()}>-</button>
									<button onClick={() => resetTransform()}>
										<img className="reset" src={reset} alt="R" />
									</button>
								</div>
								<TransformComponent>
									<div className="worldmap">
										<img
											src={img}
											className="worldImage"
											id="world"
											ref={this.imgRef}
											alt="worldImage"
										/>
										<canvas
											ref={this.canvas}
											height={this.state.imageHeight}
											width={this.state.imageWidth}
										></canvas>

										{this.state.countriesArr.map((country) =>
											country.status ? (
												<React.Fragment>
													<span
														style={{
															top: country.y - 15,
															left: country.x - 14,
														}}
														className="countryName"
													>
														{country.name}
													</span>
													<span
														key={country.name}
														className="country"
														// style={{ backgroundColor: "purple" }}
														style={{
															border: "4px solid blue",
															top: country.y,
															left: country.x,
														}}
													></span>
												</React.Fragment>
											) : !this.state.pathSet ? (
												<React.Fragment>
													<span
														key={country.name}
														className="pointer"
														// style={{ backgroundColor: "purple" }}
														style={{
															border: "4px solid purple",
															top: country.y,
															left: country.x,
														}}
													></span>
												</React.Fragment>
											) : (
												<React.Fragment>
													<span
														key={country.name}
														className="pointer"
														// style={{ backgroundColor: "purple" }}
														style={{
															border: "0.1px solid yellow",
															top: country.y,
															left: country.x,
														}}
													></span>
												</React.Fragment>
											)
										)}
									</div>
								</TransformComponent>
							</React.Fragment>
						)}
					</TransformWrapper>
				)}
				{this.state.handleDest && !this.state.handleSource && (
					<React.Fragment>
						{" "}
						<div className="selectPrompt">
							<h1>Click on the Country you want for Destination</h1>
						</div>
						<div onClick={this.handleMouseClickdest} className="worldmap">
							<img
								src={img}
								className="worldImage"
								id="world"
								alt="worldImage"
								ref={this.imgRef}
							/>
							<canvas
								ref={this.canvas}
								height={this.state.imageHeight}
								width={this.state.imageWidth}
							></canvas>
							{this.state.countriesArr.map((country) =>
								country.status ? (
									<span
										key={country.name}
										className="country"
										// style={{ backgroundColor: "purple" }}
										style={{
											border: "4px solid blue",
											top: country.y,
											left: country.x,
										}}
									></span>
								) : (
									<span
										key={country.name}
										className="pointer"
										// style={{ backgroundColor: "purple" }}
										style={{
											border: "0.1 solid yellow",
											top: country.y,
											left: country.x,
										}}
									></span>
								)
							)}
						</div>{" "}
					</React.Fragment>
				)}
				<div className="form">
					<div className="grid">
						<label>Source</label>
						<select value={this.state.source} onChange={this.handleSource}>
							<option value="">Select a Country</option>
							{this.state.countryArr.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
					<h4>{this.state.source}</h4>
					<a onClick={this.handleSourceClick} className="select">
						Select Country from Map
					</a>
					<br />
					<div className="grid">
						<label>Destination</label>
						<select
							value={this.state.destination}
							onChange={this.handleDestination}
						>
							<option value="">Select a Country</option>

							{this.state.countryArr.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>{" "}
					</div>

					<h4>{this.state.destination}</h4>
					<a onClick={this.handleDestinationClick} className="select">
						Select Country from Map
					</a>
					<button onClick={() => this.handleCompute()} className="compute">
						Compute
					</button>
					<button onClick={() => this.handleClear()} className="clear">
						Clear
					</button>
					<br />

					{this.state.distance > 0 && (
						<React.Fragment>
							<label>Path</label>
							<br />
							{this.state.path.map((country) => (
								<React.Fragment>
									{" "}
									<h5>{country.name}</h5>
								</React.Fragment>
							))}
							<br />
							<label>Distance</label>
							<h3>{this.state.distance} km</h3>{" "}
						</React.Fragment>
					)}
				</div>
				<div
					style={{
						top: this.state.imageHeight - 330,
						left: this.state.imageWidth - 45,
					}}
					className="Transport"
				>
					{this.state.car ? (
						<button
							style={{ backgroundColor: "red" }}
							onClick={() => this.handleCar()}
						>
							<img className="transicon" src={car} />
						</button>
					) : (
						<button onClick={() => this.handleCar()}>
							<img className="transicon" src={car} />
						</button>
					)}

					{this.state.random ? (
						<button
							style={{ backgroundColor: "red" }}
							onClick={() => this.handleRandom()}
						>
							<img className="transicon" src={random} />
						</button>
					) : (
						<button onClick={() => this.handleRandom()}>
							<img className="transicon" src={random} />
						</button>
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default Main;
