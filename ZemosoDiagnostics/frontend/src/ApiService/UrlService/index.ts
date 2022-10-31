import axios from 'axios';

export const UrlService = axios.create({
  baseURL: 'https://cloud-svc.zemosodia50.ga/'
});
