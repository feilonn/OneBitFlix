import { Course } from './Course';
import { Category } from './Category'

//ARQUIVO QUE REUNE TODOS OS MODELS SEQUELIZE DA APLICAÇÃO
//E SEUS RELACIONAMENTOS

//Relacionamento Many to One: Category -> Course
Category.hasMany(Course);
Course.belongsTo(Category);

export {
  Category,
  Course
}