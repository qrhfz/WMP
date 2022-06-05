import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Album from '../models/album'
import Artist from '../models/artist'
import Song from '../models/song'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    endpoints: builder => ({
        getSongs: builder.query<Array<Song>, void>({

            query: () => '/songs'
        }),
        getAlbums: builder.query<Array<Album>, void>({

            query: () => '/albums'
        }),
        getArtist: builder.query<Array<Artist>, void>({

            query: () => '/artists'
        })
    })
})

export const { useGetSongsQuery, useGetAlbumsQuery, useGetArtistQuery } = apiSlice