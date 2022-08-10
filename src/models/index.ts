import { User } from './User';
import { Episode } from './Episode';
import { Course } from './Course';
import { Category } from './Category'
import { Favorite } from './Favorite';

//ARQUIVO QUE REUNE TODOS OS MODELS SEQUELIZE DA APLICAÇÃO
//E SEUS RELACIONAMENTOS

//Relacionamento One to Many: Category -> Course
Category.hasMany(Course, { as: 'courses' });
Course.belongsTo(Category);

//Relacionamento One to Many: Course -> Episode 
Course.hasMany(Episode, { as: 'episodes' });
Episode.belongsTo(Course);

//Relacionamento Course -> Favorite -> User
Course.belongsToMany(User, { through: Favorite });
Course.hasMany(Favorite, { as: 'FavoriteUsers' , foreignKey: 'course_id' });
Favorite.belongsTo(Course);
Favorite.belongsTo(User);
User.belongsToMany(Course, { through: Favorite });
User.hasMany(Favorite, { as: 'FavoriteCourses' , foreignKey: 'user_id' });

export {
  Category,
  Course,
  Episode,
  User,
  Favorite
}