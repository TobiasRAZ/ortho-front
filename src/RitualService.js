import { extend } from 'quasar';
import axios from 'axios';

const url = 'http://localhost:5000/api/rituals/';

class RitualService {
  static async get() {
    const { data } = await axios.get(url);
    return data;
  }

  static async add(ritual) {
    const { data } = await axios.post(url, ritual);
    return data.insertedId;
  }

  static update(ritual) {
    const _id = ritual._id;
    const update = extend(false, {}, ritual);
    delete update._id;

    return axios.post(url + ritual._id, update);
  }

  static delete(_id) {
    return axios.delete(url + _id);
  }
}

export default RitualService;
