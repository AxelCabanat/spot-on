import { useEffect, useState, useContext } from "react";
import { fetchAllUsersAnswers } from "../../services/Api";
import { fetchRecontactedUsersAnswers } from "../../services/Api";
import { useNavigate } from "react-router-dom";


import UserContext from "../../context/UserContext";

interface Answers {
  id: number;
  userSociete: string;
  surveyQuestionChoiceId: number;
  Other?: string;
  choice: {
    id: number;
    content: string;
    questionId: number;
  };
}

interface UsersAnswers {
  id: number;
  societe: string;
  firstName: string;
  lastName: string;
  email: string;
  recontact?: boolean;
  answers: [Answers];
}

function UsersAnswer() {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [userAnswers, setUserAnswers] = useState<Array<UsersAnswers>>();
  const [userRecontactedAnswers, setUserReconatctedAnswers] = useState<Array<UsersAnswers>>();
  const [isFiltered, setIsFiltered] = useState<Boolean>(false);
  const navigate = useNavigate()


  const { user } = useContext(UserContext);
  
  const fetch = async () => {
    setUserAnswers(await fetchAllUsersAnswers());
    setUserReconatctedAnswers(await fetchRecontactedUsersAnswers());
    setIsLoading(!isLoading);
  };

  const toggle = () => {
    setIsFiltered(!isFiltered)
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
   {user && user.role === 0 ? ( <>
    <button onClick={toggle} className="border-green-600 border-2 rounded text-black w-24">{isFiltered ? "Tous" : "Recontacter"}</button>
    <div className="flex flex-col w-[90%] ml-[5%]">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Société
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    NOM / Prenom
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Recontact
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Reponses
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mail
                  </th>
                </tr>
              </thead>
              {!isFiltered ? (
                <>
                <tbody className="bg-white divide-y divide-gray-200">
                {userAnswers &&
                  userAnswers.map((user) => (
                    <tr key={user.societe}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <h2 className="text-black">{user.societe}</h2>
                          </div>
                          
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                      <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                             <h3>{(user.firstName).toLocaleUpperCase()}</h3>
                            </div>
                            <div className="text-sm text-gray-500">
                              <h3>{user.lastName}</h3>
                            </div>
                          </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={user.recontact ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" : "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"}>
                        {user.recontact ? "OUI" : "NON"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <ul>
                          {user.answers &&
                            user.answers.map((answer) => (
                              <li key={answer.id}>
                                <p>
                                  {answer.surveyQuestionChoiceId === 17
                                    ? answer.Other
                                    : answer.choice.content}
                                </p>
                              </li>
                            ))}
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                        <a
                          href={`mailto:${user.email}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          {user.email}
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
                </>
              ) : (
                <>
                <tbody className="bg-white divide-y divide-gray-200">
                {userRecontactedAnswers &&
                  userRecontactedAnswers.map((user) => (
                    <tr key={user.societe}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <h2 className="text-black">{user.societe}</h2>
                          </div>
                          
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                      <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                             <h3>{(user.firstName).toLocaleUpperCase()}</h3>
                            </div>
                            <div className="text-sm text-gray-500">
                              <h3>{user.lastName}</h3>
                            </div>
                          </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={user.recontact ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" : "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"}>
                        {user.recontact ? "OUI" : "NON"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <ul>
                          {user.answers &&
                            user.answers.map((answer) => (
                              <li key={answer.id}>
                                <p>
                                  {answer.surveyQuestionChoiceId === 17
                                    ? answer.Other
                                    : answer.choice.content}
                                </p>
                              </li>
                            ))}
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                        <a
                          href={`mailto:${user.email}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          {user.email}
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
                </>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
    ) : (
      <>
      <h2 className="ml-[44%] mt-[25%] text-4xl text-red-600">unauthorized</h2>
      <button onClick={() => navigate("/")} className="ml-[44%]">Retour a l'acceuil</button>
      </>
    )}
    </>
  )
}

export default UsersAnswer;
