const baseUrl = "https://swapi.dev/api/"

export function getAllStarships() {
  return fetch(`${baseUrl}starships`)
  .then(res => res.json())
}

export function getDetails(url) {
  return fetch(`${baseUrl}${url}`)
  .then(res => res.json())
}

export async function getPilots(urls) {
  const promises = urls.map(url => fetch(url).then(res => res.json()));
  const pilotObjects = await Promise.all(promises);
  return pilotObjects;
}