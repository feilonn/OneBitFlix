import express from 'express';
//Controllers
import { coursesController } from './controllers/coursesController';
import { categoriesController } from './controllers/categoriesController';
import { episodesController } from './controllers/episodesController';
import { authController } from './controllers/authController';

export const router = express.Router();

//Users Routes
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login)

//Categories Routes
router.get('/categories', categoriesController.index);
router.get('/categories/:id', categoriesController.categoryWithCourses);

//Courses Routes
router.get('/courses/featured', coursesController.featuredCourses);
router.get('/courses/newest', coursesController.newestCourses);
router.get('/courses/search', coursesController.searchCourses);
router.get('/courses/:id', coursesController.coursesWithEpisodes);

//Courses Videos
router.get('/episodes/stream', episodesController.stream);