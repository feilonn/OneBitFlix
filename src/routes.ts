import express from 'express';
//Controllers
import { coursesController } from './controllers/coursesController';
import { categoriesController } from './controllers/categoriesController';
import { episodesController } from './controllers/episodesController';

export const router = express.Router();

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