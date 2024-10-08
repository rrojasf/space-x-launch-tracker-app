import { NextFunction, Request, Response } from "express";
import { fetchRecentTweets } from "../services/twitterService";

export const getRecentTweets = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const tweets = await fetchRecentTweets();
    res.json(tweets);
  } catch (error) {
    next(error);
  }
};
