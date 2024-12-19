import { API_URL, mock } from "../utils/constants";

async function fetchList() {
  try {
    const data = await fetch(API_URL);
    // if rate limit exceeded, return mock data
    let res = mock;
    if (data.ok) res = await data.json();
    return res;
  } catch (e) {
    console.warn(e);
    throw new Error(e);
  }
}

export default fetchList;
