import { useState } from 'react';

import FormulaireImageHome from '../../../assets/img/illustration_formulaire.png';
import FooterHomePageB2C from '../../FooterHomePageB2C';
import { Question as IQuestion } from '../../../interfaces';
import ChoiceOpen from './ChoiceOpen';
import ChoiceQCM from './ChoiceQCM';
import ChoiceYesNo from './ChoiceYesNo';
import { fetchUserResponse } from '../../../services/Api';

const QUESTION_TYPE_QCM = 0;
const QUESTION_TYPE_OPEN = 1;
const QUESTION_TYPE_YES_NO = 2;

interface QuestionProps {
	societe: string;
	question: IQuestion;
	onResponse: (response: String | number | undefined) => void;
	nextQuestion: () => void;
}

const Question = ({
	societe,
	question,
	onResponse,
	nextQuestion
}: QuestionProps) => {
	const [ response, setResponse ] = useState<String | number>();

	function onChange(response: String | number) {
		setResponse(response);
	}

	const sendResponse = async (
		societe: string,
		response: number | String | undefined
	) => {
		if (typeof response === 'string') {
			return await fetchUserResponse(societe, 17, response);
		}
		return await fetchUserResponse(societe, response);
	};

	const submit = (societe: string, response_id?: number) => {
		nextQuestion();
		onResponse && onResponse(response);
		sendResponse(societe, response_id || response);
	};

	return (
		<div className="block-formulaire-bis h-screen text-[#333333]">
			<img className="img-formulaire-bis" src={FormulaireImageHome} />
			<div className="block-text-formulaire-bis">
				<h2 className="bg-[#B30F0F] text-[#FFFFFF] mb-10 text-center text-xl p-2">
					SPOT-ON POUR VOUS !
				</h2>
				<p className="text-2xl">Moins d'une minute pour nous aider</p>
				<p className="text-2xl">
					et que Spot-On réponde encore plus à vos attentes !!!
				</p>
				<h3 className="text-2xl font-bold m-12">{question.content}</h3>

				{question.type === QUESTION_TYPE_OPEN && (
					<ChoiceOpen question={question} onChange={onChange} />
				)}

				{question.type === QUESTION_TYPE_QCM && (
					<ChoiceQCM question={question} onChange={onChange} />
				)}

				{question.type === QUESTION_TYPE_YES_NO && (
					<ChoiceYesNo question={question} societe={societe} submit={submit} />
				)}
				<div className="w-full flex items-center justify-center">
					<a
						className="hover:underline cursor-pointer"
						onClick={() => nextQuestion()}
					>
						Passer
					</a>

					{question.type !== QUESTION_TYPE_YES_NO && (
						<button
							type="button"
							className="button-general px-12 rounded-full m-6 text-xl font-extrabold"
							onClick={() => {
								societe && submit(societe);
							}}
						>
							Suivant
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Question;
