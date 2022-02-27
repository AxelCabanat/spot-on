const db = require('../services/Db');
const { NotFoundError, BadRequestError } = require('../services/Errors');

/**
 * Retourne les données d'un sondage
 */
const findOne = async (id) => {
	//TODO: erreur 404
	if ((await db.survey.count({ where: { id: Number(id) } })) === 0) {
		throw new NotFoundError('Survey not found');
	}
	return await db.survey.findUnique({
		where: { id: parseInt(id) },
		include: { questions: { include: { responses: true } } }
	});
};

/**
 * retourne la liste de tous les sondages 
 */
const findMany = async () => {
	return await db.survey.findMany({ include: { questions: { include: { responses: true } } } });
};

/**
 * Créé un nouveau sondage
 */
const create = async (survey) => {
	if (!survey.name) {
		throw new BadRequestError('Name is required');
	}

	await db.survey.create({ data: survey });
};

/**
 * Ajoute une question à un sondage
 */
const createQuestion = async (surveyId, question) => {
	if ((await db.survey.count({ where: { id: Number(surveyId) } })) === 0) {
		throw new NotFoundError('Survey not found');
	}

	await db.survey_question.create({
		data: {
			...question,
			surveyId: Number(surveyId)
		}
	});
};

/**
 * Ajoute un choix à une question
 */
const createChoice = async (questionId, choice) => {
	if ((await db.survey_question.count({ where: { id: Number(questionId) } })) === 0) {
		throw new NotFoundError('Question not found');
	}

	await db.survey_question_choice.create({
		data: {
			...choice,
			questionId: Number(questionId)
		}
	});
};

/**
 * creer un questionnaire
 */

const createQuestionnary = async (name) => {
	await db.$queryRaw`INSERT INTO questionnaires (name) VALUES (${name}))`;
};

/**
 * Creer des reponses a une question
 */
const createResponse = async (question, reponse) => {
	await db.$queryRaw`INSERT INTO questions (reponse), (question) VALUES ${reponse}, ${question}`;
};

/**
 * id utilisateur
 */
const createUserSurvey = async (societe, firstName, lastName, email) => {
	await db.survey_user.create({
		data: {
			societe,
			firstName,
			lastName,
			email
		}
	});
};

/**
 * find one user by societe
 */
const findUser = async (societe) => {
	if ((await db.survey_user.count({ where: { societe } })) === 0) {
		throw new NotFoundError('Survey not found');
	}

	return await db.$queryRaw`SELECT * FROM survey_user WHERE societe = ${societe}`;
};

/**
 * reponses utilisateur
 */
const createUserResponse = async (userSociete, surveyQuestionChoiceId, Other) => {
	if (Other) {
		return await db.survey_user_answer.create({
			data: {
				surveyQuestionChoiceId,
				userSociete,
				Other
			}
		});
	}
	return await db.survey_user_answer.create({
		data: {
			surveyQuestionChoiceId,
			userSociete
		}
	});
};

/**
 * 
 * User accept to be recontacted 
 */
const userRecontacted = async (societe) => {
	return await db.survey_user.update({
		data: {
			recontact: true
		},
		where: { societe }
	});
};

/**
 * Retourne les utilisateurs et reponses d'un sondage
 */
const answers = async () => {
	return await db.survey_user.findMany({
		include: { answers: { include: { choice: true } } }
	});
};
/**
 * Retourne les utilisateurs et reponses d'un sondage
 */
const recontact = async () => {
	return await db.survey_user.findMany({
		include: { answers: { include: { choice: true } } }, where: {recontact : true}
	});
};

module.exports = {
	findOne,
	findMany,
	create,
	createQuestion,
	createChoice,
	createQuestionnary,
	createResponse,
	createUserSurvey,
	findUser,
	createUserResponse,
	answers,
	userRecontacted,
	recontact
};
