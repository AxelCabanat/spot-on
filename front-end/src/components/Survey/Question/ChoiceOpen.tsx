import { SurveyChoiceProps } from '../../../interfaces';

const ChoiceOpen = ({ onChange }: SurveyChoiceProps) => (
	<textarea
		className="input-formulaire "
		onChange={(e) => onChange && onChange(e.target.value)}
	/>
);

export default ChoiceOpen;
