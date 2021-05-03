import axios from 'axios';

import { GITHUB } from '../../shared/constants/services';

const api = axios.create({
  baseURL: GITHUB.API_URL,
});

export default api;
