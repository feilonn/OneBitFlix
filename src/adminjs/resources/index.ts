import { ResourceWithOptions } from "adminjs";

//Configurações Resource AdminJS
import { categoryResourceOptions } from "./category";
import { courseResourceFeatures, courseResourceOptions } from "./course";
import { episodeResourceOptions, episodeResourceFeatures } from './episode';
import { userResourceOptions } from './user';

//Models e Relacionamentos
import { Category, Course, Episode, User } from "../../models";

//ARQUIVO PARA REUNIR TODOS OS RESOURCES PARA O ADMINJS GERENCIAR
export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions,
  },
  {
    resource: Course,
    options: courseResourceOptions,
    features: courseResourceFeatures
  },
  {
    resource: Episode,
    options: episodeResourceOptions,
    features: episodeResourceFeatures
  },
  {
    resource: User,
    options: userResourceOptions
  }
];
