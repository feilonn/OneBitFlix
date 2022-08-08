import express from 'express'
import { categoriesController } from './controllers/categoriesController';

export const router = express.Router();

//Categories Routes
router.get('/categories', categoriesController.index);