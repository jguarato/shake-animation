function shakeElement(element) {
	// Play with the parameters below to change shake/animation:
	const maxAngle = parseInt(document.getElementById("angleSlider").value);
	const minAngle = -maxAngle;
	let absDeltaAngle = maxAngle / 2; // Must be a value smaller than the angle range
	const numRepetitions = parseInt(
		document.getElementById("repetitionsNum").value
	);
	const intervalTime = -parseInt(
		document.getElementById("velocitySlider").value
	);

	const centerAngle = (maxAngle - minAngle) / 2 + minAngle;

	// Ensure that one of the angles within the range is the center angle
	let tmp = Math.round((maxAngle - minAngle) / absDeltaAngle + 1);
	tmp = tmp % 2 == 0 ? tmp + 1 : tmp;
	absDeltaAngle = (maxAngle - minAngle) / (tmp - 1);

	// Initial parameters
	let angle = minAngle;
	let deltaAngle = absDeltaAngle;

	let timesPassedCenter = 0;

	const rotateInterval = setInterval(function () {
		if (angle >= maxAngle) {
			deltaAngle = -absDeltaAngle;
		} else if (angle <= minAngle) {
			deltaAngle = absDeltaAngle;
		} else if (
			angle >= centerAngle - absDeltaAngle / 2 &&
			angle < centerAngle + absDeltaAngle / 2
		) {
			timesPassedCenter++;
		}

		if (timesPassedCenter / 2 >= numRepetitions) {
			clearInterval(rotateInterval);
		} else {
			angle += deltaAngle;
			element.style.transform = `rotate(${angle}deg)`;
		}
	}, intervalTime);
}