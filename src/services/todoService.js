import axios from 'axios';
import Api from '../utils/config';
import getTodaysDate from '../utils/getTodaysDate';

const TodoService = {
  createApiKey: async (email) => {
    try {
      const response = await axios.post(`${Api.baseUrl}keys/generate`, {
        email,
      });

      return await response.data;
    } catch (error) {
      console.error(error);
    }
  },

  getApiKey: async (email) => {
    try {
      const response = await axios.get(`${Api.baseUrl}keys?email=${email}`);

      return await response.data;
    } catch (error) {
      console.error(error);
    }
  },

  getTodos: async (amount) => {
    try {
      const response = await axios.get(
        `${Api.baseUrl}todos?apikey=${Api.key}&amount=${amount}&randomdone=true`
      );
      const data = await response.data;

      data.forEach((d) => {
        d.date = getTodaysDate();
      });

      return data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default TodoService;
