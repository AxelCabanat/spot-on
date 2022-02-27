const router = require('express').Router();
const SurveyModel = require('../models/survey');
const asyncHandler = require('../services/AsyncHandler');

/**
 * Retourne les données d'un sondage
 */
router.get('/:id', async (req, res) => {
	res.send(await SurveyModel.findOne(req.params.id));
});

/**
 * retourne la liste des sondages 
 */
router.get('/', async (req, res) => {
	res.send(await SurveyModel.findMany());
});

/**
 * Créé un nouveau sondage
 */
router.post(
	'/',
	asyncHandler(async (req, res) => {
		res.status(201).send(await SurveyModel.create(req.body));
	})
);

/**
 * Ajoute une question au sondage
 */
router.post(
	'/:surveyId/questions',
	asyncHandler(async (req, res) => {
		const { surveyId } = req.params;
		res.status(201).send(await SurveyModel.createQuestion(surveyId, req.body));
	})
);

/**
 * Ajoute un choix à une question
 */
router.post(
	'/:surveyId/questions/:questionId',
	asyncHandler(async (req, res) => {
		const { questionId } = req.params;
		res.status(201).send(await SurveyModel.createChoice(questionId, req.body));
	})
);

/**
 * Ajoute un nouveau user pour repondre aux question
 */
router.post(
	'/users/',
	asyncHandler(async (req, res) => {
		const { societe, firstName, lastName, email } = req.body;
		res.status(201).send(await SurveyModel.createUserSurvey(societe, firstName, lastName, email));
	})
);
/**
 * find User by societe
 */
router.get(
	'/users/:societe',
	asyncHandler(async (req, res) => {
		const { societe } = req.params;
		const userSurvey = await SurveyModel.findUser(societe);
		res.status(200).send(userSurvey);
	})
);
/**
 * update User recontact by societe
 */
router.put(
	'/users/:societe',
	asyncHandler(async (req, res) => {
		const { societe } = req.params;
		const userSurvey = await SurveyModel.userRecontacted(societe);
		res.status(200).send(userSurvey);
	})
);

/**
 * Ajoute un nouveau user pour repondre aux question
 */
router.post(
	'/users/:userSociete',
	asyncHandler(async (req, res) => {
		const { userSociete } = req.params;
		const { surveyQuestionChoiceId, Other } = req.body;
		res.status(201).send(await SurveyModel.createUserResponse(userSociete, surveyQuestionChoiceId, Other));
	})
);

/**
 * Retourne les utilisateurs et reponses d'un sondage
 */
router.get('/user/answers', async (req, res) => {
	res.send(await SurveyModel.answers());
});

/**
 * Retourne les utilisateurs et reponses d'un sondage
 */
router.get('/user/recontact', async (req, res) => {
	res.send(await SurveyModel.recontact());
});

module.exports = router;
