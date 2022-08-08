import express from 'express';
//Controllers
import { coursesController } from './controllers/coursesController';
import { categoriesController } from './controllers/categoriesController';

export const router = express.Router();

//Categories Routes
router.get('/categories', categoriesController.index);
router.get('/categories/:id', categoriesController.categoryWithCourses);

//Courses Routes
router.get('/courses/featured', coursesController.featuredCourses);
router.get('/courses/:id', coursesController.coursesWithEpisodes);