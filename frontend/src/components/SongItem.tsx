import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Song from "../models/song"
import { RootState } from "../store"
import { push, pushPlay } from "../track_queue/trackQueueSlice"

export const SongItem = ({ track }: { track: Song }) => {
    const trackQueue = useSelector((state: RootState) => state.trackQueue)
    const dispatch = useDispatch()
    function isPlaying(): boolean {
        return trackQueue.mainQueue[0]?.id === track.id
    }

    function inQueue(): boolean {
        return trackQueue.mainQueue.includes(track)
    }

    return <div
        className="pb-2 border-b-2 mb-2 flex flex-row"
        key={track.file} >

        <div>
            <div
                style={{ cursor: "pointer" }}
                className={`text-lg hover:text-green-500 ${isPlaying() && "text-green-700"}`}
                onClick={() => {
                    if (isPlaying()) return
                    dispatch(pushPlay(track))
                }}>
                {track.title}
            </div>
            <div className='text-sm'>
                {track.artists.map((artist, index, arr) => {
                    return <Link
                        className="hover:text-gray-700"
                        to={`artists/${artist.id}`}
                        key={artist.id}>
                        {artist.name}
                        {index !== arr.length - 1 && ", "}
                    </Link>
                })}
            </div>
        </div>
        <div className='flex-1'></div>
        <i className={`bx text-2xl p-2 ${inQueue() ? "bxs-check-circle" : "bxs-add-to-queue"}`}
            onClick={() => {
                if (inQueue()) return
                dispatch(push(track))
            }}>
        </i>
    </div>
}