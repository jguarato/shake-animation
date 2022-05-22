function shakeElement(element) {
	// Play with the parameters below to change shake/animation:
	const minAngle = -30;
	const maxAngle = 30;
	let absDeltaAngle = 10; // Must be a value smaller than the angle range
	const numRepetitions = 4;
	const intervalTime = 10;

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