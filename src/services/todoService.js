import axios from 'axios';
import Api from '../utils/config';

const getTodos = async (amount) => {
  try {
    const response = await axios.get(
      `${Api.baseUrl}todos?apikey=${Api.key}&amount=${amount}&randomdone=false`
    );

    localStorage.setItem('todos', JSON.stringify(response.data));

    return await response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getTodos;
