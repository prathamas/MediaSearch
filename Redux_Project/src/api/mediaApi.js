import axios from 'axios'

// Getting APIs key
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY

// Fetching Photos
export async function fetchPhotos(query,page=1,per_page=20){
     const  res =await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,page,per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })

    return res.data
}

// Fetching Videos
export async function fetchVideo(query,per_page=15) {
    const  res =await axios.get('https://api.pexels.com/videos/search',{
        params:{query,per_page},
        headers:{Authorization:PEXELS_KEY}
    })

    return res.data 
}

// Fetching GIFs
export async function fetchGIF(query,limit=20) {
    const  res =await axios.get('https://tenor.googleapis.com/v2/search',{
        params:{q:query,key:TENOR_KEY,limit},
    })

    return res.data 
}
