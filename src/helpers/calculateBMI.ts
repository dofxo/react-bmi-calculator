const calculateBMI = ({ height, weight }: { [key: string]: string | File }) => {
	// Convert height from centimeters to meters
	const heightMeters = +height / 100;

	// Calculate BMI
	const bmi = +(+weight / Math.pow(heightMeters, 2)).toFixed(2);

	// Interpret BMI
	let bmiResponse: string = "";

	if (bmi < 18.5) {
		bmiResponse = "Underweight";
	} else if (bmi >= 18.5 && bmi < 24.9) {
		bmiResponse = "Normal weight";
	} else if (bmi >= 25.0 && bmi < 29.9) {
		bmiResponse = "Overweight";
	} else {
		bmiResponse = "Obesity";
	}

	return {
		bmiResponse,
		bmi,
	};
};

export default calculateBMI;
