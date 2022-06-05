import { useDispatch } from "react-redux"
import { useGetSongsQuery } from "../api/apiSlice"
import { SongItem } from "../components/SongItem"
import Song from "../models/song"
import { push, pushPlay } from "../track_queue/trackQueueSlice"

export const Songs = () => {
    const { data: tracks = [], isLoading, isSuccess, isError } = useGetSongsQuery()

    if (isLoading) {
        return <div>Loading...</div>
    } else if (isError) {
        return <div>Error</div>
    } else if (tracks.length === 0) {
        return <div>No Songs</div>
    }

    return <div>

        {tracks.map((track: Song) => {
            return <SongItem track={track}></SongItem>
        })}
    </div>
}