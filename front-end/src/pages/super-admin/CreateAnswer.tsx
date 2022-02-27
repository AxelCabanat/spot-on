import { useForm, SubmitHandler } from 'react-hook-form';
import {fetchNewAnswer} from '../../services/Api'


type NewQuestion = {
  content: string;
};

interface Props {
  surveyId: number,
  questionId: number,
}

const CreateAnswer = ({surveyId, questionId}: Props) => {
  

  const  {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewQuestion>();

  const onSubmit: SubmitHandler<NewQuestion> = (data) => {
    try {
      fetchNewAnswer(surveyId, questionId, data.content);
    } catch (e: any) {
      console.log(e.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="answer">reponse</label>
      <input
        {...register("content", { required: true })}
        type="text"
        id="answer"
      />
      <button type="submit">ajouter une nouvelle reponse à la question</button>
    </form>
  );
};

export default CreateAnswer;