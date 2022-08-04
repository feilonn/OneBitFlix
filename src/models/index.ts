import { User } from './User';
import { Episode } from './Episode';
import { Course } from './Course';
import { Category } from './Category'

//ARQUIVO QUE REUNE TODOS OS MODELS SEQUELIZE DA APLICAÇÃO
//E SEUS RELACIONAMENTOS

//Relacionamento One to Many: Category -> Course
Category.hasMany(Course);
Course.belongsTo(Category);

//Relacionamento One to Many: Course -> Episode 
Course.hasMany(Episode);
Episode.belongsTo(Course);

export {
  Category,
  Course,
  Episode,
  User
}