import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';
import { Album } from './albumsApi';
import { pause } from '../../dev-only';

interface Photo {
  id: string;
  url: string;
  albumId: string;
}

type Photos = Photo[];

type TagName = 'Photo' | 'AlbumsPhoto';

type TagType = {
  type: TagName;
  id: string;
}

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    // DEV ONLY!!!
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    }
  }),
  tagTypes: ['Photo', 'AlbumsPhoto'],
  endpoints(builder) {
    return {
      addPhoto: builder.mutation<Photo, Album>({
        invalidatesTags: (result, error, album) => {
          return [{type: 'AlbumsPhoto', id: album.id}]
        },
        query: (album) => {
          return {
            url: '/photos/',
            method: "POST",
            body: {
              albumId: album.id,
              url: faker.image.url({width:150, height: 150})
            }
          }
        }
      }),
      removePhoto: builder.mutation<undefined, Photo>({
        invalidatesTags: (result, error, photo)=>{
          return [{type: 'Photo', id: photo.id}]
        },
        query: (photo) => {
          return {
            method: "DELETE",
            url: `/photos/${photo.id}`
          }
        }
      }),
      fetchPhotos: builder.query<Photos, Album>({
        providesTags: (result, error, album) => {
          let tags: TagType[] = [];
          const photosTag = result!.map((photo) => {
            return { type: 'Photo' as const, id: photo.id }
          })
          const albumTag = {type: 'AlbumsPhoto' as const, id: album.id}
          tags = [albumTag, ...photosTag];

          return tags;
        },
        query: (album) => {
          return {
            url: '/photos',
            params: {
              albumId: album.id
            },
            method: 'GET'
          }
        }
      })
    }
  }  
})

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation
} = photosApi;
export { photosApi }

