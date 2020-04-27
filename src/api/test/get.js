import {getBaseURL} from './../helper';
import get from './../get';

const getTestGet = async (url, params = {}) => {
  return await get(url, params);
};
export default getTestGet;
