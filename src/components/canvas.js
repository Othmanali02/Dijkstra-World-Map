import React, { useEffect, useRef } from "react";
let ctx = null;

function Canvas() {
	const canvas = useRef();

	// initialize the canvas context
	useEffect(() => {
		// dynamically assign the width and height to canvas
		const canvasEle = canvas.current;
		canvasEle.width = canvasEle.clientWidth;
		canvasEle.height = canvasEle.clientHeight;

		// get context of the canvas
		ctx = canvasEle.getContext("2d");
		console.log(ctx);
	}, []);

	useEffect(() => {
		drawLine(
			{
				x: 624,
				y: 307,
				x1: 604,
				y1: 347,
			},
			{ color: "blue", width: 2 }
		);
	}, []);

	// draw a line
	const drawLine = (info, style = {}) => {
		const { x, y, x1, y1 } = info;
		const { color = "black", width = 1 } = style;

		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x1, y1);
		ctx.strokeStyle = color;
		ctx.lineWidth = width;
		ctx.stroke();
	};

	return <canvas height="1000px" width="1290px" ref={canvas}></canvas>;
}

export default Canvas;
