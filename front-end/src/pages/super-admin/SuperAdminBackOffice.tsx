import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { fetchSurveys, fetchNewSurvey } from "../../services/Api";
import CreateQuestions from "./CreateQuestions";
import CreateAnswer from "./CreateAnswer";
import UserContext from "../../context/UserContext";

type NewSurvey = {
  name: string;
};
const SuperAdminBackOffice = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [surveys, setSurveys] = useState<Array<any>>([]);

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewSurvey>();

  const onSubmit: SubmitHandler<NewSurvey> = (data) => {
    try {
      fetchNewSurvey(data.name);
    } catch (e: any) {
      console.log(e.response.data);
    }
  };

  const fetch = async () => {
    setSurveys(await fetchSurveys());
    setIsLoading(!isLoading);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      {user && user.role === 0 ? (
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name" className="text-3xl">
              nom du questionnaire
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              className="border-2 border-black m-4 w-1/4 rounded-lg"
            />
            <button type="submit">Submit</button>
          </form>
          {isLoading ? (
            <p>chargement en cours</p>
          ) : (
            surveys.map((survey) => (
              <>
                <div className="flex" key={survey.id}>
                  <p className="m-2">{survey.name}</p>
                  <CreateQuestions surveyId={survey.id} />
                </div>
                <div>
                  {survey.questions.map(
                    (question: {
                      id: number;
                      content: string;
                      type: number;
                    }) => (
                      <div className="flex m-2 ml-24" key={question.id}>
                        <p className="m-2">{question.content}</p>
                        <p className="m-2">{question.type}</p>
                        <CreateAnswer
                          surveyId={survey.id}
                          questionId={question.id}
                        />
                      </div>
                    )
                  )}
                </div>
              </>
            ))
          )}
        </div>
      ) : (
        <>
          <h2 className="ml-[44%] mt-[25%] text-4xl text-red-600">
            unauthorized
          </h2>
          <button onClick={() => navigate("/")} className="ml-[44%]">
            Retour a l'acceuil
          </button>
        </>
      )}
    </>
  );
};

export default SuperAdminBackOffice;
