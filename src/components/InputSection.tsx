import { FormEvent, useRef, useState } from "react";

import InputWrapper from "./InputWrapper";
import getFormEntries from "../helpers/getFormEntries";

import calculateBMI from "../helpers/calculateBMI";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface InputSectionProps {
	setBMIResult: React.Dispatch<
		React.SetStateAction<{
			bmiResponse: string;
			bmi: number;
		}>
	>;
	setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputSection = ({ setBMIResult, setShowResult }: InputSectionProps) => {
	const [selectedGender, setSelectedGender] = useState<string>("");
	const formRef = useRef<HTMLFormElement>(null);

	return (
		<div className="input-section p-5 w-[60%] md:w-full">
			<h1 className="text-3xl font-[700] mb-10 mobile:text-xl">Calculate Body mass Index</h1>
			<form
				className="inputs flex flex-col gap-y-5 w-full"
				ref={formRef}
				onSubmit={(e: FormEvent) => {
					e.preventDefault();
				}}
			>
				<InputWrapper htmlFor="age" inputType="text" addNumberValidation={true} placeHolder="your age" />
				<InputWrapper
					htmlFor="gender"
					inputType="radio"
					radioLabels={["Male", "Female"]}
					setSelectedGender={setSelectedGender}
				/>
				<InputWrapper
					htmlFor="height"
					inputType="text"
					addNumberValidation={true}
					placeHolder="your height in cm"
				/>
				<InputWrapper
					htmlFor="weight"
					inputType="text"
					addNumberValidation={true}
					placeHolder="your weight in kg"
				/>
				<div className="button-container flex gap-x-2">
					<button
						className="border-[var(--primary-color)] border-2 text-[var(--primary-color)] -skew-x-12 p-2 mt-5 w-full"
						onClick={() => {
							if (!formRef.current) return;
							formRef.current.reset();
							setShowResult(false)
						}}
					>
						CLEAR
					</button>
					<button
						className="text-white bg-[var(--primary-color)] -skew-x-12 p-2 mt-5 w-full"
						onClick={() => {
							if (!formRef.current) return;
							const userInputData = getFormEntries(formRef.current);

							for (const items in userInputData) {
								if (userInputData[items] === "" || !("gender" in userInputData)) {
									toast.info("please complete your details.", {
										theme: "colored",
										autoClose: 3000,
									});
									return;
								}
							}

							// sets the gender
							userInputData.gender = selectedGender;

							const calculationResult = calculateBMI({
								height: userInputData.height,
								weight: userInputData.weight,
							});

							setBMIResult(calculationResult);
							setShowResult(true);
						}}
					>
						CALCULATE NOW
					</button>
				</div>

				<ToastContainer />
			</form>
		</div>
	);
};

export default InputSection;
