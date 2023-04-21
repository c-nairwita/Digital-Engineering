import axios from "axios";

const apiUrl = "http://localhost:5000/todos";

export const addTodo = async (todo) => {
  const response = await axios.post(apiUrl, todo);
  return response.data;
};

export const editTodo = async (id, todo) => {
  const response = await axios.put(`${apiUrl}/${id}`, todo);
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await axios.delete(`${apiUrl}/${id}`);
  return response.data;
};
