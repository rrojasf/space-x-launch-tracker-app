import axios from 'axios';
import { Launch } from '@space-launch-tracking-app/shared-types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getLaunches = async (): Promise<Launch[]> => {
  try {
    const response = await axios.get(`${API_URL}/launches`);
    return response.data;
  } catch (error) {
    console.error('Error fetching launches:', error);
    throw error;
  }
};