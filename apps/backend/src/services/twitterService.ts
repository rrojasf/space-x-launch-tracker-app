import axios from "axios";
import { Tweet } from "@space-launch-tracking-app/shared-types";

const TWITTER_API_URL =
  process.env.TWITTER_API_URL || "https://api.twitter.com/2";
const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

export const fetchRecentTweets = async (): Promise<Tweet[]> => {
  const response = await axios.get(`${TWITTER_API_URL}/tweets/search/recent`, {
    params: {
      query: "from:SpaceX",
      max_results: 10,
      tweet_fields: "created_at",
    },
    headers: {
      Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
    },
  });

  return response.data.data.map((tweet: any) => ({
    id: tweet.id,
    text: tweet.text,
    created_at: tweet.created_at,
  }));
};
