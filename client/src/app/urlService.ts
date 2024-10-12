import axios from 'axios';
import { serverUrl } from '../helper/Connstants';
import { urlInterface } from '../interface/UrlData';

// Service to handle URL operations
const fetchUrls = async (): Promise<urlInterface[]> => {
  const response = await axios.get(`${serverUrl}/allUrls`);
  return response.data.data;
};

const deleteUrl = async (id: string): Promise<void> => {
  await axios.delete(`${serverUrl}/getUrl/${id}`);
};

const createUrl = async (originalUrl: string): Promise<urlInterface> => {
  const response = await axios.post(`${serverUrl}/createUrl`, { originalUrl });
  return response.data.data;
};


export const urlService = {
  fetchUrls,
  deleteUrl,
  createUrl,
};
