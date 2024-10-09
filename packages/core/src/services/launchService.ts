import {
  Launch,
  LaunchResponse,
} from "@space-launch-tracking-app/shared-types";
import axios, { AxiosResponse } from "axios";

const API_URL = process.env.API_URL || "http://localhost:5000/api";

export const getLaunches = async (): Promise<Launch[]> => {
  try {
    const response: AxiosResponse<Launch[]> = await axios.get(
      `${API_URL}/launches`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching launches:", error);
    throw new Error("Failed to fetch launches");
  }
};

export const getAllLaunches = async (): Promise<LaunchResponse> => {
  try {
    const response: AxiosResponse<{ docs: Launch[] }> = await axios.get(
      `${API_URL}/launches/all`,
    );

    if (!response.data || !Array.isArray(response.data.docs)) {
      throw new Error("Invalid response format from server");
    }

    return {
      docs: response.data.docs,
      totalDocs: response.data.docs.length,
      offset: 0,
      limit: response.data.docs.length,
      totalPages: 1,
      page: 1,
      pagingCounter: 1,
      hasPrevPage: false,
      hasNextPage: false,
      prevPage: null,
      nextPage: null,
    };
  } catch (error) {
    console.error("Error fetching all launches:", error);
    throw new Error("Failed to fetch all launches");
  }
};
