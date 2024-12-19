import { API_URL, mock } from "../utils/constants";

async function fetchList() {
  try {
    const data = await fetch(API_URL);
    // if rate limit exceeded, return mock data
    let res;
    if (data.ok) res = await data.json();
    else res = mock;
    return res;
  } catch (e) {
    console.warn(e);
    throw new Error(e);
  }
}

export default fetchList;
