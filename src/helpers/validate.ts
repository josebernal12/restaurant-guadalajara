import { IUser } from "../interfaces/user.interfaces"
import User from "../models/UserModel"

export const checkEmailInDB = async (email: string) => {
  try {
    const existEmail = await User.findOne({ where: { email } });

    if (!existEmail) {
      return null;
    }
    return existEmail;
  } catch (error) {
    console.log(error);
    throw new Error("Error al buscar el usuario por correo electrónico.");
  }
}