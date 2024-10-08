import {
  Launch,
  LaunchResponse,
} from "@space-launch-tracking-app/shared-types";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const getLaunches = async (): Promise<Launch[]> => {
  try {
    const response = await axios.get(`${API_URL}/launches`);
    return response.data;
  } catch (error) {
    console.error("Error fetching launches:", error);
    throw error;
  }
};

export const getAllLaunches = async (): Promise<LaunchResponse> => {
  try {
    const response = await axios.get(`${API_URL}/launches/all`);
    console.log("responseeee.!", response);
    return response.data.docs;
  } catch (error) {
    console.error("Error fetching launches:", error);
    throw error;
  }
};
