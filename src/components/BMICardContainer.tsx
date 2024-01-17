import {  useState } from "react";
import InputSection from "./InputSection";
import ResultSection from "./ResultSection";

const BMICardContainer = () => {
	const [bmiResult, setBMIResult] = useState<{ bmiResponse: string; bmi: number }>({ bmiResponse: "", bmi: 0 });
	const [showResult, setShowResult] = useState(false);

	return (
		<div className="bmi-card-container h-full shadow-[0_0_20px_0px_var(--shadow-color)] rounded-[10px] flex justify-between overflow-hidden m-auto w-full md:flex-col bg-white">
			<InputSection setShowResult={setShowResult} setBMIResult={setBMIResult} />
			<ResultSection  bmiResult={bmiResult} showResult={showResult}/>		
		</div>
	);
};

export default BMICardContainer;
