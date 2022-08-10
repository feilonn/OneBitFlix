import express from 'express';
//Controllers
import { coursesController } from './controllers/coursesController';
import { categoriesController } from './controllers/categoriesController';
import { episodesController } from './controllers/episodesController';
import { authController } from './controllers/authController';
import { favoritesController } from './controllers/favoritesController';

//Middlewares
import { ensureAuth, ensureAuthViaQuery } from './middlewares/auth';

export const router = express.Router();

//Users Routes
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login)

//Categories Routes
router.get('/categories', ensureAuth, categoriesController.index);
router.get('/categories/:id', ensureAuth, categoriesController.categoryWithCourses);

//Courses Routes
router.get('/courses/featured', ensureAuth, coursesController.featuredCourses);
router.get('/courses/newest', coursesController.newestCourses);
router.get('/courses/search', ensureAuth, coursesController.searchCourses);
router.get('/courses/:id', ensureAuth, coursesController.coursesWithEpisodes);

//Videos Routes
router.get('/episodes/stream', ensureAuthViaQuery, episodesController.stream);

//Favorites Routes
router.post('/favorites', ensureAuth, favoritesController.save);
router.get('/favorites', ensureAuth, favoritesController.index);
router.delete('/favorites/:id', ensureAuth, favoritesController.delete);