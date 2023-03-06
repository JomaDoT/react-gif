export const GetGifs = async (category) => {
    const apikey = "0l5Fv7NmugJhf33Ot7aTV5SlsZkJ0L87";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${category}&limit=5`
    );
    const { data } = await resp.json();
  
    const gifs = data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    }));
    return gifs;
  };
  