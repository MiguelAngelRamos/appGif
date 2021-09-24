// CkcuGGkWccxwfoKVzDxf8IscUeYqewzF
// https://api.giphy.com/v1/gifs/search?q="ironman"&limit=10&api_key=CkcuGGkWccxwfoKVzDxf8IscUeYqewzF

export const getGifs = async(gif) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(gif)}&limit=10&api_key=CkcuGGkWccxwfoKVzDxf8IscUeYqewzF`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs;
}