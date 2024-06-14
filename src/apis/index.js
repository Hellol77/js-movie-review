import END_POINT from "../constants/api";
import { LANGUAGE } from "../constants/option";

class Api {
  constructor() {
    this.baseUrl = process.env.API_URL;
    this.apiKey = process.env.API_ACCESS_TOKEN;
  }

  async get(endPoint) {
    const response = await fetch(this.baseUrl + endPoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  }

  async getMovies(page) {
    const param = new URLSearchParams({
      language: LANGUAGE.KOREAN,
      page,
    });

    return await this.get(END_POINT.POPULAR_MOVIES(param));
  }
}

export default Api;
