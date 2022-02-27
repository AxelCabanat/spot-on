import { useRef } from "react";

import { SurveyChoiceProps } from "../../../interfaces";


const ChoiceQCM = ({ question, onChange }: SurveyChoiceProps) => {
  
  const checked = useRef() 
  
  return (
  <>
    {question.responses.map((response) => (
     <div className="w-full"> <label key={response.id} className="label-formulaire text-2xl flex items-center">
        <input
          type="radio"
          name={`choice-${question.id}`}
          className="m-2"
          value={response.id}
          onChange={() => onChange && onChange(response.id)}
        />
        {response.content}
      </label>
        {response.content === "Autre:" && <textarea ref={checked.current} className="input-formulaire w-1/2 mx-auto block" onChange={(e) => onChange && onChange(e.target.value)}/>}
    </div>
    ))}
  </>
  )};

export default ChoiceQCM;
