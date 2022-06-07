import { useDispatch } from "react-redux"
import Song from "../models/song"
import { push, pushPlay } from "../track_queue/trackQueueSlice"

export const SongItem = ({ track }: { track: Song }) => {
    const dispatch = useDispatch()
    return <div
        className="pb-2 border-b-2 mb-2 flex flex-row"
        key={track.file} >
        <i className='bx bx-play-circle text-4xl p-2'
            onClick={() => {
                dispatch(pushPlay(track))
            }}
        ></i>
        <div>
            <div className='text-lg'>{track.title}</div>
            <div className='text-sm'>{track.artists && track.artists[0].name}</div>
        </div>
        <div className='flex-1'></div>
        <i className='bx bxs-add-to-queue text-2xl p-2'
            onClick={() => {
                dispatch(push(track))
            }}>
        </i>
    </div>
}