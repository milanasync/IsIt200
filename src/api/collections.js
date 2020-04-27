import {getBaseURL} from './helper';
import get from './get';

const getCollections = async (params = {}) => {
  return await get( `https://www.getpostman.com/collections/${params.id}`, params);
};
export default getCollections;