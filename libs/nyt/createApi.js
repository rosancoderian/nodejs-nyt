import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default function createApi(url) {
  return axios.create({
    baseURL: `${process.env.NYT_API_URL}/${url}`,
    params: {
      "api-key": "H4MwssDiLEkwKfUOejAWNxifvT6xKGN7",
    },
  });
}
