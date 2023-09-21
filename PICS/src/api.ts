import axios from 'axios';

export interface Image {
  id: string;
  url: string;
  description: string;
}

export const searchImages: (term: string) => Promise<Image[]>  = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos',{
    headers: {
      Authorization: 'Client-ID HOiKEfLYfZO2hA_0xjiXLxA5vZ7X0lJ0wDzWX4hq9Vo'
    },
    params: {
      query: term
    }
  })

  return response.data.results.map((item:any) => {
    console.log(item)
    return {id: item.id, url: item.urls.small}
  });
} 
