import { useForm, SubmitHandler } from "react-hook-form";
import { fetchNewQuestion } from "../../services/Api";

type NewQuestion = {
  content: string;
  type: number;
};

interface Props {
  surveyId: number;
}

const CreateQuestions = ({ surveyId }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewQuestion>();

  const onSubmit: SubmitHandler<NewQuestion> = (data) => {
    try {
      fetchNewQuestion(surveyId, data.content, Number(data.type));
    } catch (e: any) {
      console.log(e.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="question">Question</label>
      <textarea
        {...register("content", { required: true })}
        id="content"
        className="text-black"
      />
      {errors.content && <div className="error">enter your question</div>}
      <label htmlFor="type">Type</label>
      <select {...register("type", { required: true })} id="type">
        <option value={0}>QCM</option>
        <option value={1}>Question ouverte</option>
        <option value={2}>Yes/No question</option>
      </select>
      {errors.type && <div className="error">choose a question type</div>}
      <button type="submit">ajouter une nouvelle question</button>
    </form>
  );
};

export default CreateQuestions;
