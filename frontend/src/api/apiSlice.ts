import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Album from '../models/album'
import Artist from '../models/artist'
import Song from '../models/song'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
    endpoints: builder => ({
        getSongs: builder.query<Array<Song>, void>({

            query: () => '/songs'
        }),
        getAlbums: builder.query<Array<Album>, void>({

            query: () => '/albums'
        }),
        getAlbumDetail: builder.query<Album, string>({

            query: (id) => `/albums/${id}`
        }),
        getArtists: builder.query<Array<Artist>, void>({

            query: () => '/artists'
        }),
        getArtistDetail: builder.query<Artist, string>({

            query: (id) => `/artists/${id}`
        }),
    })
})

export const {
    useGetSongsQuery, useGetAlbumsQuery, useGetArtistsQuery,
    useGetAlbumDetailQuery, useGetArtistDetailQuery
} = apiSlice