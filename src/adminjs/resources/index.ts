import { categoryResourceOptions } from './category';
import { ResourceWithOptions } from 'adminjs';
import { Category } from '../../models';

//ARQUIVO PARA REUNIR TODOS OS RESOURCES PARA O ADMINJS GERENCIAR
export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOptions
    }
]