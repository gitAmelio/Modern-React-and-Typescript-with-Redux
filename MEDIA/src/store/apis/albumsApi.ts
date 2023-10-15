import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';
import { pause } from '../../dev-only';

// output
export interface Album  {
  id: string;
  title: string;
  userId: string;
}

// input
interface User {
  id: string;
  name: string;
}

type Albums = Album[];

type TagName = 'UsersAlbum' | 'Album';

type TagType = {
  type: TagName;
  id: string;
}

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    // DEV ONLY!!!
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    }
  }),
  tagTypes: ['Album', 'UsersAlbum'],
  endpoints(builder) {
    return {
      removeAlbum: builder.mutation<undefined, Album>({
        invalidatesTags: (result, error, album)=>{
          return [{type: 'Album', id: album.id}]
        },
      // removeAlbum: builder.mutation<undefined, UsersAlbum>({
      //   invalidatesTags: (result, error, {album, user})=>{
      //     return [{type: 'Album', id: user.id}]
      //   },
        query: (album) => {
          return {
            method: "DELETE",
            url: `/albums/${album.id}`
          }
        }
      }),
      fetchAlbums: builder.query<Albums, User>({
        providesTags: (result, error, user) => {
          let tags: TagType[] = [];
          const albumTag = result!.map(album => {
            return { type: 'Album' as const, id: album.id}
          })
          const userTag = {type: 'UsersAlbum' as const, id: user.id}
          tags = [userTag, ...albumTag];

          return tags;
        },
        query: (user) => {
          return {
            url: '/albums', // path relative to the baseUrl
            params: {
              userId: user.id // query string for this request
            },
            method: 'GET'
          }
        }
      }),
      addAlbum: builder.mutation<Album, User>({
        invalidatesTags: (result, error, user) => {
          return [{type: 'UsersAlbum', id: user.id}]
        },
        query: (user) => {
          return {
            url: '/albums', 
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.commerce.productName()
            }
          }
        }
      })
    }
  }
}) 

export const { 
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation
} = albumsApi;
export { albumsApi };