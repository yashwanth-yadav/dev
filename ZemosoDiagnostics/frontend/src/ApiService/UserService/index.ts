import axios from 'axios';
import { UserPropsType } from '../../utils/Types';

export const UserService = {
  getUsers: async () => {
    try {
      const usersData = await axios.get("https://cloud-svc.zemosodia50.ga/users/")
      return usersData.data;

    } catch (error) {
      console.log(error);
    }
  },
  postUser: async (user: UserPropsType) => {
    try {
      await axios.post("https://cloud-svc.zemosodia50.ga/users/", user);
    } catch (error) {
      console.log(error);
    }
  }
};
