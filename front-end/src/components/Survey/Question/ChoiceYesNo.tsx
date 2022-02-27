import { Question as IQuestion } from '../../../interfaces';

interface Props {
	question: IQuestion;
	societe: string;
	submit: (societe: string, response_id: number) => void;
}
const ChoiceYesNo = ({ question, societe, submit }: Props) => {
	return (
		<div className="w-full flex flex-col items-center">
			{question.responses.map((response) => (
				<button
					key={response.id}
					type="button"
					className="button-general px-12 rounded-full m-6 text-xl font-extrabold"
					onClick={() => societe && submit(societe, response.id)}
				>
					{response.content}
				</button>
			))}
		</div>
	);
};

export default ChoiceYesNo;
