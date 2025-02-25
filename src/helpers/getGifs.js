export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=CBrV2r0bfg0H4mVlAwkKk7L93dl939ma&q=${category}&limit=9`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    //console.log(data);
    const gifs = data.map(img => ({
        
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
            
        
    }));
    //console.log(gifs)
    return gifs;
}