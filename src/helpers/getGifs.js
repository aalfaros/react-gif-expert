export const getGifs = async category => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=XAoSOUcM5WLTDwD6DSfWXpE4gDjkLxQ3&q=${category}&limit=4`

  const res = await fetch(url)
  const { data } = await res.json()

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs
}
