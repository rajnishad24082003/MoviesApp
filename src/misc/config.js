const api_base_url = "https://api.tvmaze.com";

export const apiget = async (query) => {
  let searchprom = await fetch(`${api_base_url}${query}`);
  let result = await searchprom.json();
  return result;
};
