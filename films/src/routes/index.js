const {Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middleware');

const router = Router();

router.get('/films', controllers.getFilms);
router.post('/films', middlewares.FilmValidation, controllers.createFilm);

module.exports = router;
