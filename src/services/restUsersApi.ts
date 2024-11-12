import axios from 'axios';

import { User } from '@prisma/client';

export const getAllUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`http://localhost:3000/api/users`);
  return response.data;
};
