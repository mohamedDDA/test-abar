const API_BASE_URL = 'https://abarhail.xo.je/abarhail-api/api/v1';

async function fetchFromApi(endpoint) {
  try {
    const res = await fetch(`${API_BASE_URL}/${endpoint}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error(`Error fetching ${endpoint}:`, err);
    throw err;
  }
}

export const Api = {
  getNews: () => fetchFromApi('news'),
};
