import { Http } from './index';
import endpoint from './endpoint';

// Login
export const login = (data) => Http.post(endpoint.login, data);
