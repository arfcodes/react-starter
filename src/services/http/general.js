/**
 * services/http/general.js
 */
import { Http } from './index';
import endpoint from './endpoint';

// Get homepage content
export const getHomepage = () => Http.get(endpoint.homepage);
