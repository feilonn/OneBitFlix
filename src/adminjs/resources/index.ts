import { ResourceWithOptions } from "adminjs";

//Configurações Resource AdminJS
import { categoryResourceOptions } from "./category";
import { courseResourceOptions } from "./course";

//Models e Relacionamentos
import { Category, Course } from "../../models";

//ARQUIVO PARA REUNIR TODOS OS RESOURCES PARA O ADMINJS GERENCIAR
export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions,
  },
  {
    resource: Course,
    options: courseResourceOptions
  },
];
