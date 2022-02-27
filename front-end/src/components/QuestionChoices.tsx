import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect, useContext } from "react";

import { fetchSurveyById, fetchUserResponse } from "../services/Api";
import { Survey } from "../interfaces";
import QuestionComp from "./Survey/Question/Question";
import SocieteContext from "../context/SocieteContext";
import LastQuestionModal from "./LastQuestionModal";

type NewAnswerSurvey = {
  societe: string;
  surveyQuestionChoiceId: number;
};


const QuestionChoices = () => {

  const {societe} = useContext(SocieteContext)
  
  const [survey, setSurvey] = useState<Survey | undefined>();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [recontact, setRecontact] = useState<boolean>(false)


  const nextQuestion = () => { 
    currentQuestion <= 3 ? setCurrentQuestion(currentQuestion+1) : setOpenModal(true)}

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAnswerSurvey>();

  const postAnswer = async (
    societe: string,
    surveyQuestionChoiceId: number
  ) => {
    await fetchUserResponse(societe, surveyQuestionChoiceId);
  };

  const onSubmit: SubmitHandler<NewAnswerSurvey> = (data) => {
    try {
      postAnswer(societe, data.surveyQuestionChoiceId);
    } catch (e: any) {
      console.log(e.response.data);
    }
  };

  const fetchQuestion = async (id: number): Promise<void> => {
    setSurvey(await fetchSurveyById(id));
  };

  const onResponse = (
    response: String | number | undefined
  ) => {
    response === 24? setRecontact(true) : setRecontact(false)
  };

  useEffect(() => {
    fetchQuestion(5);
  }, []);

  return (
    <>
      {survey && societe &&(
        <>
          <form onSubmit={handleSubmit(onSubmit)} onClick={() => openModal && setOpenModal(false)}>
              <QuestionComp question={survey.questions[currentQuestion]} onResponse={(response) => onResponse(response)} nextQuestion={nextQuestion} societe={societe} />
          </form>
        </>
      )}
      {
        openModal && (
      <LastQuestionModal isOpen={openModal} setIsOpen={setOpenModal}  answer={recontact} societe={societe} />
        )
      }
    </>
  );
};

export default QuestionChoices;
