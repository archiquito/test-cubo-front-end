import api from "../axios";

export interface GetUserResponse {
  id: number;
  first_name: string;
  last_name: string;
  participation: string;
}

export const getUsers = async () => {
  const response = await api.get<GetUserResponse[]>("/users");
  return response.data;
};

export const createUser = async (userData: Omit<GetUserResponse, "id">) => {
  const response = await api.post("/users", userData);
  return response.data;
};
