import axios from 'axios';
import { Launch } from '@space-launch-tracking-app/shared-types';

const SPACEX_API_URL = process.env.SPACEX_API_URL || 'https://api.spacexdata.com/v5';

export const fetchLaunches = async (type: string = 'upcoming'): Promise<Launch[]> => {
  const endpoint = type === 'past' ? 'past' : 'upcoming';
  const response = await axios.get(`${SPACEX_API_URL}/launches/${endpoint}`);
  return response.data;
};

export const fetchLaunchById = async (id: string): Promise<Launch | null> => {
  try {
    const response = await axios.get(`${SPACEX_API_URL}/launches/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    throw error;
  }
};