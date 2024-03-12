import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/database'

export interface IProductModel extends Model {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}


const ProductModel = sequelize.define<IProductModel>('Product', {
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
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stock: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default ProductModel