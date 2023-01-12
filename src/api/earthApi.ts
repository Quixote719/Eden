// A mock function to mimic making an async request for data
export function fetchEarthData({ solarPlanetIndex = 3 }) {
  return new Promise(resolve => setTimeout(() => resolve({ solarPlanetIndex }), 1000));
}
