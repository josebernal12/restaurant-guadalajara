import { DataTypes, Model, ModelCtor } from 'sequelize';
import sequelize from '../database/database';

// Definimos la interfaz IUser que representa la estructura de nuestro modelo de usuario
export interface IUserModel extends Model {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Definimos el modelo de usuario usando Sequelize
const UserModel = sequelize.define<IUserModel>('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default UserModel
