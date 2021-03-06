import dotenv from 'dotenv';
import models from '../models';
import authHelpers from '../helpers/authHelper';

dotenv.config();

const { passwordHasher } = authHelpers;
const { User } = models;
const admin = {
  firstName: 'Elie',
  lastName: 'Tuyishime',
  email: 'elietu@gmail.com',
  gender: 'male',
  password: process.env.ADMIN_PASSWORD,
  type: 'admin',
  phoneNumber: '0781825085',
  createdAt: new Date(),
  updatedAt: new Date(),
};
const registerAdmin = async (data) => {
  data.password = await passwordHasher(data.password);
  const { dataValues } = await User.create(data, {
    fields: [
      'firstName',
      'lastName',
      'email',
      'password',
      'gender',
      'phoneNumber',
      'type',
      'createAt',
      'updatedAt',
    ],
  });
  return dataValues;
};
registerAdmin(admin);
export default registerAdmin;
