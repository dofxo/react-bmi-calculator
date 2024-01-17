import { useRef } from "react";

interface InputWrapperPropTypes {
	htmlFor: string;
	inputType: string;
	addNumberValidation?: boolean;
	radioLabels?: string[];
	placeHolder?: string;
	setSelectedGender?: React.Dispatch<React.SetStateAction<string>>;
}

const InputWrapper = ({
	htmlFor,
	inputType,
	addNumberValidation = false,
	radioLabels,
	placeHolder,
	setSelectedGender,
}: InputWrapperPropTypes) => {

	const inputRef = useRef<HTMLInputElement>(null);
	
	const removeNaN = () => {
		if (!inputRef.current || !addNumberValidation) return;

		inputRef.current.value = inputRef.current.value.replace(/[^0-9]/g, "");
	};

	return (
		<div className="input-wrapper flex justify-between items-center w-full gap-x-10">
			<label className="uppercase text-gray-500" htmlFor={htmlFor}>
				{htmlFor}
			</label>
			{inputType !== "radio" ? (
				<input
					placeholder={placeHolder}
					type={inputType}
					name={htmlFor}
					id={htmlFor}
					className="border-2 -skew-x-[10deg] p-2 outline-none w-[300px] mobile:w-full"
					ref={inputRef}
					onChange={removeNaN}
				/>
			) : (
				<div className="flex justify-start gap-x-10 w-[300px] mobile:w-full mobile:gap-x-5">
					{radioLabels?.map((label, idx) => {
						return (
							<div key={idx} className="flex gap-x-2 items-center">
								<input
									type="radio"
									id={label}
									className="accent-[var(--primary-color)]"
									name={htmlFor}
									onChange={(e) => {
										// saves the selected gender
										if (!e.target.nextElementSibling?.textContent || !setSelectedGender) return;
										setSelectedGender(e.target.nextElementSibling?.textContent);
									}}
								/>
								<label htmlFor={htmlFor}>{label}</label>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default InputWrapper;
