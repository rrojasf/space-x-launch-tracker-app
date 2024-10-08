import { type Launch } from "@space-launch-tracking-app/shared-types";
import axios from "axios";
import { getBasicOptions } from "./launchOptions";

const SPACEX_API_URL =
  process.env.SPACEX_API_URL || "https://api.spacexdata.com/v5";

export const fetchLaunches = async (type = "upcoming"): Promise<Launch[]> => {
  const endpoint = type === "past" ? "past" : "upcoming";
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

export const fetchAllLaunches = async (): Promise<Launch[]> => {
  try {
    const response = await axios.post(
      `${SPACEX_API_URL}/launches/query`,
      getBasicOptions()
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
