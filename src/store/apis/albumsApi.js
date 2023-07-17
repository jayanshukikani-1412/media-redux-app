import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const pause = (durations) => {
  return new Promise((resolve)=> {
      setTimeout(resolve, durations);
  })
}

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3002',
    fetchFn: async (...args) => {
      // Remove for Production
      await pause(1000);
      return fetch(...args);
    }
  }),
  endpoints(builder) {
    return {
      removeAlbums: builder.mutation({
        invalidatesTags:(result, error, album) => {
          return [{ type:"Album", id: album.id}]
        },
        query:(album)=>{
          return {
            url:`/albums/${album.id}`,
            method:'DELETE'
          };
        }
      }),
      addAlbum: builder.mutation({
        invalidatesTags:(result, error, user) => {
          return [{type:'UserAlbums', id:user.id}];
        },
        query: (user) => {
          return {
            url:'/albums',
            method:'POST',
            body:{
              userId:user.id,
              title: faker.commerce.productName()
            },
          }
        }
      }),
      fetchAlbums: builder.query({
        providesTags:(result, error, user, album) => {
          const tags = result.map(album => {
            return { type:'Album', id:album.id}
          });
          tags.push({type:'UserAlbums', id:user.id});
          return tags;
        },
        query: (user) => {
          return {
            url: '/albums',
            params: {
              userId: user.id,
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumsMutation } = albumsApi;
export { albumsApi };
