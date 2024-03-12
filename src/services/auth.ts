import generateToken from "../helpers/generateToken";
import { checkEmailInDB } from "../helpers/validate"
import { IUser } from "../interfaces/user.interfaces"
import User from "../models/UserModel"
import bcrypt from 'bcrypt'
export const register = async ({ name, lastName, email, password, confirmPassword }: IUser) => {
  const saltRounds = 10;

  try {
    if (confirmPassword !== password) {
      return 'Los passwords no coinciden';
    } else {
      // Devuelve una promesa que resuelve con el nuevo usuario
      return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, (err, salt) => {
          if (err) {
            reject(err);
          } else {
            bcrypt.hash(password, salt, async (err, hash) => {
              if (err) {
                reject(err);
              } else {
                try {
                  const newUser = await User.create({ name, lastName, email, password: hash });
                  console.log(newUser.dataValues);
                  const token = generateToken(newUser.dataValues.id)
                  resolve({ user: newUser.dataValues, token });
                } catch (error) {
                  reject(error);
                }
              }
            });
          }
        });
      });
    }
  } catch (error) {
    console.log(error);
    throw error; // Asegúrate de propagar el error para que sea manejado correctamente fuera de esta función
  }
};

export const login = async (email: string, password: string) => {
  try {
    const user = await checkEmailInDB(email)
    if (!user) {
      return 'email o password no son correctos'
    }
    const match = await bcrypt.compare(password, user.password)
    if (match) {
      const token = generateToken(user.dataValues.id)
      const userLogin = { user, token }
      return userLogin
    } else {
      return 'email o password no son correctos'
    }
  } catch (error) {
    console.log(error)
  }
}