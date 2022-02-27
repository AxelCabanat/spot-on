import axios from "axios";
import { Category, Survey } from "../interfaces";

import { Studio, User } from "../interfaces";

// Envoi/récupère les cookie à chaque requête
axios.defaults.withCredentials = true;

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

/**
 * Returns the whole user list
 */
export const fetchUsers = async () => {
  return (await axios(`${API_URL}/users`)).data;
};

/**
 * path for register
 */
export const fetchRegister = async (
  username: string,
  email: string,
  password: string
) => {
  await axios.post(`${API_URL}/users/register`, { username, email, password });
};

/**
 * Path for login
 */
export const fetchLogin = async (
  username: string,
  clearPassword: string
): Promise<User | undefined> => {
  return (
    await axios.post(`${API_URL}/users/login`, { username, clearPassword })
  ).data;
};

/**
 * Path for login with cookies
 */
export const fetchCookiesLogin = async (
): Promise<User | undefined> => {
  return (
    await axios(`${API_URL}/users/me`, )
  ).data;
};

/**
 * Path for login with cookies
 */
export const fetchLogout = async (
): Promise<User | undefined> => {
  return (
    await axios(`${API_URL}/users/logout`, )
  ).data;
};

/**
 * Update user
 */
export const fetchUpdateUser = async (
  formData:any,
  id:number
) => {
  return (await axios.put(`${API_URL}/users/update/${id}`, 
    formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }  
  )).data;
};

/**
 * Returns the planning
 */

export const fetchPlanning = async () => {
  return (await axios(`${API_URL}/planning`)).data;
};

/**
 * Returns Studio Home
 */
export const fetchStudioHome = async () => {
  return (await axios(`${API_URL}/studiohome`)).data;
};

/**
 * update studio info
 */
export const fetchUpdateStudio = async (studio: Studio) => {
  return (await axios.put(`${API_URL}/studios/update/${studio.id}`, studio))
    .data;
};

/**
 * update studio info ALL
 */
export const fetchUpdateStudioAll = async (studio: Studio) => {
  return (await axios.put(`${API_URL}/studios/update/${studio.id}`, studio))
    .data;
};

/**
 * update studio Live session
 */

export const fetchUpdateStudioLive = async (
  id: number,
  is_on_stream: boolean,
  stream_url: string
) => {
  return (
    await axios.put(`${API_URL}/studios/${id}/live`, {
      is_on_stream,
      stream_url,
    })
  ).data;
};

/**
 * return all studios
 */
export const fetchAllStudio = async () => {
  return (await axios(`${API_URL}/studios/`)).data;
};

/*
 *path to create new studio
 */
export const fetchNewStudio = async (name: string, username: string) => {
  await axios.post(`${API_URL}/studios`, { name, username });
};

/**
 * path for register admin studio
 */
export const fetchAdminRegister = async (
  username: string,
  email: string,
  password: string
) => {
  await axios.post(`${API_URL}/studios/register`, {
    username,
    email,
    password,
  });
};

/**
 * return one studio by name
 */
export const fetchStudioByName = async (studio?: string) => {
  return (await axios(`${API_URL}/studios/${studio}`)).data;
};

/**
 * return one studio by id
 */
 export const fetchStudioById = async (id: number) => {
  return (await axios(`${API_URL}/studios/id/${id}`)).data;
};

/**
 * Returns the whole surveys list
 */
export const fetchSurveys = async () => {
  return (await axios(`${API_URL}/surveys`)).data;
};

/**
 * Return one survey by id
 */
export const fetchSurveyById = async (id: number): Promise<Survey> => {
  return (await axios(`${API_URL}/surveys/${id}`)).data;
};

/**
 * Path for add a new survey
 */
export const fetchNewSurvey = async (name: string) => {
  await axios.post(`${API_URL}/surveys`, { name });
};

/**
 * Path for add a new question to a survey
 */
export const fetchNewQuestion = async (
  surveyId: number,
  content: string,
  type: number
) => {
  await axios.post(`${API_URL}/surveys/${surveyId}/questions`, {
    content,
    type,
  });
};

/**
 * Path for add a new answer to a question
 */
export const fetchNewAnswer = async (
  surveyId: number,
  questionId: number,
  content: string
) => {
  await axios.post(`${API_URL}/surveys/${surveyId}/questions/${questionId}`, {
    content,
  });
};

/**
 * Path for add a new user Survey
 */
export const fetchUserSurvey = async (
  societe: string,
  firstName: string,
  lastName: string,
  email: string
) => {
  return (
    await axios.post(`${API_URL}/surveys/users`, {
      societe,
      firstName,
      lastName,
      email,
    })
  ).data;
};
/**
 * Path for add a new responce of user
 */
export const fetchUserResponse = async (
  userSociete: string,
  surveyQuestionChoiceId: number | String | undefined,
  Other?: string
) => {
  if (Other) {
    return (
      await axios.post(`${API_URL}/surveys/users/${userSociete}`, {
        userSociete,
        surveyQuestionChoiceId,
        Other,
      })
    ).data;
  }
  return (
    await axios.post(`${API_URL}/surveys/users/${userSociete}`, {
      userSociete,
      surveyQuestionChoiceId,
    })
  ).data;
};

/**
 * Path to set recontacted to true
 */
export const fetchRecontactedUser = async (userSociete: string) => {
  return (await axios.put(`${API_URL}/surveys/users/${userSociete}`)).data;
};
/**
 * Path for get full user by societe name
 */
export const fetchFindUserSurvey = async (societe: string) => {
  return (await axios(`${API_URL}/surveys/users/${societe}`)).data;
};

/**
 * Path for get all answers of users
 */
export const fetchAllUsersAnswers = async () => {
  return (await axios(`${API_URL}/surveys/user/answers`)).data;
};
/**
 * Path for get all answersId of users accepted to be recontacted
 */
export const fetchRecontactedUsersAnswers = async () => {
  return (await axios(`${API_URL}/surveys/user/recontact`)).data;
};

/**
 * upload video
 */
export const fetchUploadVideo = async (formData: FormData) => {
  return await axios.post(`${API_URL}/videos/uploads`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/**
 * update video
 */
 export const fetchUpdateVideo = async (formData: FormData) => {
  return await axios.put(`${API_URL}/videos/update`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/**
 * return all video for studio
 */
export const fetchStudioVideos = async (id: Number): Promise<any> => {
  return (await axios(`${API_URL}/videos/studio/${id}`)).data;
};

/**
 * return all categories studio
 */
export const fetchStudioCategories = async (id: Number): Promise<any> => {
  return (await axios(`${API_URL}/videos/categories/${id}`)).data;
};

/**
 * return video for id
 */
export const fetchVideo = async (id: string): Promise<any> => {
  return (await axios(`${API_URL}/videos/${id}`)).data;
};


/**
 * delete video for id
 */
 export const deleteVideo = async (id: number): Promise<any> => {
  return (await axios.delete(`${API_URL}/videos/${id}`));
};

/**
 * create category
 */
 export const fetchCategory = async (data : Category): Promise<any> => {
  return (await axios.post(`${API_URL}/videos/categories`, data));
};