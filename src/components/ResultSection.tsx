interface ResultSectionProps {
	bmiResult: {
		bmiResponse: string;
		bmi: number;
	};
	showResult: boolean;
}

const ResultSection = ({ showResult, bmiResult }: ResultSectionProps) => {
	return (
		<div className="result-section bg-[var(--primary-color)] rounded grid place-content-center relative w-[30%] min-h-full md:w-[100%]">
			<div className="bg-[var(--primary-color)] inset-0 -left-12 absolute -skew-x-12 shadow-[0_0_20px_0_var(--shadow-color)] z-10"></div>
			{showResult ? (
				<div className="z-10 relative right-[10px]">
					<h2 className="text-white text-center font-bold text-3xl md:my-5">Result:</h2>
					<div className="bmi-result text-white text-center mt-5 text-bold md:mb-5">
						<p className="text-[30px] font-bold mb-2">{bmiResult.bmi} kg/m2</p>
						<p>({bmiResult.bmiResponse})</p>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default ResultSection;
